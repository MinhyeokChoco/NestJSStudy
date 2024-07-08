import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShopModule } from './shop/shop.module';

@Module({
  imports: [ShopModule], // 외부에 더 가져올 모듈이 있으면
  controllers: [AppController], // AppController 요청을 받는 로직을 처리하고 주입받은 서비스에서 기능을 호출
  providers: [AppService], // 주입할 서비스
})
export class AppModule { }
