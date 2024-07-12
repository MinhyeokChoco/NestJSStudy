import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import * as cookie from "cookie-parser";
import { AuthMiddleware } from './auth/middleware/auth.middleware';

@Module({
  imports: [AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
// NestModule : 타입 체크
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer apply : 미들웨어 추가
    // forRoutes : 어느 요청 경로에서 사용할건지
    consumer.apply(cookie()).forRoutes("*");
    // auth 요청에서만 된다.
    // app.use("auth", 핸들러)
    // consumer.apply(AuthMiddleware).forRoutes("auth");

    // 이런 형태를 모두 처리하려면
    // auth/user/1
    // auth/:user/:id 이런 상황일 때 와일드카드를 붙여야 함
    // 동적인 파라미터 값을 처리하려면 와일드카드를 붙여야 함
    consumer.apply(AuthMiddleware).forRoutes("auth*");
  }
}
