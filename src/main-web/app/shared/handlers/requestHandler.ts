import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { RequestExceptionHandler } from './requestExceptionHandler';
import { CONTENT_TYPE } from '../enums/content-type.enum';

@Injectable()
export class RequestHandler {
  constructor(private reqExceptionHandler:RequestExceptionHandler, private http:HttpClient) {
  }

  get(url:string, paramsObj = {}) {
    const commonOptions = this.getCommonOptions();
    const params:HttpParams = new HttpParams();
    Object.keys(paramsObj).map(key => params.set(key, paramsObj[key]));

    return this.http.get(url, {...commonOptions, params}).catch(err => this.handleError(err));
  }

  post(url:string, body:any) {
    return this.http.post(url, JSON.stringify(body), this.getCommonOptions())
      .catch(err => this.handleError(err));
  }

  options(url:string, paramsObj = {}) {
    const params:HttpParams = new HttpParams();
    Object.keys(paramsObj).map(key => params.set(key, paramsObj[key]));
    const commonOptions = this.getCommonOptions();

    return this.http.options(url, {...commonOptions, params})
      .catch(err => this.handleError(err));
  }

  put(url:string, body:any) {
    return this.http.put(url, JSON.stringify(body), this.getCommonOptions())
      .catch(err => this.handleError(err));
  }

  patch(url:string, body:any) {
    return this.http.patch(url, JSON.stringify(body), this.getCommonOptions())
      .catch(err => this.handleError(err));
  }

  delete(url:string) {
    return this.http.delete(url, this.getCommonOptions())
      .catch(err => this.handleError(err));
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
