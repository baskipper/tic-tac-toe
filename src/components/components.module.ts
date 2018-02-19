import { NgModule } from '@angular/core';
import { CellComponent } from './cell/cell';
import { CellContainerComponent } from './cell-container/cell-container';
@NgModule({
	declarations: [CellComponent,
    CellContainerComponent],
	imports: [],
	exports: [CellComponent,
    CellContainerComponent]
})
export class ComponentsModule {}
