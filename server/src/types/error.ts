export interface ResponseError extends Error {
  statusCode?: number;
}

export type CatchError = any;
