import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';

import { Model } from './base.model';
import { AppActions } from '../../shared/actions/action-creators/app.action-creator';
import { Title } from '@angular/platform-browser';
import { InitStore } from '../../shared/store/initstore';

@Injectable()
export class AppModel extends Model {

  counter$: Observable<number>;

  constructor(private _store: Store<InitStore>, private title: Title) {
    super();
    this.counter$ = _store.select(s => s.app.counter);
  }

  setTitle(title: string) {
    this.title.setTitle(title);
  }

  increaseNumber() {
    this._store.dispatch(AppActions.increaseNumber());
  }

  decreaseNumber() {
    this._store.dispatch(AppActions.decreaseNumber());
  }

  resetNumber(count: number) {
    this._store.dispatch(AppActions.resetNumber(count));
  }
}
