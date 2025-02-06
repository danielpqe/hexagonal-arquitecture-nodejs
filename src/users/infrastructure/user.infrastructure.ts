import { BaseRepository } from "../../shared/domain/repositories/base-repository";
import { BaseInfrastructure } from "../../shared/infrastructure/base-infrastructure";
import { UserEntity } from "../domain/models/user.entity";
import { UserModel } from "../domain/models/user.model";
import { UserRepository } from "../domain/repositories/user.repository";

// const users: UserModel[] = [
//   {
//     id: 1,
//     name: "John",
//     lastname: "Doe",
//     age: 30,
//     password: "123456",
//     refreshToken: "123456",
//   },
//   {
//     id: 2,
//     name: "Jane",
//     lastname: "Doe",
//     age: 25,
//     password: "123456",
//     refreshToken: "123456",
//   },
// ];

export class UserInfrastructure
  extends BaseInfrastructure<UserModel>
  implements UserRepository
{
  constructor() {
    super(UserEntity);
  }
  // findAll(): Promise<UserModel[]> {
  //   return new Promise((resolve) => {
  //     resolve(users);
  //   });
  // }

  // insert(user: UserModel): Promise<UserModel> {
  //   users.push(user);
  //   return new Promise((resolve) => {
  //     resolve(user);
  //   });
  // }
}
