import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-play-screen',
  templateUrl: './play-screen.component.html',
  styleUrls: ['./play-screen.component.css']
})
export class PlayScreenComponent implements OnInit {
  @Input() nombre: any;

  constructor() { }

  ngOnInit(): void {
  }

}
