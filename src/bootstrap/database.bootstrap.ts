import { DatabaseListen } from "./bootstrap";
import { DataSource, DataSourceOptions } from "typeorm";

export default class DatabaseBootstrap extends DatabaseListen {
  listen(): void {
    throw new Error("Method not implemented.");
  }

  initialize(): Promise<DataSource | Error> {
    const connectionParams: DataSourceOptions = {
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "dan",
      password: "12345",
      database: "appdb",
      synchronize: true,
      logging: true,
      entities: ["src/**/*.entity.ts"],
    };
    const data = new DataSource(connectionParams);
    console.log("Database is running");
    return data.initialize();
  }
}
