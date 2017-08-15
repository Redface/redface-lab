import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';

import { Model } from './base.model';
import { NgrxActions } from '../../shared/actions/action-creators/ngrx.action-creator';
import { Title } from '@angular/platform-browser';
import { InitStore } from '../../shared/store/initstore';

@Injectable()
export class NgrxModel extends Model {

  counter$: Observable<number>;

  constructor(private _store: Store<InitStore>, private title: Title) {
    super();
    this.counter$ = _store.select(s => s.ngrx.counter);
  }

  setTitle(title: string) {
    this.title.setTitle(title);
  }

  increaseNumber() {
    this._store.dispatch(NgrxActions.increaseNumber());
  }

  decreaseNumber() {
    this._store.dispatch(NgrxActions.decreaseNumber());
  }

  resetNumber(count: number) {
    this._store.dispatch(NgrxActions.resetNumber(count));
  }
}
