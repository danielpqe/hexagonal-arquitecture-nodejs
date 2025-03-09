import { BaseInfrastructure } from "../../shared/infrastructure/base-infrastructure";
import { UserModel } from "../domain/models/user.model";
import { UserRepository } from "../domain/repository/user.repository";

export class UserInfraestructure
  extends BaseInfrastructure<UserModel>
  implements UserRepository {}
