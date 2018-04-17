import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rf-turntables',
  templateUrl: './turntables.html',
  styleUrls: ['turntables.scss']
})
export class TurntablesComponent implements OnInit {
  constructor() {
    this.leftVinyle = {
      rpm: 100,
      direction: Direction.counter-clockwise
    }
  }

  ngOnInit() {
  }
}
