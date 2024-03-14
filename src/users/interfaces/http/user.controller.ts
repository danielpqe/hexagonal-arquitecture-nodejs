import { Request, Response } from "express";

export class UserController {
  list(req: Request, res: Response) {
    const users = [
      {
        name: "Daniel Q",
        age: 30,
      },
      {
        name: "Maria P",
        age: 38,
      },
      {
        name: "Jose H",
        age: 25,
      },
    ];
    res.json(users);
  }
}
