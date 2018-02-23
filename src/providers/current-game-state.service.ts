import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';


/**
 * This service contains methods to track if the game has reached an end state.
 * @service CurrentGameStateService
 */
@Injectable()
export class CurrentGameStateService {
  private EMPTY: string = 'empty';
  private winningCombo = [];

  constructor() { }

  /**
   * This method checks the game state for a victory condition
   *
   * @method checkForVictory
   * @param movesMade The list of moves made thus far.
   * @return True if the game has been won, false otherwise.
   * */
  checkForVictory(movesMade) {
    return (this.checkForRowVictory(movesMade) || this.checkForColVictory(movesMade) || this.checkForFallingVictory(movesMade) || this.checkForRisingVictory(movesMade) )
  }

  getWinningCombo() {
     return this.winningCombo;
  }

  resetWinningCombo() {
    this.winningCombo = [];
  }

  /**
   * This method checks the game state for three in a row
   *
   * @method checkForRowVictory
   * @param movesMade The list of moves made thus far.
   * @return True if the game has been won, false otherwise.
   * */
  private checkForRowVictory(movesMade): boolean {
    for(let i = 0; i < movesMade.length; i++)
    {
      let firstCellValue = movesMade[i][0];
      if(firstCellValue != this.EMPTY) {
        for (let j = 0; j < movesMade[i].length; j++) {
          this.winningCombo.push([i,j]);
          if (movesMade[i][j] !== firstCellValue)
          {
            this.winningCombo = [];
            break;
          }
          else if(movesMade[i].length - 1 === j)
          {
            return true;
          }
        }
      }
    }
    return false;
  }

  /**
   * This method checks the game state for three in a column
   *
   * @method checkForColVictory
   * @param movesMade The list of moves made thus far.
   * @return True if the game has been won, false otherwise.
   * */
  private checkForColVictory(movesMade): boolean {
    for(let i = 0; i < movesMade.length; i++) {
      let firstCellValue = movesMade[0][i];
      if (firstCellValue != this.EMPTY) {
        for (let j = 0; j < movesMade[i].length; j++) {
          this.winningCombo.push([j,i]);
          if (movesMade[j][i] !== firstCellValue) {
            this.winningCombo = [];
            break;
          }
          else if (movesMade[i].length - 1 === j) {
            return true;
          }
        }

      }
    }
    return false;
  }

  /**
   * This method checks the game state for three in a falling diagonal
   *
   * @method checkForFallingVictory
   * @param movesMade The list of moves made thus far.
   * @return True if the game has been won, false otherwise.
   * */
  private checkForFallingVictory(movesMade): boolean {
    for(let i = 0; i < movesMade.length; i++)
    {
      let firstCellValue = movesMade[0][0];
      if(firstCellValue != this.EMPTY) {
        this.winningCombo.push([i,i]);
        if (movesMade[i][i] !== firstCellValue)
        {
          this.winningCombo = [];
          break;
        }
        else if(movesMade.length - 1 === i)
        {
          return true;
        }
      }
    }
    return false;
  }

  /**
   * This method checks the game state for three in a rising diagonal
   *
   * @method checkForRisingVictory
   * @param movesMade The list of moves made thus far.
   * @return True if the game has been won, false otherwise.
   * */
  private checkForRisingVictory(movesMade): boolean {
    let j = movesMade.length - 1;
    for(let i = 0; i < movesMade.length; i++)
    {
      let firstCellValue = movesMade[0][2];
      if(firstCellValue != this.EMPTY) {
        this.winningCombo.push([i,j]);
        if (movesMade[i][j] !== firstCellValue)
        {
          this.winningCombo = [];
          j = movesMade.length -1;
          break;
        }
        else if(movesMade.length - 1 === i)
        {
          return true;
        }
      }
      j--;
    }
    return false;
  }

}
