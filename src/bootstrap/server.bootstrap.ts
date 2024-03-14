import express, { Application } from "express";

const PORT = 3000;

class ServerBootstrap {
  expressApp: Application;
  app = express();

  constructor() {
    this.expressApp = express();
    this.listen();
  }

  listen() {
    this.expressApp.listen(PORT, () => {
      console.log(`Server running at: http://localhost:${PORT}`);
    });
  }
}

export default ServerBootstrap;
