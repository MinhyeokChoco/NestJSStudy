# NestJS 요청 주기
> 클라이언트 -> 미들웨어 -> 가드 -> 인터셉터 -> 파이프 -> 컨트롤러(서비스, 레포지토리) -> 익셉션(필터) -> 응답

# Pipe
> class 데코레이터를 사용한 프로바이더
> 값의 변환과 검증을 처리해주는 로직을 담당
> 값이 유효한지 검증을 하고 검증이 잘 완료되면 값을 그대로 사용하고 그렇지 않으면 에러를 발생 시킨다.
> 메서드가 호출되기 전에 파이프를 실행하고 파이프에서 처리 후에 메서드 호출 전에 에러를 발생 시킬 수 있다.
> 정리 하자면 파이프는 예외 처리를 실행하고 파이프가 throw로 error의 객체를 반환하면 컨트롤러의 메서드가 호출되지 않게 하고 에러 메세지를 어떤 에러인지 명확하게 모니터링 할 수 있다.

## 컨트롤러
```ts
@Get(":index")
findNumberIndex(@Param('index', ParseIntPipe) id : number) {
    // Params 값을 구조분해 할당하면 데이터 타입이 문자형
    console.log("id", id);
    // 문자형 String
    return typeof id;
}
```

## NestJs에 내부 파이프
- ParseIntPipe : 전달한 밸류가 숫자로 변환을 할 수 있는지, 변환 할 수 없으면 에러메세지를 응답한다.
/1 = 이러한 요청이 들어오면 처리가 잘 될텐데,
/qwe = 이렇게 들어오게 되면 에러 메세지를 반환한다.

```sh
# 윈도우
nest new [폴더명]
nest new backend

# 맥
sudo nest new [폴더명]

# 근데 chown으로 권한을 줘서 그냥 nest new [폴더명] 해도 설치됨

nest g res
User

REST API
CRUD no
```

## 내부 파이프 종류
ValidationPipe
ParseIntPipe : 숫자형인지 검증하고 숫자형으로 변환할 수 있는지 검증하고 변환할 수 있으면 변환
ParseFloatPipe
ParseBoolPipe
ParseArrayPipe
ParseUUIDPipe
ParseEnumPipe
DefaultValuePipe :
ParseFilePipe

## 커스텀 파이프
> 커스텀 파이프를 만들 때 형태를 상속, PipeTransform
> 