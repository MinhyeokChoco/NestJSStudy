import { NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

export class AuthMiddleware implements NestMiddleware {
    // 핸들러 함수
    use(req: Request, res: Response, next: NextFunction) {
        // req 요청 객체
        // res 응답 객체
        // next 다음 미들웨어 호출할 콜백 함수
        // log로 사용을 해보자.
        console.log(`${req.method} : ${req.originalUrl}`)
        next();
    }
}