import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

// @Injectable() 주입을 받겠다
@Injectable()
export class AuthService {
    constructor(private readonly jwt: JwtService) { }

    signToken(id: string, age: number) {
        const payload = {
            id, age
        }

        // 토큰 생성
        return this.jwt.sign(payload, { expiresIn: 60 * 5 * 1000 });
        // this.jwt.verify
    }

    verifyToken(jwt: string) {
        return this.jwt.verify(jwt);
    }
}
