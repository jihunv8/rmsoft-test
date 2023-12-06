export interface ControlerResult<T> {
  status: number;
  message: string;
  data: T;
}
