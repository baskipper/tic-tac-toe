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
  text: string;
  Arr = Array;
  num: number = 3;
  currentPlayer: string = this.X;

  constructor() {
    console.log('Hello CellContainerComponent Component');
    this.text = 'Hello World';
  }

  togglePlayer() {
    console.log("Current player is ", this.currentPlayer);
    this.currentPlayer = this.currentPlayer === this.X ? this.O : this.X;
  }

}
