import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotepadComponent } from './notepad.component';
import { CardComponent } from './card/card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    NotepadComponent
  ],
  declarations: [NotepadComponent, CardComponent]
})
export class NotepadModule { }
