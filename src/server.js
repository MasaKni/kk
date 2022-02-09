
import express, { urlencoded } from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import * as dotenv from 'dotenv';
import cors from 'cors';
import { accessLogStream } from './logger/logger.js';
import { unCoughtErrorHandler } from "./handlers/errorHandler.js";
import routes from './routes/index.js';

class Server {

    constructor() {
        dotenv.config();
        this.app = express();
        this.config();
    }

    config() {
        this.app.use(helmet());
        this.app.use(morgan('combined', {stream:accessLogStream}))
        this.app.use(urlencoded({ extended: true }));
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use('/api/v0',routes);

        this.app.use(unCoughtErrorHandler);
    }

    runServer(port) {
        this.app.listen(port,'localhost', function () {
            console.info(`Server running on : http://localhost:${port}`);
        }).on('error', (err) => {
            if (err.code === 'EADDRINUSE') {
                console.log('server startup error: address already in use');
            } else {
                console.log(err);
            }
        });
    }

}

export default Server;
