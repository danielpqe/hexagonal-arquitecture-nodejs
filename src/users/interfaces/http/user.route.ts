import express, { Request, Response } from "express";
import { UserController } from "./user.controller";

const router = express.Router();
const controller = new UserController();

router.get("/details", (req: Request, res: Response) => {
  const user = {
    name: "Daniel Q",
    age: 30,
  };
  res.json(user);
});

router.get("/", controller.list);

export default router;
