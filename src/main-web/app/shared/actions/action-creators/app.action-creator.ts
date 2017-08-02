import { Action } from '@ngrx/store';

import { INCREMENT, DECREMENT, RESET } from '../app.actions';

export const AppActions = {
  increaseNumber(count:number): Action {
    return {
      payload: {count},
      type: INCREMENT
    };
  },

  decreaseNumber(count:number): Action {
    return {
      payload: {count},
      type: DECREMENT
    };
  },

  resetNumber(): Action {
    return {
      payload: null,
      type: RESET
    };
  }
};