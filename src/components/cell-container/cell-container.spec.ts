import {async, TestBed} from '@angular/core/testing';
import {AlertController, IonicModule, Platform} from 'ionic-angular';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {CellContainerComponent} from './cell-container';
import {
  PlatformMock,
  StatusBarMock,
  SplashScreenMock,
  CurrentGameStateServiceMock,
  AlertControllerMock
} from '../../../test-config/mocks-ionic';
import {CUSTOM_ELEMENTS_SCHEMA, SimpleChange} from '@angular/core';
import {CellComponent} from '../cell/cell';
import {CurrentGameStateService} from '../../providers/current-game-state.service';

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
        {provide: StatusBar, useClass: StatusBarMock},
        {provide: SplashScreen, useClass: SplashScreenMock},
        {provide: Platform, useClass: PlatformMock},
        {provide: CurrentGameStateService, useClass: CurrentGameStateServiceMock},
        {provide: AlertController, useClass: AlertControllerMock}
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CellContainerComponent);
    component = fixture.componentInstance;
  });

  it('should be created', () => {

    expect(component instanceof CellContainerComponent).toBe(true);
  });
  //
  // this.gameOver = false;
  // this.currentPlayer = this.X;

  describe('resetGame method', () => {
    it('should set numberOfMoves = 0', () => {
      component.numberOfMoves = 18;
      component.resetGame();
      expect(component.numberOfMoves).toEqual(0);
    });
    it('should set gameOver = false', () => {
      component.gameOver = true;
      component.resetGame();
      expect(component.gameOver).toBe(false);
    });
    it('should set currentPlayer = X', () => {
      component.numberOfMoves = 'Z';
      component.resetGame();
      expect(component.currentPlayer).toEqual('X');
    });
  });

  describe('togglePlayer method', () => {
    let eventArgs = {row: 0, column: 1, value: '0'};


    it('should update movesMade with the proper value', () => {
      component.togglePlayer(eventArgs);
      expect(component.movesMade[eventArgs.row][eventArgs.column]).toEqual(eventArgs.value);
    });
    it('should toggle the current player', () => {
      component.currentPlayer = 'X';
      component.togglePlayer(eventArgs);
      expect(component.currentPlayer).toEqual('O');

    });
    it('should set gameOver to true if there is victory after the 5th call onwards', () => {
      component.gameOver = false;
      component.togglePlayer(eventArgs);
      component.togglePlayer(eventArgs);
      component.togglePlayer(eventArgs);
      component.togglePlayer(eventArgs);
      component.togglePlayer(eventArgs);
      expect(component.gameOver).toBe(true);
    });
    it('should do something', () => {

    });
    it('should do something', () => {

    });
    it('should do something', () => {

    });
  });


});
