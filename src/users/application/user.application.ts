import { UserModel } from "../domain/models/user.model";
import { UserRepository } from "../domain/repositories/user.repository";

export class UserApplication {
  constructor(private repositoryUser: UserRepository) {}

  async add(user: UserModel): Promise<UserModel> {
    console.log("user application add", user);
    return await this.repositoryUser.insert(user);
  }

  async modify(user: UserModel): Promise<UserModel> {
    return await this.repositoryUser.update(user);
  }

  async delete(id: string): Promise<boolean> {
    return await this.repositoryUser.delete(id);
  }

  async searchById(id: string): Promise<UserModel | null> {
    return await this.repositoryUser.findById(id);
  }

  async searchAll(): Promise<UserModel[]> {
    return await this.repositoryUser.findAll({}, {});
  }

  async update(user: UserModel): Promise<UserModel> {
    return await this.repositoryUser.update(user);
  }
}
