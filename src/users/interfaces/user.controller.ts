import { Request, Response } from "express";
import { UserApplication } from "../application/user.application";

export class UserController {
  constructor(private userApplication: UserApplication) {}
  async list(req: Request, res: Response) {
    const users = await this.userApplication.findAll({}, [], {});

    res.json(users);
  }

  async add(req: Request, res: Response) {
    const user = req.body;
    console.log(JSON.stringify(user));
    const newUser = await this.userApplication.add(user);

    res.json(newUser);
  }

  async update(req: Request, res: Response) {
    const user = req.body;

    const updatedUser = await this.userApplication.update(user, {}, []);

    res.json(updatedUser);
  }

  async delete(req: Request, res: Response) {
    const id = req.params.id;

    const deletedUser = await this.userApplication.delete({ id });

    res.json(deletedUser);
  }

  async findById(req: Request, res: Response) {
    const id = req.params.id;

    const user = await this.userApplication.findOne({ id }, []);

    res.json(user);
  }
}
