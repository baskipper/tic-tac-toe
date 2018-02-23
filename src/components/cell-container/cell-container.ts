import { Component } from '@angular/core';
import {CurrentGameStateService} from '../../providers/current-game-state.service';
import {AlertController} from 'ionic-angular';

/**
  This component contains the cells that make up the tic-tac-toe game. It primarily
 keeps track of the moves made, and who the current player is.
 @Component cell-container
 */
@Component({
  selector: 'cell-container',
  templateUrl: 'cell-container.html'
})
export class CellContainerComponent {

  //Declaration of Variables
  private X: string = 'X';
  private O: string = 'O';
  private EMPTY: string = 'empty';
  private numberOfMoves: number = 0;
  private movesMade = [];
  Arr = Array;
  num: number = 3;

  gameOver: boolean = false;
  currentPlayer: string = this.X;

  constructor(private gameState: CurrentGameStateService, private alertCtrl: AlertController) {

    this.initMovesMade();
  }

  private initMovesMade() {
    for(let i = 0; i < 3; i++)
    {
      this.movesMade[i] = [this.EMPTY, this.EMPTY, this.EMPTY]
    }
  }

  /**
  *
   * This method resets all variables to their initial state whenever the game is reset.
   * @method resetGame
  * */
  resetGame() {
    this.initMovesMade();
    this.numberOfMoves = 0;
    this.gameOver = false;
    this.currentPlayer = this.X;
  }

  /**
   * This method toggles the current player, and keeps track of the current state of
   * the game.
   *
   * @method togglePlayer
   * @param eventArgs The row, column, and value of the most recent move.
   */

  togglePlayer(eventArgs) {
    this.numberOfMoves++;
    this.updateMoves(eventArgs);
    if (this.numberOfMoves > 4){
      let victory = this.gameState.checkForVictory(this.movesMade);
      if (!victory && this.numberOfMoves === 9) {
        console.log("MEOW");
        this.gameOver = true;
        let message = "MEOW";
        this.showGameOver(message);
      }
      else if (victory)
      {
        this.gameOver = true;
        let message = this.currentPlayer === this.X ? "Victory through superiority" : "We've lost the battle, but not the war";
        this.showGameOver(message);
      }

  }
    this.currentPlayer = this.currentPlayer === this.X ? this.O : this.X;
  }

  /*
  * This method pops up a message at the end of the game, depending on who won
  * or lost
  * @method showGameOver
  * */
    private showGameOver(message) {
        let alert = this.alertCtrl.create({
          title: 'Game Over',
          subTitle: message,
          buttons: ['OK']
        });
        alert.present();

    }

    /*
    * This simple method updates the tracker
    * @method updateMoves
    * @param eventArgs The row, column, and value of the most recent move.
    * */
  private updateMoves(eventArgs) {
    let row = eventArgs.row;
    let col = eventArgs.column;
    let value = eventArgs.value;
    this.movesMade[row][col] = value;
  }

}
