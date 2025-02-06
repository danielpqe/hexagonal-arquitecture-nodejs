import { Request, Response } from "express";
import { UserApplication } from "../../application/user.application";

export class UserController {
  constructor(public application: UserApplication) {}

  async list(req: Request, res: Response) {
    const users = await this.application.findAll();

    res.json(users);
  }

  async add(req: Request, res: Response) {
    const user = req.body;
    const users = await this.application.add(user);

    res.json(users);
  }

  async update(req: Request, res: Response) {
    const user = req.body;
    const response = this.application.update(user);
  }

  async remove(req: Request, res: Response) {
    const id = req.params.id;
    const response = this.application.delete(id);
    res.json(response);
  }

  async findById(req: Request, res: Response) {
    const id = req.params.id;
    const response = await this.application.findById(id);
    res.json(response);
  }
}
