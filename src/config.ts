import { DataSource } from "../deps.ts";
import { User } from "./entities.ts";

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "./database.sqlite",
    synchronize: true,
    logging: true,
    entities: [User],
    subscribers: [],
    migrations: [],
});