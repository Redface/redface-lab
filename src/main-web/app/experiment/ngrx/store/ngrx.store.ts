import { BaseState } from '../../../shared/store/basestate';

export class NgrxState extends BaseState {
  counter: number;

  constructor(counter: number) {
    super();
    this.counter = counter;
  }

  getInstanceOf(obj: any): any {
    const { counter } = obj;
    return new NgrxState(counter);
  }
}
export const ngrxState: NgrxState = new NgrxState(0);
