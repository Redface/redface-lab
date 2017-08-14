import { INCREMENT, DECREMENT, RESET } from '../actions/app.actions';
import * as AppActions from '../actions/app.actions';
import { appState, AppState } from '../store/app.store';

export type Action = AppActions.All;
export const appReducer = (state: AppState = appState, action: Action) => {
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
