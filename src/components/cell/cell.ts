import { Component } from '@angular/core';

/**
 * Generated class for the CellComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'cell',
  templateUrl: 'cell.html'
})
export class CellComponent {

  text: string;

  constructor() {
    console.log('Hello CellComponent Component');
    this.text = 'Hello World';
  }

}
