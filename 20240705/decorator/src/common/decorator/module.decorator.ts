import "reflect-metadata";

export interface ModuleMetaData {
    imports: any[];
    controllers: any[];
    providers: any[];
}

export function Module(metadata: ModuleMetaData): ClassDecorator {
    return (target: Function) => {
        // 클래스에게 모듈의 메타데이터를 저장
        Reflect.defineMetadata("module", metadata, target);
    }
}