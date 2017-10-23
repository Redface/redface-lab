import { ResponseOptions, RequestInfo } from 'angular-in-memory-web-api/interfaces';
import { STATUS, getStatusText } from 'angular-in-memory-web-api/http-status-codes';

import { InMemoryMockDbService } from './in-memory-mock-db.service';

export class InMemoryOverrideMockDbService extends InMemoryMockDbService {

  protected post(reqInfo: RequestInfo) {
    return reqInfo.utils.createResponse$(() => {
      const resp: ResponseOptions = this.getResponseOptions(reqInfo);
      return this.finishOptions(resp, reqInfo);
    });
  }

  protected patch(reqInfo: RequestInfo) {
    return reqInfo.utils.createResponse$(() => {
      const resp: ResponseOptions = this.getResponseOptions(reqInfo);
      return this.finishOptions(resp, reqInfo);
    });
  }

  protected put(reqInfo: RequestInfo) {
    return reqInfo.utils.createResponse$(() => {
      const resp: ResponseOptions = this.getResponseOptions(reqInfo);
      return this.finishOptions(resp, reqInfo);
    });
  }

  protected delete(reqInfo: RequestInfo) {
    return reqInfo.utils.createResponse$(() => {
      const resp: ResponseOptions = this.getResponseOptions(reqInfo);
      return this.finishOptions(resp, reqInfo);
    });
  }

  protected get(reqInfo: RequestInfo) {
    return reqInfo.utils.createResponse$(() => {
      const resp = this.getResponseOptions(reqInfo);
      return this.finishOptions(resp, reqInfo);
    });
  }

  protected options(reqInfo: RequestInfo) {
    return reqInfo.utils.createResponse$(() => {
      const resp = this.getResponseOptions(reqInfo);
      return this.finishOptions(resp, reqInfo);
    });
  }

  private getResponseOptions(reqInfo: RequestInfo) {

    const { collection, collectionName, headers, req } = reqInfo;
    const apiUrl = req['urlWithParams'].split(reqInfo.apiBase)[1];
    let data: any = this.dbObj[apiUrl];
    const resp: ResponseOptions = data ? {
      body: this.clone(data),
      headers: headers,
      status: STATUS.OK
    } : { body: { error: `'${collectionName}' not found` }, status: STATUS.NOT_FOUND };
    return resp;
  }

  private clone(data: any) { return JSON.parse(JSON.stringify(data)); }

  private finishOptions(options: ResponseOptions, { headers, url }: RequestInfo) {
    options.statusText = getStatusText(options.status);
    options.headers = headers;
    options.url = url;
    return options;
  }
}
