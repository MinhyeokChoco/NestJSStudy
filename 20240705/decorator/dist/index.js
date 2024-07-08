"use strict";
// npm i reflect-metadata
// npm i -g typescript
// npx tsc --init
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
// 데코레이터는 함수가 정의 되어 있고 런타임 환경에서 메타데이터로 가져와서 호출
require("reflect-metadata");
const decorator = (target, property) => {
    console.log(property);
    Reflect.defineMetadata("metadataKey", "metadataValue", target, property);
    console.log(target);
    console.log(Reflect.defineMetadata("metadataKey", "metadataValue", target, property));
};
class App {
    start() {
        console.log("app");
    }
}
__decorate([
    decorator,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], App.prototype, "start", null);
const temp = new App();
const metadata = Reflect.getMetadata("metadataKey", temp, "start");
console.log(metadata);
console.log(temp.start());
// 런타임에서 데코레이터 함수와 같이 작성한 함수가 같이 호출된다.
