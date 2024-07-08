# NestJS Sequelize

> ORM으로 Nest 세팅
> mysql2 드라이버 설치
> sequelize
> sequelize-typescript == 데코레이터 제공
> @types/sequelize == 정의된 타입들

```sh
nest new [폴더명]

npm i @nestjs/sequelize mysql2 sequelize @types/sequelize sequelize-typescript

nest g res
shop
```

## app.module의 sequelize 의존성 주입
@nestjs/sequelize
> nestjs로 sequelize를 사용할 때 필요한 모듈 제공
> SequelizeModule
> 생성자의 속성을 받아서 객체로 반환
> forRoot()

```json
{
    "dialect" : "mysql",
    "host" : "localhost",
    "port" : 3306,
    "username" : "root",
    "password" : "dlalsgur12",

}
```

##

<!-- sudo chown -R $USER:$GROUP ~/.npm -->
<!-- npm config set registry https://registry.npmjs.cf/ -->