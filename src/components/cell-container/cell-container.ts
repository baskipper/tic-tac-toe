import { Component } from '@angular/core';
import {CurrentGameStateService} from '../../app/current-game-state.service';

/**
 * Generated class for the CellContainerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'cell-container',
  templateUrl: 'cell-container.html'
})
export class CellContainerComponent {

  private X: string = 'X';
  private O: string = 'O';
  private EMPTY: string = 'empty';
  private numberOfMoves: number = 0;
  private movesMade = [];
  text: string;
  Arr = Array;
  num: number = 3;

  gameOver: boolean = false;
  currentPlayer: string = this.X;
  gameState: CurrentGameStateService

  constructor(gameState: CurrentGameStateService) {
    // console.log('Hello CellContainerComponent Component');
    this.text = 'Hello World';
    this.initMovesMade();
    this.gameState = gameState;
    // console.log(this.movesMade);
  }

  private initMovesMade() {
    for(let i = 0; i < 3; i++)
    {
      this.movesMade[i] = [this.EMPTY, this.EMPTY, this.EMPTY]
    }
  }

  resetGame() {
    this.initMovesMade();
    this.numberOfMoves = 0;
    this.gameOver = false;
    this.currentPlayer = this.X;
  }

  togglePlayer(eventArgs) {
    // console.log("Current player is ", this.currentPlayer);

    this.numberOfMoves++;
    // console.log('Number if moves is ', this.numberOfMoves);
    this.updateMoves(eventArgs);
    if (this.numberOfMoves > 4){
      let victory = this.gameState.checkForVictory(this.movesMade);
      if (!victory && this.numberOfMoves === 9) {
        console.log("MEOW");
        this.gameOver = true;
      }
      else if (victory)
      {
        this.gameOver = true;
      }

  }
    this.currentPlayer = this.currentPlayer === this.X ? this.O : this.X;
  }



  private updateMoves(eventArgs) {
    let row = eventArgs.row;
    let col = eventArgs.column;
    let value = eventArgs.value;
    this.movesMade[row][col] = value;
    // console.log(this.movesMade)
  }

}
