import { ApiHttpResponse } from '@models/api-http-response';
import { BASE_HEADERS } from '@models/constants';
import { QueryParams } from '@models/query-params';
import axios, { AxiosInstance, AxiosResponse } from 'axios';

export class ApiHttpClient {
  private client: AxiosInstance;

  constructor(baseUrl: string, headers: object = {}) {
    this.client = axios.create({
      baseURL: baseUrl,
      headers: {
        ...BASE_HEADERS,
        ...headers,
      },
    });
  }

  public get<T>(path: string, queryParams: QueryParams = {}): Promise<ApiHttpResponse<T>> {
    return this.client.get<T>(path, { params: queryParams })
      .then((response: AxiosResponse<T>) => ApiHttpClient.convertToApiHttpResponse(response));
  }

  public post<T>(path: string, body: object): Promise<ApiHttpResponse<T>> {
    return this.client.post<T>(path, body)
      .then((response: AxiosResponse<T>) => ApiHttpClient.convertToApiHttpResponse(response));
  }

  public put<T>(path: string, body: object): Promise<ApiHttpResponse<T>> {
    return this.client.put<T>(path, body)
      .then((response: AxiosResponse<T>) => ApiHttpClient.convertToApiHttpResponse(response));
  }

  public patch<T>(path: string, body: object): Promise<ApiHttpResponse<T>> {
    return this.client.patch<T>(path, body)
      .then((response: AxiosResponse<T>) => ApiHttpClient.convertToApiHttpResponse(response));
  }

  public delete<T>(path: string): Promise<ApiHttpResponse<T>> {
    return this.client.delete<T>(path)
      .then((response: AxiosResponse<T>) => ApiHttpClient.convertToApiHttpResponse(response));
  }

  private static convertToApiHttpResponse<T>(response: any): ApiHttpResponse<T> {
    return {
      data: response.data,
      status: response.status,
      statusText: response.statusText,
    };
  }
}
