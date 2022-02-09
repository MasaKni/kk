
import {  errorLogger} from "../logger/logger.js";
import { StatusCodes } from "http-status-codes";

const  unCoughtErrorHandler=(err, req, res, next) =>{
    const error = { Message: err.message, Request: req, Stack: err };
    errorLogger.error(error);
    err.statusCode ? (err.statusCode = StatusCodes.INTERNAL_SERVER_ERROR) : null;
    return res.status(err.statusCode).json({
        message: err.message,
    });
}

const apiErrorHandler=(err, req, res, message)=> {
    const error = { Message: message, Request: req, Stack: err };
    errorLogger.error(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ Message: message });
}

export {
    unCoughtErrorHandler,
    apiErrorHandler
}