import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-notepad',
  templateUrl: './notepad.component.html',
  styleUrls: ['./notepad.component.scss']
})
export class NotepadComponent implements OnInit, AfterViewInit {
  private gradientColors: Array<any>;
  public activeGradient: string;
  constructor() { }

  ngOnInit() {
    this.gradientColors = [
      {topColor: '#FF0000', bottomColor: '#FF6900'},
      {topColor: '#BF00FF', bottomColor: '#6A00FF'},
      {topColor: '#1000FF', bottomColor: '#0085FF'},
      {topColor: '#00EEFF', bottomColor: '#00FFC4'},
      {topColor: '#00FF19', bottomColor: '#F6FF00'},
      {topColor: '#FF8F00', bottomColor: '#FF0000'},
    ];
  }

  ngAfterViewInit() {
    setTimeout(() => this.getGradient(), 0)
  }

  getGradient() {
    const randomNumber = Math.floor((Math.random() * this.gradientColors.length));
    const choosenColor = this.gradientColors[randomNumber];
    this.activeGradient = `linear-gradient(180deg, ${choosenColor.topColor}, ${choosenColor.bottomColor})`;
  }

}
