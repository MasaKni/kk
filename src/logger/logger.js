import * as winston from "winston";
import fs from 'fs';


const errorLogger =  winston.createLogger({
    transports: [
        new winston.transports.File({
            filename: './src/logger/errors.log',
            level: 'info'

        })
    ]
});


const accessLogStream = fs.createWriteStream('./src/logger/access.log',{flags:'a'})

export {
    accessLogStream,
    errorLogger
}

