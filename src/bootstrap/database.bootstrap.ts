import { DatabaseListen } from "./bootstrap";
import { DataSource, DataSourceOptions } from "typeorm";

export default class DatabaseBootstrap extends DatabaseListen {
  listen(): void {
    throw new Error("Method not implemented.");
  }

  initialize(): Promise<DataSource | Error> {
    const connectionParams: DataSourceOptions = {
      type: "mysql",
      host: process.env.DATABASE_MYSQL_HOST || "localhost",
      port: process.env.DATABASE_MYSQL_PORT
        ? parseInt(process.env.DATABASE_MYSQL_PORT)
        : 3306,
      username: process.env.DATABASE_MYSQL_USERNAME || "dan",
      password: process.env.DATABASE_MYSQL_PASSWORD || "12345",
      database: process.env.DATABASE_MYSQL_NAME || "appdb",
      synchronize: true,
      logging: true,
      entities: ["src/**/*.entity.ts"],
    };
    const data = new DataSource(connectionParams);
    console.log("Database is running");
    return data.initialize();
  }
}
