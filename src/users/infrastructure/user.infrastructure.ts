import { BaseRepository } from "../../shared/domain/repositories/base-repository";
import { BaseInfrastructure } from "../../shared/infrastructure/base-infrastructure";
import { UserModel } from "../domain/models/user.model";
import { UserRepository } from "../domain/repositories/user.repository";

export class UserInfrastructure
  extends BaseInfrastructure<UserModel, string>
  implements UserRepository {}
