import { BaseApplication } from "../../shared/application/interfaces/base-application";
import { UserModel } from "../domain/models/user.model";
import { UserRepository } from "../domain/repositories/user.repository";

export class UserApplication extends BaseApplication<UserModel> {
  constructor(private repositoryUser: UserRepository) {
    super(repositoryUser);
  }
}
