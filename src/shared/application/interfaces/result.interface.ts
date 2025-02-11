export default interface Result<T> {
  traceId: string;
  payload: {
    data: T | T[];
    total?: number;
  };
}
