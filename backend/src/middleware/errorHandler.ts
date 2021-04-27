import { HTTPStatusCode } from '../types';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function errorHandler(err, req, res, next) {
    console.error(err); // dump error to console for debug

    res.status(err.status || HTTPStatusCode.InternalServerError).json({
        message: err.message,
        errors: err.errors,
    });
}
