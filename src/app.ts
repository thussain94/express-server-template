import cors from 'cors';
import express, { Application } from 'express';

import { Controller, Middleware } from './interfaces';

class App {
    private app: Application;
    private portNumber: number;

    constructor({ port, middleWares, controllers }: { port: number; middleWares: Middleware[]; controllers: Controller[]; }) {
        this.app = express();
        this.app.use(express.json({ limit: '50mb' }));
        this.app.use(express.urlencoded({ extended: true, limit: '50mb' }));
        this.app.use(cors());

        this.portNumber = port;
        this.middlewares(middleWares);
        this.routes(controllers);
    }

    private middlewares(middleWares: Middleware[]) {
        middleWares.forEach(middleWare => {
            this.app.use(middleWare);
        });
    }

    private routes(controllers: Controller[]) {
        controllers.forEach(controller => {
            this.app.use('/', controller.router);
        });
    }

    public listen() {
        this.app.listen((this.portNumber), () => {
            console.log(`App listening on the http://localhost:${this.portNumber}`);
        });
    }
}

export default App;