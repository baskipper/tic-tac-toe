import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CellComponent } from './cell/cell';
import { CellContainerComponent } from './cell-container/cell-container';
import { IonicModule } from 'ionic-angular';

@NgModule({
	declarations: [CellComponent,
    CellContainerComponent],
	imports: [IonicModule],
	exports: [CellComponent,
    CellContainerComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ComponentsModule {}
