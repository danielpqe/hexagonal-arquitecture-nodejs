import { BaseInfraestructure } from "../../shared/infraestructure/base-infraestructure";
import { UserModel } from "../domain/models/user.model";
import { UserRepository } from "../domain/repository/user.repository";

export class UserInfraestructure
  extends BaseInfraestructure<UserModel, string>
  implements UserRepository {}
