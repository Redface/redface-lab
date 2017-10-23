import { Store, Action } from '@ngrx/store';

import { InitStore } from '../store/initstore';

export abstract class Model {
  protected store: Store<InitStore>;

  constructor() {
  }

  protected dispatchAction(action: Action) {
    this.store.dispatch(action);
  }
}