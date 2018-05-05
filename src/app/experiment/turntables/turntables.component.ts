import {Component, OnInit} from '@angular/core';
import {DIRECTION} from './enums/enums';
import {VinyleConfig} from './interfaces/vinyle';

@Component({
  selector: 'rf-turntables',
  templateUrl: './turntables.html',
  styleUrls: ['turntables.scss']
})
export class TurntablesComponent implements OnInit {
  leftVinyle: VinyleConfig;
  rightVinyle: VinyleConfig;
  private clockwise = DIRECTION.CLOCKWISE;

  constructor() {
    this.leftVinyle = {
      rpm: 100,
      direction: this.clockwise,
    };
    this.rightVinyle = {
      rpm: 100,
      direction: this.clockwise,
    };
  }

  ngOnInit() {
  }
}
