import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('signup')
    async signUp(
        @Body('username') username: string,
        @Body('password') password: string,
    ) {
        console.log(`Pedido de registo de '${username}' recebido.`);
        return this.authService.signUp(username, password);
    }

    @Post('signin')
    async signIn(
        @Body('username') username: string,
        @Body('password') password: string,
    ) {
        const isValid = await this.authService.signIn(username, password);
        if (!isValid) {
            return { message: 'Credenciais inválidas' };
        }
        console.log(`Usuário '${username}' autenticado com sucesso.`);
        return { message: 'Sessão iniciada com sucesso' };
    }
}
