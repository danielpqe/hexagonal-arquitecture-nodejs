import { Application } from "express";
import routerUsers from "./users/interfaces/http/user.route";
import routerHistories from "./histories/interfaces/history.route";
import routerDrivers from "./drivers/interfaces/drivers.route";
import routerMedics from "./medics/interfaces/medic.route";
import ServerBootstrap from "./bootstrap/server.bootstrap";
import DatabaseBootstrap from "./bootstrap/database.bootstrap";

class App {
  expressApp: Application;
  database: any;

  constructor() {
    const serverBootstrap = new ServerBootstrap();
    this.expressApp = serverBootstrap.expressApp;

    const databaseBootstrap = new DatabaseBootstrap();
    this.database = databaseBootstrap.initialize();

    this.mountHealthCheck();
    this.mountRoutes();
  }
  mountHealthCheck(): void {
    // health validator when running in AWS, Google Cloud and others
    this.expressApp.get("/", (req, res) => {
      res.send("All is good!");
    });
    this.expressApp.get("/healthcheck", (req, res) => {
      res.send("All is good!");
    });
  }
  mountRoutes(): void {
    this.expressApp.use("/users", routerUsers);
    this.expressApp.use("/drivers", routerDrivers);
    this.expressApp.use("/histories", routerHistories);
    this.expressApp.use("/medics", routerMedics);
  }
}
new App().expressApp;
// export default new App().expressApp;
