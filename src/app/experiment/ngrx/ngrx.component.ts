import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Rx';

import { NgrxModel } from './store/ngrx.model';

@Component({
  selector: 'rf-ngrx',
  templateUrl: './ngrx.html',
  styleUrls: ['./ngrx.scss']
})
export class NgrxComponent implements OnInit {
  counter$: Observable<number>;

  constructor(private _ngrxModel: NgrxModel) {
    this.counter$ = _ngrxModel.counter$;
  }

  ngOnInit() {
  }

  increase() {
    this._ngrxModel.increaseNumber();
  }

  decrease() {
    this._ngrxModel.decreaseNumber();
  }

  reset(count: number) {
    this._ngrxModel.resetNumber(0);
  }
}
