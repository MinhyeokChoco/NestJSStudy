import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { Observable } from "rxjs";
import { AuthService } from "../auth.service";
// rxjs
// observable 스트림의 내용의 타입
@Injectable()
export class ToKenGuard implements CanActivate {
    constructor(private readonly authService: AuthService) {

    }
    canActivate(context: ExecutionContext): boolean {
        // console.log(context.switchToHttp().getRequest());
        const { cookies: { accessToken } } = context.switchToHttp().getRequest();
        if (!accessToken) {
            throw new UnauthorizedException(
                '토큰이 없어',
            )
        }
        const auth = this.authService.verifyToken(accessToken)
        console.log(auth);
        return true;
    }
}