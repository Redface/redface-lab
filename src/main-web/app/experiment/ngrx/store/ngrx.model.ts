import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';

import { Model } from '../../../core/models/base.model';
import { NgrxActions } from './ngrx.action-creator';
import { Title } from '@angular/platform-browser';
import { InitStore } from '../../../shared/store/initstore';

@Injectable()
export class NgrxModel extends Model {

  counter$: Observable<number>;

  constructor(protected store: Store<InitStore>, private title: Title) {
    super();
    this.counter$ = store.select(s => s.ngrx.counter);
  }

  setTitle(title: string) {
    this.title.setTitle(title);
  }

  increaseNumber() {
    this.dispatchAction(NgrxActions.increaseNumber());
  }

  decreaseNumber() {
    this.dispatchAction(NgrxActions.decreaseNumber());
  }

  resetNumber(count: number) {
    this.dispatchAction(NgrxActions.resetNumber(count));
  }
}
