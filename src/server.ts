// Load environment variables first
import dotenv from 'dotenv';
dotenv.config({ path: './environments/.env.' + (process.env.NODE_ENV || 'development') });
import App from './app';

import { SetupMongo } from './mongo';

import { TestController } from '@controllers';

import Logger from './middlewares/logger';
import ValidateApi from './middlewares/validate-api';

const port = parseInt(process.env.PORT as string, 10);

// SetupMongo();

export const app = new App({
    port: port || 3000,
    controllers: [
        new TestController()
    ],
    middleWares: [
        Logger,
        ValidateApi
    ],
});

app.listen();