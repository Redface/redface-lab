import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

// import { catchError } from 'rxjs/operators';
import {catchError} from 'rxjs/internal/operators';

import {RequestExceptionHandler} from './requestExceptionHandler';
import {CONTENT_TYPE} from '../enums/content-type.enum';

@Injectable()
export class RequestHandler {
  private catchException = catchError(err => this.handleError(err));

  constructor(private reqExceptionHandler: RequestExceptionHandler, private http: HttpClient) {
  }

  get(url: string, paramsObj = {}) {
    const commonOptions = this.getCommonOptions();
    const params: HttpParams = new HttpParams();
    Object.keys(paramsObj).map(key => params.set(key, paramsObj[key]));

    return this.http.get(url, {...commonOptions, params}).pipe(this.catchException);
  }

  post(url: string, body: any) {
    return this.http.post(url, JSON.stringify(body), this.getCommonOptions())
      .pipe(this.catchException);
  }

  options(url: string, paramsObj = {}) {
    const params: HttpParams = new HttpParams();
    Object.keys(paramsObj).map(key => params.set(key, paramsObj[key]));
    const commonOptions = this.getCommonOptions();

    return this.http.options(url, {...commonOptions, params})
      .pipe(this.catchException);
  }

  put(url: string, body: any) {
    return this.http.put(url, JSON.stringify(body), this.getCommonOptions())
      .pipe(this.catchException);
  }

  patch(url: string, body: any) {
    return this.http.patch(url, JSON.stringify(body), this.getCommonOptions())
      .pipe(this.catchException);
  }

  delete(url: string) {
    return this.http.delete(url, this.getCommonOptions())
      .pipe(this.catchException);
  }

  private getCommonOptions() {
    const headerInfo = {'Content-Type': CONTENT_TYPE.APPLICATION_JSON};
    const headers = new HttpHeaders(headerInfo);
    return {headers};
  }

  private handleError(err) {
    return this.reqExceptionHandler.handleError(err);
  }
}
