import express, { Application } from "express";
import routerUsers from "./users/interfaces/user.route";
import routerDrivers from "./drivers/interfaces/drivers.route";

const app = express();

app.use("/users", routerUsers);
app.use("/drivers", routerDrivers);

const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`Server running at: http://localhost:${PORT}`);
// });

class App {
  expressApp: Application;
  constructor() {
    this.expressApp = express();
    this.mountHealthCheck();
    this.mountRoutes();
    this.listen();
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
  }
  listen() {
    this.expressApp.listen(PORT, () => {
      console.log(`Server running at: http://localhost:${PORT}`);
    });
  }
}

export default new App().expressApp;
