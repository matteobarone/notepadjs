import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  public notes: Array<string>;
  public currentNote: string;
  constructor() { }

  ngOnInit() {
    this.notes = Object.keys(localStorage);
  }

  public enter(event): void {
    const keyPressed = event.key;
    if (keyPressed === 'Enter') {
      this.notes.push(this.currentNote);
      localStorage.setItem(this.currentNote, this.currentNote);
      this.currentNote = '';
    }
  }

  public clear(): void {
    this.notes.length = 0;
    localStorage.clear();
  }

}
