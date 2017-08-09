import { Inject, Injectable, Optional } from '@angular/core';
import { Store } from '@ngrx/store';

import { Model } from './base.model';
import { AppActions } from '../../shared/actions/action-creators/app.action-creator';
import { AsyncService } from '../async-services/base.async-service';
import { Observable } from 'rxjs/Rx';
import { Title } from '@angular/platform-browser';

interface AppState {
  counter: number;
}
@Injectable()
export class AppModel extends Model {

  counter$: Observable<any>;

  constructor(private _store: Store<AppState>,
              @Optional() @Inject(AsyncService) _services: AsyncService[], private title:Title) {
    super(_services || []);
    this.counter$ = _store.select('counter');
  }

  setTitle(title:string) {
    this.title.setTitle(title);
  }
  increaseNumber() {
    this._store.dispatch(AppActions.increaseNumber());
  }

  decreaseNumber() {
    this._store.dispatch(AppActions.decreaseNumber());
  }
  resetNumber(count:number) {
    this._store.dispatch(AppActions.resetNumber(count));
  }
}
