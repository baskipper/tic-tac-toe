import { Component } from '@angular/core';

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
  currentPlayer: string = this.X;

  constructor() {
    // console.log('Hello CellContainerComponent Component');
    this.text = 'Hello World';
    for(let i = 0; i < 3; i++)
    {
      this.movesMade[i] = [this.EMPTY, this.EMPTY, this.EMPTY]
    }
    // console.log(this.movesMade);
  }

  togglePlayer(eventArgs) {
    // console.log("Current player is ", this.currentPlayer);

    this.numberOfMoves++;
    // console.log('Number if moves is ', this.numberOfMoves);
    this.updateMoves(eventArgs);
    // if (this.numberOfMoves > 5) {
      this.checkForVictory();
    // }
    this.currentPlayer = this.currentPlayer === this.X ? this.O : this.X;
  }

  private checkForVictory() {
    if(this.checkForRowVictory() || this.checkForColVictory() || this.checkForFallingVictory() || this.checkForRisingVictory() )
    {
      console.log('A Winner is ', this.currentPlayer)
    }
  }

  private checkForRowVictory(): boolean {
    for(let i = 0; i < this.movesMade.length; i++)
    {
      let firstCellValue = this.movesMade[i][0];
      if(firstCellValue != this.EMPTY) {
        for (let j = 0; j < this.movesMade[i].length; j++) {
          // console.log('movesmade')
          // console.log(this.movesMade[i][j])
          if (this.movesMade[i][j] !== firstCellValue)
          {
            break;
          }
          else if(this.movesMade[i].length - 1 === j)
          {
            return true;
          }
        }
      }
    }
    return false;
  }
  private checkForColVictory(): boolean {
    for(let i = 0; i < this.movesMade.length; i++) {
      let firstCellValue = this.movesMade[0][i];
      if (firstCellValue != this.EMPTY) {
        for (let j = 0; j < this.movesMade[i].length; j++) {

          // console.log('movesmade')
          // console.log(this.movesMade[j][i])
          if (this.movesMade[j][i] !== firstCellValue) {
            break;
          }
          else if (this.movesMade[i].length - 1 === j) {
            return true;
          }
        }

      }
    }
    return false;
  }
  private checkForFallingVictory(): boolean {
    for(let i = 0; i < this.movesMade.length; i++)
    {
      let firstCellValue = this.movesMade[0][0];
      if(firstCellValue != this.EMPTY) {
          // console.log('movesmade')
          // console.log(this.movesMade[i][i])
          if (this.movesMade[i][i] !== firstCellValue)
          {
            break;
          }
          else if(this.movesMade.length - 1 === i)
          {
            return true;
          }
        }
    }
    return false;
  }
  private checkForRisingVictory(): boolean {
    let j = this.movesMade.length - 1;
    for(let i = 0; i < this.movesMade.length; i++)
    {
      let firstCellValue = this.movesMade[0][2];
      if(firstCellValue != this.EMPTY) {
        // console.log('movesmade')
        // console.log('i', i, 'j', j)
        // console.log(this.movesMade[i][j])
        if (this.movesMade[i][j] !== firstCellValue)
        {
          j = this.movesMade.length -1;
          break;
        }
        else if(this.movesMade.length - 1 === i)
        {
          return true;
        }

      }
      j--;
    }
    return false;
  }

  private updateMoves(eventArgs) {
    let row = eventArgs.row;
    let col = eventArgs.column;
    let value = eventArgs.value;
    this.movesMade[row][col] = value;
    // console.log(this.movesMade)
  }

}
