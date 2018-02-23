import { async, TestBed } from '@angular/core/testing';
import { IonicModule, Platform } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { CellComponent } from './cell';
import {
  PlatformMock,
  StatusBarMock,
  SplashScreenMock,
  CurrentGameStateServiceMock
} from '../../../test-config/mocks-ionic';
import {SimpleChange} from '@angular/core';
import {CurrentGameStateService} from '../../providers/current-game-state.service';

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
        { provide: Platform, useClass: PlatformMock },
        { provide: CurrentGameStateService, useClass: CurrentGameStateServiceMock}
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

    describe('ngChanges event',() => {
      it('should set temporaryHide = true', () => {
        component.ngOnChanges({
          reset: new SimpleChange(true, false, false)
        });
        fixture.detectChanges();
        expect(component.temporaryHide).toEqual(true);
      });
      it('should set hasBeenClicked = false', () => {
        component.ngOnChanges({
          reset: new SimpleChange(true, false, false)
        });
        fixture.detectChanges();
        expect(component.hasBeenClicked).toEqual(false);
      });
      it('should set value = empty', () => {
        component.ngOnChanges({
          reset: new SimpleChange(true, false, false)
        });
        fixture.detectChanges();
        expect(component.value).toEqual('empty');
      });
      it('should set iWin to true if it is in the winning combo', () => {
        component.row = 0;
        component.column = 1;
        component.ngOnChanges({
          reset: new SimpleChange(false, true, false)
        });
        fixture.detectChanges();
        expect(component.iWin).toBe(true);
      })

  })


});
