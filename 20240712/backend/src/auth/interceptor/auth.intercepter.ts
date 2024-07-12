import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { map, Observable, tap } from "rxjs";
// rxjs 이터레이터 극한으로 사용할 수 있다.
// 이터레이터란 : 헤더랑 노드가 있는데 Next 함수를 호출하면 헤더가 다음 노드를 바라봄

// NestInterceptor : 인터페이스로 형태를 정의
export class AuthInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> {
        // Observable 비동기 스트림 작업을 처리하는 객체
        // 요청이 들어오면 접근의 인터페이스를 제공
        // next 핸들 함수를 매개변수로 전달하는 메서드를 제공, 요청 핸들러를 래핑하는 인터페이스 매개변수 순서로 호출이 된다.
        // 요청이 들어오면 어떤 요청인지 그리고 시간은 얼마나 되는지.

        // 호출된 시간.
        const date = new Date();

        // http 요청 객체를 가져오자
        const req = context.switchToHttp().getRequest();
        // console.log(req);

        const log = `${req.originalUrl} ${date.toLocaleString()}`

        // rxjs
        // next.handle() : 다음 핸들러로 요청을 보내는 함수
        // pipe 응답이 반환될 때 값을 tap에 전달한다.
        // tap은 Observable의 작업을 할 수 있게 한다.
        // next.handle() 라우터의 요청의 로직이 처리된 다음 실행된다.
        return next.handle().pipe(
            tap(() => {
                const _date = new Date();
                const time = _date.getTime() - date.getTime() + "ms";
                console.log(log, time)
            }),
            map((data) => ({ mykey: "hyeok", data: { id: "hyeok" } }))
            //
        );
    }
}