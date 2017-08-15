import { Action } from '@ngrx/store';

import { Increment, Decrement, Reset } from '../ngrx.actions';

export const NgrxActions = {
  increaseNumber(): Action {
    return new Increment();
  },

  decreaseNumber(): Action {
    return new Decrement();
  },

  resetNumber(count: number): Action {
    return new Reset(count);
  }
};
