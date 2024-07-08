// npm i reflect-metadata
// npm i -g typescript
// npx tsc --init

// 데코레이터는 함수가 정의 되어 있고 런타임 환경에서 메타데이터로 가져와서 호출
import 'reflect-metadata';
import { ModuleMetaData } from '../../decorator/src/common/decorator/module.decorator';

const decorator = (target: any, property: string) => {
    console.log(property)
    Reflect.defineMetadata("metadataKey", "metadataValue", target, property);
    console.log(target)
    console.log(Reflect.defineMetadata("metadataKey", "metadataValue", target, property))
}

class App {
    // @Decorator
    start() {
        console.log("app");
    }
}

const temp = new App();
const metadata = Reflect.getMetadata("metadataKey", temp, "start");
console.log(metadata);
console.log(temp.start());

// 런타임에서 데코레이터 함수와 같이 작성한 함수가 같이 호출된다.