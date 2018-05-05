import { Injectable, ErrorHandler } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class RequestExceptionHandler extends ErrorHandler {

  constructor() {
    super();
  }

  handleError(error: HttpErrorResponse) {
    const errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    return Observable.throw('error: ' + errMsg);
  }
}
