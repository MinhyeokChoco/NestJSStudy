import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Shop } from './model/shop.model';
import { CreatePost, UpdatePost } from './dto/shop.dto';

@Injectable()
export class ShopService {
    constructor(@InjectModel(Shop) private readonly shopModel: typeof Shop) { }

    create(createShopDto: CreatePost) {
        const { name, price } = createShopDto
        return this.shopModel.create({
            name, price
        })
    }

    async findOne(id: string) {
        return await this.shopModel.findOne({ where: { id } })
    }

    async update(updateShopDto: UpdatePost) {
        const { name, price, id } = updateShopDto
        return this.shopModel.update({
            name, price
        }, { where: { id } })
    }
}
