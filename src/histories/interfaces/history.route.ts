import express, { Request, Response } from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("ok");
});

export default router;
