import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotepadComponent } from './notepad.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    NotepadComponent
  ],
  declarations: [NotepadComponent]
})
export class NotepadModule { }
