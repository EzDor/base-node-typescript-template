export interface ApiHttpResponse<T>{
  data: T;
  status: number;
  statusText: string;
}
