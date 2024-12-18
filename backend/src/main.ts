import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.use(
        session({
            secret: process.env.API_SESSION_SECRET,
            resave: false,
            saveUninitialized: false,
            cookie: {
                maxAge: parseInt(process.env.API_SESSION_COOKIE_MAX_AGE),
            },
        }),
    );
    await app.listen(process.env.API_PORT);
}
bootstrap();
