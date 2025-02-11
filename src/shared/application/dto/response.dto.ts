import Result from "../interfaces/result.interface";

export function ResponseDto<T>(
  traceId: string,
  data: T | T[],
  total: number | null = null
): Result<T> {
  if (total || total === 0) {
    return {
      traceId,
      payload: {
        data,
        total,
      },
    };
  }
  return {
    traceId,
    payload: {
      data,
    },
  };
}
