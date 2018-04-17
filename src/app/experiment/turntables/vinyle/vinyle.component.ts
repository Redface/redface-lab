import {Component, Input, OnInit} from '@angular/core';

interface Direction {
  left: string;
  right: string;
}

interface VinyleConfig {
  rpm: number;
  direction: Direction;
}

@Component({
  selector: 'rf-vinyle',
  templateUrl: 'vinyle.html',
  styleUrls: ['vinyle.scss']
})
export class VinyleComponent implements OnInit {
  @Input() config: VinyleConfig;

  constructor() {
  }

  ngOnInit() {

  }

  setDirection() {
    return this.config.direction.right ? 'spin-clockwise' : 'spin-counter-clockwise';
  }
}
