// asyncMiddleware.ts
import { Request, Response, NextFunction } from 'express';

// Diese Middleware fängt asynchrone Fehler ab und leitet sie an Express weiter
// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
const asyncMiddleware = (fn: Function) => (req: Request, res: Response, next: NextFunction) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

export default asyncMiddleware;