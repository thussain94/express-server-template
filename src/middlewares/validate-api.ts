import Joi from '@hapi/joi';
import { NextFunction, Request, Response } from 'express';

const ValidateApi = async (req: Request, res: Response, next: NextFunction) => {
    const headerSchema = Joi.object().keys({
        'x-api-key': Joi.string().required(),
    });

    try {
        await headerSchema.validateAsync(req.headers, { allowUnknown: true });
        const clientApiKey = req.headers['x-api-key'];
        const X_API_KEY = process.env.X_API_KEY;

        if (clientApiKey === X_API_KEY) {
            next();
        } else {
            return res.status(401).json({ status: 403, message: 'Invalid api key provided. Please check again.' });
        }
    } catch (error) {
        return res.status(401).json(error);
    }
};
export default ValidateApi;