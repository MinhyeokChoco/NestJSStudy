import { Controller, Get } from "../common/decorator/controller.decorator";
import { AppService } from "./app.service";

// app.use("/user", userRouter)
// userRouter === router.get("/name", (req,res) => {})
// @Controller('/user')
// export class AppController {
//     constructor(private readonly appService: AppService) { }

//     @Get("/text")
//     getText(req: any, res: any) {
//         res.send(this.appService.getText());
//     }
// }
// /user/text