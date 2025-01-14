import { DatabaseListen } from "./bootstrap";
import { DataSource, DataSourceOptions } from "typeorm";

let source: DataSource;
export default class DatabaseBootstrap extends DatabaseListen {
  static get dataSource() {
    return source;
  }
  listen(): void {
    throw new Error("Method not implemented.");
  }

  initialize(): Promise<DataSource | Error> {
    const connectionParams: DataSourceOptions = {
      type: "mysql",
      host: process.env.DATABASE_MYSQL_HOST || "localhost",
      port: process.env.DATABASE_MYSQL_PORT
        ? parseInt(process.env.DATABASE_MYSQL_PORT, 10)
        : 3306,
      username: process.env.DATABASE_MYSQL_USERNAME || "dan",
      password: process.env.DATABASE_MYSQL_PASS || "12345",
      database: process.env.DATABASE_MYSQL_DATABASE || "appdb",
      synchronize: true,
      logging: true,
      entities: ["src/**/*.entity.ts"],
    };
    const data = new DataSource(connectionParams);
    source = data;
    return data.initialize();
  }
}
