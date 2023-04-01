import { connect, set } from 'mongoose';

export const SetupMongo = async () => {
    const MONGO_USER = process.env.MONGO_USER;
    const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
    const MONGO_PATH = process.env.MONGO_PATH;
    const MONGO_URL: string = 'mongodb+srv://' + MONGO_USER + ':' + MONGO_PASSWORD + '@' + MONGO_PATH + '?retryWrites=true&w=majority';

    try {
        set('strictQuery', false);
        await connect(MONGO_URL);
        console.log('Mongoose connection successful...');
    } catch (error) {
        console.log('Mongoose connection error: ', error);
    }
};