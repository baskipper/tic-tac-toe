import { async, TestBed } from '@angular/core/testing';
import { IonicModule, Platform } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { CellComponent } from './cell';
import {
  PlatformMock,
  StatusBarMock,
  SplashScreenMock
} from '../../../test-config/mocks-ionic';

describe('CellComponent Component', () => {
  let fixture;
  let component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CellComponent],
      imports: [
        IonicModule.forRoot(CellComponent)
      ],
      providers: [
        { provide: StatusBar, useClass: StatusBarMock },
        { provide: SplashScreen, useClass: SplashScreenMock },
        { provide: Platform, useClass: PlatformMock }
      ]
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CellComponent);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    expect(component instanceof CellComponent).toBe(true);
  });

  describe('onClick method', () =>{
    it('should set value = to player', () => {
      component.player = 'bananas';
      component.onClick();
      expect(component.value).toEqual(component.player);
    });
    it('should set temporaryHide = to false', () => {
      component.temporaryHide = true;
      component.onClick();
      expect(component.temporaryHide).toEqual(false);
    })
    it('should set hasBeenClicked = to true', () => {
      component.hasBeenClicked = false;
      component.onClick();
      expect(component.hasBeenClicked).toEqual(true);
    })
    it('should emit a changes event', (done) => {
      component.row = 0;
      component.column = 0;
      component.value = "X";
      component.change.subscribe(args => {
        expect(args).toEqual({row: component.row, column: component.column, value: component.value});
        done();
      });
      component.onClick();
    })
  })

  // it('should have two pages', () => {
  //   expect(component.pages.length).toBe(2);
  // });

});
