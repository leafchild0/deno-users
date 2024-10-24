import { Application, RouterContext } from "./deps.ts";
import { AppDataSource } from "./src/config.ts";
import userRoutes from "./src/routes.ts";

const app = new Application();

// Error handling middleware
app.use(async (ctx: RouterContext, next: () => Promise<unknown>) => {
  try {
    await next();
  } catch (err) {
    ctx.response.status = err.status || 500;
    ctx.response.body = {
      message: err.message,
    };
  }
});

app.use(userRoutes.routes());
app.use(userRoutes.allowedMethods());

// Initialize database connection
try {
  await AppDataSource.initialize();
  console.log("Data Source has been initialized!");
} catch (err) {
  console.error("Error during Data Source initialization:", err);
}

// Start server
const port = 3000;
console.log(`Server running on port ${port}`);
await app.listen({ port });
