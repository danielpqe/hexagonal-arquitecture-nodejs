import { Application } from "express";
import RouterUsers from "./users/interfaces/http/user.route";
import routerHistories from "./histories/interfaces/history.route";
import routerDrivers from "./drivers/interfaces/drivers.route";
import routerMedics from "./medics/interfaces/medic.route";
import ServerBootstrap from "./bootstrap/server.bootstrap";
import DatabaseBootstrap from "./bootstrap/database.bootstrap";

// const app = express();

// app.use("/users", routerUsers);
// app.use("/drivers", routerDrivers);

// app.listen(PORT, () => {
//   console.log(`Server running at: http://localhost:${PORT}`);
// });

const PORT = 3000;

class App {
  expressApp: Application;
  database: any;

  constructor() {
    this.expressApp = express();
    this.mountMiddlewares();
    this.mountHealthCheck();
    this.mountRoutes();
    // this.listen();
  }

  mountMiddlewares(): void {
    this.expressApp.use(express.json());
    this.expressApp.use(express.urlencoded({ extended: true }));
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
    // this.expressApp.use("/users", routerUsers);
    this.expressApp.use("/drivers", routerDrivers);
    this.expressApp.use("/histories", routerHistories);
    this.expressApp.use("/medics", routerMedics);
  }
}
new App().expressApp;
// export default new App().expressApp;
