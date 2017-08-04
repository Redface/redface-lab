import { Action } from '@ngrx/store';
import { fromJS } from 'immutable';

import { initialState } from '../store/app.store';
import { INCREMENT, DECREMENT, RESET } from '../actions/app.actions';

export const appReducer = (state: any = initialState.get('count'), action: Action) => {
  switch (action.type) {
    case INCREMENT:
      state = state + 1;
      break;
    case DECREMENT:
      state = state - 1;
      break;
    case RESET:
      state = fromJS(action.payload);
      break;
  }
  return state;
};
