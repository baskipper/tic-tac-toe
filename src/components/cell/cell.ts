import {Component, Input} from '@angular/core';

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
  temporaryHide: boolean = true;

  constructor() {
    console.log('Hello CellComponent Component');
    this.text = 'Hello World';
  }

  onClick() {
    console.log('Cell Clicked!');
    this.temporaryHide = false;
  }

}
