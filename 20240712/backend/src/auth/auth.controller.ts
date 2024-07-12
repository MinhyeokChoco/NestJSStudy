import { Body, Controller, Get, Post, Res, UseGuards, UseInterceptors } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ToKenGuard } from './guards/token.guard';
import { Response } from 'express';
import { AuthInterceptor } from './interceptor/auth.intercepter';

// auth 까지 요청을 보냈을 때
@UseInterceptors(AuthInterceptor)
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Get("/user")
  @UseGuards(ToKenGuard)
  findUser() {
    return;

  }

  @Get("/login")
  login() {
    return "로그인 완료";
  }

  @Post("/userToken")
  token(@Body("id") id: string, @Body("age") age: number, @Res() res: Response) {
    const token = this.authService.signToken(id, age);
    const date = new Date()
    const cookieDate = new Date(date.setMinutes(date.getMinutes() + 5));
    res.cookie("accessToken", token, { httpOnly: true, expires: cookieDate });
    return res.send({ message: "로그인 성공" });
  }
}
