import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { NotepadComponent } from './notepad.component';
import { CardComponent } from './card/card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    NotepadComponent
  ],
  declarations: [NotepadComponent, CardComponent]
})
export class NotepadModule { }
