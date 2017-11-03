import { Action } from '@ngrx/store/store';

export const INCREMENT = 'app:increment';
export const DECREMENT = 'app:decrement';
export const RESET = 'app:reset';

export class Increment implements Action {
  readonly type = INCREMENT;
}
export class Decrement implements Action {
  readonly type = DECREMENT;
}
export class Reset implements Action {
  readonly type = RESET;

  constructor(public payload: number) {
    this.payload = payload;
  }
}
export type All = Increment | Decrement | Reset;
