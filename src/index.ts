import ServerBootstrap from "./bootstrap/server.bootstrap";
import DatabaseBootstrap from "./bootstrap/database.bootstrap";
import { DataSource } from "typeorm";
import "reflect-metadata";

export interface Options {
  type: string;
  host: string;
  port: number;
  username: string;
  password: string;
  entities: string[];
  database: string;
  synchronize: boolean;
  logging: boolean;
}

const serverBootstrap = new ServerBootstrap();
const databaseBootstrap = new DatabaseBootstrap();

(async () => {
  try {
    const tasks = [
      serverBootstrap.initialize(),
      databaseBootstrap.initialize(),
    ];

    const tasksCompleted = await Promise.all(tasks);
    const options: Options = Object.assign(
      {},
      (tasksCompleted[1] as DataSource).options
    ) as Options;
    console.log("Database is running", options.database);
  } catch (error) {
    console.error(error);
  }
})();
