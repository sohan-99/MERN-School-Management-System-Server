import { RequestHandler, Request, Response, NextFunction } from 'express';

const catchAsyncFunction = (fn: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(error => next(error));
  };
};

export default catchAsyncFunction;
