import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// MongoDB connection parameters
const username = process.env.MONGO_INITDB_ROOT_USERNAME;
const password = process.env.MONGO_INITDB_ROOT_PASSWORD;
const port = process.env.MONGO_PORT;
const host = process.env.MONGO_HOST;
const database = process.env.MONGO_INITDB_DATABASE;

@Module({
    imports: [
        MongooseModule.forRoot(
            `mongodb://${username}:${password}@${host}:${port}/${database}?authSource=admin`,
        ),
        AuthModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
