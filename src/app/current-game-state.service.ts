import { Injectable } from '@angular/core';

@Injectable()
export class CurrentGameStateService {
  private EMPTY: string = 'empty';

  constructor() { }

  checkForVictory(movesMade) {
    if(this.checkForRowVictory(movesMade) || this.checkForColVictory(movesMade) || this.checkForFallingVictory(movesMade) || this.checkForRisingVictory(movesMade) )
    {
      // console.log('A Winner is ', this.currentPlayer);
      return true;
    }
    return false;
  }

  private checkForRowVictory(movesMade): boolean {
    for(let i = 0; i < movesMade.length; i++)
    {
      let firstCellValue = movesMade[i][0];
      if(firstCellValue != this.EMPTY) {
        for (let j = 0; j < movesMade[i].length; j++) {
          // console.log('movesmade')
          // console.log(movesMade[i][j])
          if (movesMade[i][j] !== firstCellValue)
          {
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
  private checkForColVictory(movesMade): boolean {
    for(let i = 0; i < movesMade.length; i++) {
      let firstCellValue = movesMade[0][i];
      if (firstCellValue != this.EMPTY) {
        for (let j = 0; j < movesMade[i].length; j++) {

          // console.log('movesmade')
          // console.log(movesMade[j][i])
          if (movesMade[j][i] !== firstCellValue) {
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
  private checkForFallingVictory(movesMade): boolean {
    for(let i = 0; i < movesMade.length; i++)
    {
      let firstCellValue = movesMade[0][0];
      if(firstCellValue != this.EMPTY) {
        // console.log('movesmade')
        // console.log(movesMade[i][i])
        if (movesMade[i][i] !== firstCellValue)
        {
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
  private checkForRisingVictory(movesMade): boolean {
    let j = movesMade.length - 1;
    for(let i = 0; i < movesMade.length; i++)
    {
      let firstCellValue = movesMade[0][2];
      if(firstCellValue != this.EMPTY) {
        // console.log('movesmade')
        // console.log('i', i, 'j', j)
        // console.log(movesMade[i][j])
        if (movesMade[i][j] !== firstCellValue)
        {
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
