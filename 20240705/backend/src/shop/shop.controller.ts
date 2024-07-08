import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ShopService } from './shop.service';

interface Iitem {
  name: string;
  price: number;
}

const Items: Iitem[] = [];

@Controller('shop')
export class ShopController {
  constructor(private readonly shopService: ShopService) { }

  @Post("/create")
  setItem(@Body("name") name: string, @Body("price") price: number) {
    Items.push({ name, price });
    return "추가 완료";
  }

  @Get() // / === ""
  getItem() {
    return Items;
  }

  @Put(":id")
  updataItem(@Param("id") id: string, @Body("name") name: string, @Body("price") price: number) {
    Items[id] = { name, price }
    return "수정 완료";
  }

  @Delete(":id")
  deleteItem(@Param("id") id: number) {
    Items.splice(id, 1);
    return "삭제 완료";
  }
}
