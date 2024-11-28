import express from "express";
import { UserController } from "./user.controller";
import { UserApplication } from "../application/user.application";
import { UserInfrastructure } from "../infrastructure/user.infrastructure";

const userInfrastructure = new UserInfrastructure();
const userApplication = new UserApplication(userInfrastructure);
const userController = new UserController(userApplication);

const router = express.Router();

// router.get("/", (req, res) => userController.getUsers(req, res));
router.get("/", userController.list.bind(userController));
router.post("/", userController.add.bind(userController));
router.put("/", userController.update.bind(userController));
router.delete("/:id", userController.delete.bind(userController));
router.get("/:id", userController.findById.bind(userController));

export default router;
