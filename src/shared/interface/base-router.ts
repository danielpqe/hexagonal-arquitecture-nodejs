import express from "express";
export abstract class BaseRouter {
  router: express.Router;

  constructor(private controller: any) {
    this.router = express.Router();
    this.mountRoutesCommon();
  }

  abstract mountRoutes(): void;

  mountRoutesCommon(): void {
    this.router.get("/", this.controller.list.bind(this.controller));
    this.router.post("/", this.controller.add.bind(this.controller));
    this.router.put("/:id", this.controller.update.bind(this.controller));
    this.router.delete("/:id", this.controller.remove.bind(this.controller));
    this.router.get("/:id", this.controller.findById.bind(this.controller));
  }
}
