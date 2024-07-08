import { Model, Column, Table, DataType } from "sequelize-typescript";

@Table({
    timestamps: true,
    tableName: "shops",
    modelName: "Shop",
    paranoid: true,
    charset: "utf8mb4",
    collate: "utf8mb4_general_ci"
})
export class Shop extends Model {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name: string

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    price: number
}