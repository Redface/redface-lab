import {Component, Input, OnInit} from '@angular/core';
import {DIRECTION} from '../enums/enums';
import {VinyleConfig} from '../interfaces/vinyle';

@Component({
  selector: 'rf-vinyle',
  templateUrl: 'vinyle.html',
  styleUrls: ['vinyle.scss']
})
export class VinyleComponent implements OnInit {
  @Input() config: VinyleConfig;
  style = {};

  constructor() {
  }

  ngOnInit() {
    this.style = {animationDuration: `${60000 / this.config.rpm / 100}s`};
  }

  setDirection() {
    return this.config.direction === DIRECTION.CLOCKWISE ? 'spin-clockwise' : 'spin-counter-clockwise';
  }
}
