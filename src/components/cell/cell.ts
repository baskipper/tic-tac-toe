import {Component, EventEmitter, Input, Output} from '@angular/core';

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
  @Input('player') player: string = 'empty';
  @Output('change') change = new EventEmitter();

  value: string = 'empty';
  private X: string = 'X';
  private O: string = 'O';
  temporaryHide: boolean = true;
  hasBeenClicked: boolean = false;


  constructor() {
    console.log('Hello CellComponent Component');
    // this.text = 'Hello World';
  }

  onClick() {
  if(!this.hasBeenClicked) {
    console.log('Cell Clicked! ', this.player);
    this.value = this.player;
    this.temporaryHide = false;
    this.hasBeenClicked = true;
    this.change.emit();
  }

  }

}
