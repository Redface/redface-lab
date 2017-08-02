import { Inject, Injectable, Optional } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AsyncService } from '../async-services/base.async-service';
import { Model } from './base.model';
import { AppActions } from '../actions/action-creators/app.action-creator';

@Injectable()
export class GameModel extends Model {
  games$: Observable<any>;
  game$: Observable<any>;

  constructor(protected _store: Store<any>,
              @Optional() @Inject(AsyncService) _services: AsyncService[]) {
    super(_services || []);
  }

  increaseNumber() {
    this._store.dispatch(AppActions.increaseNumber(1));
  }

  decreaseNumber() {
    this._store.dispatch(AppActions.decreaseNumber(1));
  }
}