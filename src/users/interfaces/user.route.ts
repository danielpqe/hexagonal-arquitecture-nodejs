import express, { Request, Response } from "express";

const router = express.Router();

router.get("/details", (req: Request, res: Response) => {
  const user = {
    name: "Daniel Q",
    age: 30,
  };
  res.json(user);
});

export default router;
