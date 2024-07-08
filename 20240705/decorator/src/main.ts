import express from "express"; // es6
// npm i --save-dev @types/express
// npm i -D @types/express
// const express = require("express"); // es5
import { AppModule } from "./app/app.module";
import { createRouter } from "./common/utils/router.utils";

function bootstrap() {
    // 서버 객체 만들고
    const app: any = express();

    const appModule = new AppModule();

    const ModuleMetaData = Reflect.getMetadata("module", AppModule);

    ModuleMetaData.controllers.forEach((controller: any) => {
        console.log(ModuleMetaData);
        const router = createRouter(controller, ModuleMetaData.providers);
        app.use("/", router)
    })


    app.listen(3000, () => {
        console.log("server on~");
    })
}

bootstrap();