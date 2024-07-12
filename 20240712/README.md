# 에러가 발생하면 로그 꼭 확인하고 영어 모르면 복사해서 붙여 넣어서 확인해보는 습관을 들여야 함
# GPT 쓰는건 좋은데 여기에 코드를 다 복사해서 붙여넣고 오류 찾기 X
# GPT 사용할거면 개념 관련 공부 할 때 물어보는 것만 사용하는걸 권장
# SQL 공부 해야 함
# 간단한 질문은 지양 (취업하고 스스로 해결하는 힘을 차근 차근 길러야 함)

# NestJS의 Guard, Intercepter, middleware

순서
> 클라이언트 > 미들웨어 > 가드 > 인터셉터 > 파이프 > 컨트롤러 > 익셉션 > 응답

## Guard
> 가드가 하는 역할은 인증 권한 부여의 로직을 처리할 때
> 컨트롤러의 로직을 실행하기 전에

1. 요청의 유효성 검사
2. 사용자의 인증 정보를 확인
3. 컨트롤러의 로직의 접근 제어

```ts
// Canactivate : 가드를 만들 때 형태를 상속 받을 Interface
class UserTokenGuard implements Canactivate {
    // ExcutionContext : 요청에 대한 내용을 어떻게 받을지 메서드를 통해서 원하는 형태를 받을 수 있다.
    //                      http 요청의 내용을 받고 싶다. rpc 원격 프로시저 호출할 때, 웹소켓 요청 ws
    Canactivate(content : ExcutionContext) {
        // http 요청의 내용을 가지고 오고 싶어
        const req = context.switchToHttp().getRequest();

        if(!req.user){
            throw new UnauthorizedException(
                '토큰이 없어',
            )
        }

        return true;
    }
}
```

```sh
nest new backend

nest g res
auth

npm i @nestjs/jwt
```

## 인터셉터
> 요청과 응답의 내용을 받아올 수 있다.
> 로깅이나 캐싱등의 작업에 사용할 수 있다.

1. 요청 메세지의 로직을 삽입할 수 있다.
2. 응답 메세지의 내용을 수정할 수 있다.
3. 메서드가 실행된 시간을 로깅을 할 수 있다. 어떤 메서드 실행 인지도 (콘솔 로그 처럼 특정 상황에 대해 로그 메세지를 추가하여 조금 더 알기 쉽게 할 수 있다.)


## 미들웨어
> 말 그대로 요청과 응답 간에 처리할 로직