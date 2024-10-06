import { Middleware, MiddlewareAPI } from '@reduxjs/toolkit';

export const logger: Middleware =
  (api: MiddlewareAPI) => (next) => (action) => {
    //@ts-ignore
    console.group(action.type);
    console.info('dispatching', action);
    const result = next(action);
    // console.log('next state', api.getState());
    console.groupEnd();
    return result;
  };
