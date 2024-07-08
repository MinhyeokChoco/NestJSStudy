import { Body, Controller, Get, Param, Post, Render, Res } from '@nestjs/common';
import { ShopService } from './shop.service';
import { CreatePost, UpdatePost } from './dto/shop.dto';
import { Response } from 'express';

@Controller('shop')
export class ShopController {
  constructor(private readonly shopService: ShopService) { }
  @Post('create')
  async create(@Body() CreateShopDTO: CreatePost, @Res() res: Response) {
    const data = await this.shopService.create(CreateShopDTO);
    res.redirect(`/shop/${data.id}`)
  }

  @Get()
  @Render('main')
  mainPage() {
    return
  }

  @Get(":id")
  @Render('detail')
  async detailPage(@Param("id") id: string) {
    const data = await this.shopService.findOne(id);
    return { data }
  }

  @Get("/update:id")
  @Post('update')
  async update(@Body() updateShopDTO: UpdatePost, @Param("id") id: string, @Res() res: Response) {
    const data = await this.shopService.update(updateShopDTO);
    res.redirect(`/update/${id}`)
    return { data }
  }
}

// sequelize의 create 메서드의 반환값은 바디 객체 안의 작성 값
// sequelize의 update 메서드의 반환값은 boolean, 반환타입 고정
// sequelize의 메서드는 반환타입이 고정이다.