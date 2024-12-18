import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as argon2 from 'argon2';
import { User } from './user.schema';

@Injectable()
export class AuthService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) {}

    async signUp(username: string, password: string) {
        const existingUser = await this.userModel.findOne({ username });
        if (existingUser) {
            throw new ForbiddenException('Utilizador já se encontra registado');
        }

        const hashedPassword = await argon2.hash(password);
        const user = new this.userModel({ username, password: hashedPassword });
        try {
            await user.save();
        } catch (error) {
            throw error;
        }
    }

    async signIn(username: string, password: string): Promise<boolean> {
        const user = await this.userModel.findOne({ username });
        if (!user) {
            return false;
        }
        return argon2.verify(user.password, password);
    }
}
