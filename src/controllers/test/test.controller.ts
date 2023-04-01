import express, { Request, Response } from 'express';

import { Controller } from '@interfaces';

export class TestController implements Controller {
    public path = '/test';
    public router = express.Router();

    constructor() {
        this.initRoutes();
    }

    public initRoutes() {
        this.router.get(this.path + '', (req: Request, res: Response) => { return res.status(201).json('Test Controller'); });
    }
}