export interface QueryResponse<T> {
  status: number;
  message: string;
  data: T;
}
