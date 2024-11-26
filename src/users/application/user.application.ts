import { BaseRepository } from "../../shared/domain/repositories/base-repository";
import { UserModel } from "../domain/models/user.model";
import { UserRepository } from "../domain/repositories/user.repository";
import { UserInfrastructure } from "../infrastructure/user.infrastructure";

export class UserApplication {
  constructor(private repositoryUser: BaseRepository<UserModel>) {}

  async add(user: UserModel): Promise<UserModel> {
    return await this.repositoryUser.insert(user);
  }

  async modify(user: UserModel): Promise<UserModel> {
    return await this.repositoryUser.update(user);
  }

  async delete(id: number): Promise<boolean> {
    return await this.repositoryUser.delete(id);
  }

  async searchById(id: number): Promise<UserModel | null> {
    return await this.repositoryUser.findById(id);
  }

  async searchAll(): Promise<UserModel[]> {
    return await this.repositoryUser.findAll();
  }
}
