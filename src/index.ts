import ServerBootstrap from "./bootstrap/server.bootstrap";
import DatabaseBootstrap from "./bootstrap/database.bootstrap";
import { DataSource } from "typeorm";

const serverBootstrap = new ServerBootstrap();
const databaseBootstrap = new DatabaseBootstrap();

(async () => {
  try {
    const tasks = [
      serverBootstrap.initialize(),
      databaseBootstrap.initialize(),
    ];
    const tasksCompleted = await Promise.all(tasks);

    const hostDatabase = (tasksCompleted[1] as DataSource).options;
    console.log("hostDatabase", hostDatabase);
  } catch (error) {
    console.error(error);
  }
})();
