import { BaseState } from './basestate';

export class AppState extends BaseState {
  counter: number;

  constructor(counter: number) {
    super();
    this.counter = counter;
  }

  getInstanceOf(obj: any): any {
    const { counter } = obj;
    return new AppState(counter);
  }
}
export const appState: AppState = new AppState(0);
