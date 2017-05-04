import { ResponseOptions, URLSearchParams } from '@angular/http';

import {
  ParsedUrl, HttpMethodInterceptorArgs, STATUS, createErrorResponse, createObservableResponse
} from 'angular-in-memory-web-api/index';

import { InMemoryMockDbService } from './in-memory-mock-db.service';

export class InMemoryOverrideMockDbService extends InMemoryMockDbService {

  // parseUrl override
  parseUrl(url:string):ParsedUrl {
    try {
      const loc = this.getLocation(url);
      let urlRoot = '';
      if (loc.host !== undefined) {
        urlRoot = loc.protocol + '//' + loc.host + '/';
      }

      const path = loc.href.split(urlRoot)[1];
      const pathFragments:string[] = path.split('/');

      let base = '';
      let collectionName = '';
      pathFragments.filter((data, index) => {
        if (index === 0) {
          base = data;
        }
        if (index === 1) {
          collectionName = data;
        }
        if (index > 1) {
          collectionName += '/' + data;
        }
      });

      const resourceUrl = urlRoot + base + '/' + collectionName + '/';
      const id = '';
      const query = new URLSearchParams('');
      const result:ParsedUrl = {base, collectionName, id, query, resourceUrl};
      return result;
    } catch (err) {
      const msg = `unable to parse url '${url}'; original error: ${err.message}`;
      throw new Error(msg);
    }
  }

  // HTTP POST interceptor
  protected post(interceptorArgs:HttpMethodInterceptorArgs) {
    let resp:ResponseOptions;

    const {collection, collectionName, headers, req} = interceptorArgs.requestInfo;
    let data:any = collection;
    if (data) {
      resp = new ResponseOptions({
        body: this.clone(data),
        headers: headers,
        status: STATUS.OK
      });
    } else {
      resp = createErrorResponse(req, STATUS.NOT_FOUND,
        `'${collectionName}' not found`);
    }

    return createObservableResponse(req, resp);
  }

  // HTTP POST interceptor
  protected patch(interceptorArgs:HttpMethodInterceptorArgs) {
    let resp:ResponseOptions;

    const {collection, collectionName, headers, req} = interceptorArgs.requestInfo;
    let data:any = collection;
    if (data) {
      resp = new ResponseOptions({
        body: this.clone(data),
        headers: headers,
        status: STATUS.OK
      });
    } else {
      resp = createErrorResponse(req, STATUS.NOT_FOUND,
        `'${collectionName}' not found`);
    }

    return createObservableResponse(req, resp);
  }

  // HTTP DELETE interceptor
  protected delete(interceptorArgs:HttpMethodInterceptorArgs) {
    let resp:ResponseOptions;

    const {collection, collectionName, headers, req} = interceptorArgs.requestInfo;
    let data:any = collection;
    if (data) {
      resp = new ResponseOptions({
        body: this.clone(data),
        headers: headers,
        status: STATUS.OK
      });
    } else {
      resp = createErrorResponse(req, STATUS.NOT_FOUND,
        `'${collectionName}' not found`);
    }

    return createObservableResponse(req, resp);
  }

  protected get(interceptorArgs:HttpMethodInterceptorArgs) {

    let resp:ResponseOptions;

    const {id, collection, collectionName, headers, req} = interceptorArgs.requestInfo;
    let data:any = collection;

    if (data) {
      resp = new ResponseOptions({
        body: this.clone(data),
        headers: headers,
        status: STATUS.OK
      });
    } else {
      resp = createErrorResponse(req, STATUS.NOT_FOUND,
        `'${collectionName}' with id='${id}' not found`);
    }

    return createObservableResponse(req, resp);
  }

  /***
   * HTML상에서 실제로 쓰이는 URL을 얻어내기 위해 anchorElement 생성 후 url을 가져온다
   * @param href
   * @returns {HTMLAnchorElement|HTMLElement}
   */
  private getLocation(href:string) {
    const el = document.createElement('a');
    el.href = href;
    return el;
  };

  private clone(data:any) {
    return JSON.parse(JSON.stringify(data));
  }
}
