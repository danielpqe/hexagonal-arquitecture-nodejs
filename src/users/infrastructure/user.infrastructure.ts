import { BaseRepository } from "../../shared/domain/repositories/base-repository";
import { UserModel } from "../domain/models/user.model";
import { UserRepository } from "../domain/repositories/user.repository";

export class UserInfrastructure implements BaseRepository<UserModel> {
  async insert(user: UserModel): Promise<UserModel> {
    return Promise.resolve(user);
  }

  async update(user: UserModel): Promise<UserModel> {
    return user;
  }

  async delete(id: number): Promise<boolean> {
    return true;
  }

  async findById(id: number): Promise<UserModel | null> {
    return null;
  }

  async findAll(): Promise<UserModel[]> {
    return [];
  }
}
