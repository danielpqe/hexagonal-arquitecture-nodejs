import { UserModel } from "../models/user.model";

export interface UserRepository {
  insert(user: UserModel): Promise<UserModel>;
  update(user: UserModel): Promise<UserModel>;
  delete(id: number): Promise<boolean>;
  findById(id: number): Promise<UserModel | null>;
  findAll(): Promise<UserModel[]>;
}
