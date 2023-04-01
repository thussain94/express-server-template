import { NextFunction, Request, Response } from 'express';

import { Middleware } from '@interfaces';

const Logger: Middleware = (req: Request, res: Response, next: NextFunction) => {
    console.log('Request logged:', req.method, req.path);
    next();
};

export default Logger;