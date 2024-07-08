import { Router } from "express";
import "reflect-metadata";

export function createRouter(controller: any, provider: any[]): Router {
    // 라우터 객체
    const router: any = Router();
    // 컨트롤러 basePath 메타데이터를 가져오고
    const basePath: string = Reflect.getMetadata("basePath", controller);

    // 컨트롤러에 주입할 목록들 인스턴스 생성
    // provider 배열을 map을 호출하고
    // provider 클래스 들을 인스턴스 생성해서
    // map 반환 데이터 배열을 스프레드연산자로 값을 깊은복사
    // controller인스턴스 생성할때 매개변수로 전달.
    const instance = new controller(...provider.map(provider => new provider()));

    // 컨트롤러 클래스로 생성한 인스턴스의 모든 메서드 가져오고
    // getOwnPropertyNames : 모든 메서드의 이름을 순회하면서 가져온다.
    Object.getOwnPropertyNames(controller.prototype).forEach((key) => {
        // 현재 메서드의 핸들러를 가져온다.
        const routerHendler = controller.prototype[key];

        // 메서드 핸들러의 path로 메타데이터 가져오기
        const path = Reflect.getMetadata("path", routerHendler);

        // 메서드 핸들러의 http 메서드 가져오기
        const method: any = Reflect.getMetadata("method", routerHendler);

        if (path && method) {
            router[method](`${basePath}${path}`, (req: any, res: any) => { routerHendler.call(instance, req, res) });
        }
    })
    return router;
}