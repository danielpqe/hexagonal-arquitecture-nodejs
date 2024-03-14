import { BaseRepository } from "../../../shared/domain/repository/base-repository";
import { UserModel } from "../models/user.model";

export interface UserRepository extends BaseRepository<UserModel, string> {}
