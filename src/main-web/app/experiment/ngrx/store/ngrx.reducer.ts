import { INCREMENT, DECREMENT, RESET } from '../../../shared/actions/ngrx.actions';
import * as AppActions from '../../../shared/actions/ngrx.actions';
import { ngrxState, NgrxState } from './ngrx.store';

export type Action = AppActions.All;
export function ngrxReducer (state: NgrxState = ngrxState, action: Action) {
  switch (action.type) {
    case INCREMENT:
      return state.getInstanceOf({ counter: state.counter + 1 });
    case DECREMENT:
      return state.getInstanceOf({ counter: state.counter - 1 });
    case RESET:
      return state.getInstanceOf({ counter: action.payload });
  }
  return state;
};
