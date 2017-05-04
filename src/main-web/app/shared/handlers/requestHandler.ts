import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';

import { RequestExceptionHandler } from './requestExceptionHandler';

@Injectable()
export class RequestHandler {
  constructor(private reqExceptionHandler:RequestExceptionHandler, private http:Http) {
  }

  get(url:string, paramsObj = {}) {
    const params:URLSearchParams = new URLSearchParams();
    Object.keys(paramsObj).map(key => params.set(key, paramsObj[key]));
    const paramRequestOption = new RequestOptions({params: params});

    return this.http.get(url, this.getCommonOptions().merge((paramRequestOption)))
      .map(res => res.json())
      .catch(this.reqExceptionHandler.handleError);
  }

  post(url:string, body:any) {

    return this.http.post(url, JSON.stringify(body), this.getCommonOptions())
      .map(res => res.json())
      .catch(this.reqExceptionHandler.handleError);
  }

  put(url:string, body:any) {
    return this.http.put(url, JSON.stringify(body), this.getCommonOptions())
      .map(res => res.json())
      .catch(this.reqExceptionHandler.handleError);
  }

  patch(url:string, body:any) {
    return this.http.patch(url, JSON.stringify(body), this.getCommonOptions())
      .map(res => res.json())
      .catch(this.reqExceptionHandler.handleError);
  }

  delete(url:string) {
    return this.http.delete(url, this.getCommonOptions())
      .map(res => res.json())
      .catch(this.reqExceptionHandler.handleError);
  }

  private getCommonOptions():RequestOptions {
    const headers = new Headers({'Content-Type': 'application/json'});
    return new RequestOptions({headers: headers});
  }
}
