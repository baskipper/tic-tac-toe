import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CellContainerComponent } from './cell-container/cell-container.component';
import { CellComponent } from './cell/cell.component';


@NgModule({
  declarations: [
    AppComponent,
    CellContainerComponent,
    CellComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
