import dotenv from 'dotenv'

const dotenvConfig = dotenv.config();

if (dotenvConfig.error && dotenvConfig.error.code == 'ENOENT') {
    throw 'Falta archivo .env';
}

export default {
    SERVER_PORT: process.env.SERVER_PORT,
    DB_CONNECTION: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
    }
};
