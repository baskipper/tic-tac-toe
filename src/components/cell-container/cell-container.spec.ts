import { async, TestBed } from '@angular/core/testing';
import { IonicModule, Platform } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { CellContainerComponent } from './cell-container';
import {
  PlatformMock,
  StatusBarMock,
  SplashScreenMock
} from '../../../test-config/mocks-ionic';
import {CUSTOM_ELEMENTS_SCHEMA, SimpleChange} from '@angular/core';
import {CellComponent} from '../cell/cell';

describe('CellComponent Component', () => {
  let fixture;
  let component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CellContainerComponent, CellComponent],
      imports: [
        IonicModule.forRoot(CellContainerComponent)
      ],
      providers: [
        { provide: StatusBar, useClass: StatusBarMock },
        { provide: SplashScreen, useClass: SplashScreenMock },
        { provide: Platform, useClass: PlatformMock }
      ]
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CellContainerComponent);
    component = fixture.componentInstance;
  });

  it('should be created', () => {

    expect(component instanceof CellContainerComponent).toBe(true);
  });



});
