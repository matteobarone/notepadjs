import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NotepadModule } from "./notepad/notepad.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NotepadModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
