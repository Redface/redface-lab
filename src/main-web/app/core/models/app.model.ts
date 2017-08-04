import { Inject, Injectable, Optional } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Model } from './base.model';
import { AppActions } from '../../shared/actions/action-creators/app.action-creator';
import { AsyncService } from '../async-services/base.async-service';

@Injectable()
export class AppModel extends Model {

  constructor(protected _store: Store<any>,
              @Optional() @Inject(AsyncService) _services: AsyncService[]) {
    super(_services || []);
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