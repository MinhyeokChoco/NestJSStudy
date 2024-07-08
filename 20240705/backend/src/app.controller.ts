import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// @Controller : basePath(기본 요청 경로)정할 수 있다.
// app.use("/user", router)
@Controller('/user')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('/text')
  getHello(): string {
    return "text";
  }

  @Get('/board')
  getBoard(): string {
    return "board"
  }

  @Get('/shop')
  getShop(): string {
    return "board"
  }
}


// /user/text
