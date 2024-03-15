import express, { Request, Response } from "express";
import { UserController } from "./user.controller";
import { UserApplication } from "../../application/user.application";
import { UserInfraestructure } from "../../infraestructure/user.infraestructure";
import { BaseRouter } from "../../../shared/interface/base-router";

const infraestructure = new UserInfraestructure();
const application = new UserApplication(infraestructure);
const controller = new UserController(application);

export default class UserRouter extends BaseRouter {
  constructor() {
    super(controller);
  }
  mountRoutes(): void {
    // this.router.get("/", controller.list.bind(controller));
    // this.router.post("/", controller.add.bind(controller));
    // this.router.put("/:id", controller.update.bind(controller));
    // this.router.delete("/:id", controller.remove.bind(controller));
    // this.router.get("/:id", controller.findById.bind(controller));
  }
}
