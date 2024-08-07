import { registerAs } from '@nestjs/config';

export default registerAs('personal-finance', () => ({
    HOST: process.env.MONGODB_HOST,
    PORT: process.env.MONGODB_PORT,
    USERNAME: process.env.MONGODB_USERNAME,
    PASSWORD: process.env.MONGODB_PASSWORD,
    DATABASE: process.env.MONGODB_DATABASE_PERSONAL_FINANCE
}));