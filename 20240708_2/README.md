# nestjs sequelize

> ORM으로 nest
> mysql2 드라이버
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
> nestjs로 sequelize를 사용할때 필요한 모듈 제공
> SequelizeModule
> 생성자의 속성을 받아서 객체로 반환
> forRoot()
```json
{
  "dialect" : "mysql",
  "host" : "localhost",
  "port" : 3306,
  "username" : "root",
  "password" : "admin123",
  "database" : ""
}
```
## DTO
> 계층간에 전달할 객체의 형태

## model 
> 테이블의 내용을 작성
> 데이터베이스의 테이블을 관리할 폴더

