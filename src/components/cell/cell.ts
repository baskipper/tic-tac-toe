import {Component, EventEmitter, Input, Output, SimpleChanges} from '@angular/core';

/**
* This component represents a cell in the tic-tac-toe board. It can hold a state of
 * X, O, or empty.
 * @Component cell
 */
@Component({
  selector: 'cell',
  templateUrl: 'cell.html'
})
export class CellComponent {
  @Input('player') player: string;
  @Input('row') row: number;
  @Input('column') column: number;
  @Input('reset') reset: boolean;
  @Output('change') change = new EventEmitter();

  value: string = 'empty';

  private X: string = 'X';
  private O: string = 'O';

  temporaryHide: boolean = true;
  hasBeenClicked: boolean = false;


  constructor() {
    console.log('Hello CellComponent Component');
  }

  /*
  * This method keeps track of the gameOver variable in CellContainer, and resets
  * the state of the cell whenever a new game is created.
  * @method ngOnChanges
  * @param changes Contains the changes to the gameOver value
  * */
  ngOnChanges(changes: SimpleChanges)
  {
    if(changes.reset && changes.reset.previousValue && !changes.reset.currentValue)
    {
      this.temporaryHide = true;
      this.hasBeenClicked = false;
      this.value = 'empty';
    }
  }

  /**
   * This method sets the current value of the cell on click, and displays
   * the proper icon on the game board.
   * @method onClick
   *
   */

  onClick() {
    if(!this.hasBeenClicked) {
      this.value = this.player;
      this.temporaryHide = false;
      this.hasBeenClicked = true;
      this.change.emit({row: this.row, column: this.column, value: this.value});
    }
  }
}
