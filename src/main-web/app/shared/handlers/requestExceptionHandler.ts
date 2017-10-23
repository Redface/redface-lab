import { Injectable, ErrorHandler } from '@angular/core';

import { Observable } from 'rxjs/Rx';

@Injectable()
export class RequestExceptionHandler extends ErrorHandler {

  constructor() {
    super();
  }

  handleError(error:any) {
    const errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    return Observable.throw('error: ' + errMsg);
  }
}
