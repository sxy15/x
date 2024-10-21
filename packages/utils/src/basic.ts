export function noop() {}

export const extend = Object.assign;

export const isArray = Array.isArray;

export const isObject = (val: unknown): val is Record<any, any> => val !== null && typeof val === 'object';

export const isDef = <T>(val: T): val is NonNullable<T> => val !== undefined && val !== null;

export const isFunction = (val: unknown): val is () => any => typeof val === 'function';

export const isPromise = <T = any>(val: unknown): val is Promise<T> => isObject(val) && isFunction(val.then) && isFunction(val.catch);

export type Numeric = number | string;