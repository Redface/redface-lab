import { fromJS } from 'immutable';

import { initialState } from '../store/app.store';
import { INCREMENT, DECREMENT, RESET } from '../actions/app.actions';
import * as AppActions from '../actions/app.actions';

export type Action = AppActions.All;
export const appReducer = (state: any = initialState.get('count'), action: Action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case RESET:
      return fromJS(action.payload);
  }
  return state;
};
