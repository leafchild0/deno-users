import { Router, Context, httpErrors } from "../deps.ts";
import { UserController } from "./controllers.ts";

const router = new Router();

router
  .get("/users", async (ctx: Context) => {
    ctx.response.body = await UserController.getAll();
  })
  .post("/users", async (ctx: Context) => {
    const body = ctx.request.body;
    const userData = await body.json();
    ctx.response.body = await UserController.create(userData);
  })
  .get("/users/:id", async (ctx: Context) => {
    const id = ctx.params.id;
    ctx.response.body = await UserController.getById(Number(id));
  })
  .delete("/users/:id", async (ctx: Context) => {
    const id = ctx.params.id;
    ctx.response.body = await UserController.deleteById(Number(id));
  })
  .put("/users/:id", async (ctx: Context) => {
    const id = ctx.params.id;
    const body = ctx.request.body;
    const userData = await body.json()

    if (userData.id) {
      throw new httpErrors.BadRequest("ID is not allowed for update");
    }
    else {
      ctx.response.body = await UserController.update(Number(id), userData);
    }

  });

export default router;
