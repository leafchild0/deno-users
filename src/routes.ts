import { Router, RouterContext } from "../deps.ts";
import { UserController } from "./controllers.ts";

const router = new Router();

router
    .get("/users", async (ctx: RouterContext) => {
        ctx.response.body = await UserController.getAll();
    })
    .post("/users", async (ctx: RouterContext) => {
        const body = ctx.request.body();
        const userData = await body.value;
        ctx.response.body = await UserController.create(userData);
    })
    .get("/users/:id", async (ctx: RouterContext) => {
        const id = ctx.params.id;
        ctx.response.body = await UserController.getById(Number(id));
    });

export default router;