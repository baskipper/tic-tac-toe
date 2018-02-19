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

  text: string;
  Arr = Array;
  num: number = 3;

  constructor() {
    console.log('Hello CellContainerComponent Component');
    this.text = 'Hello World';
  }

}
