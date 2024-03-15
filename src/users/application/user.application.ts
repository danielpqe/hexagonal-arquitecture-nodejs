import { UserModel } from "../domain/models/user.model";
import { UserRepository } from "../domain/repository/user.repository";

export class UserApplication {
  //   userInfraestructure: UserInfraestructure;§
  constructor(private repositoryUser: UserRepository) {
    // this.userInfraestructure = new UserInfraestructure();
  }
  async add(user: UserModel) {
    return await this.repositoryUser.insert(user);

    //     this.repositoryUser
    //       .insert(user)
    //       .then((user) => {
    //         console.log(user);
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       });
    //   }
  }

  async update(user: UserModel) {
    return await this.repositoryUser.update(user);
  }

  async delete(id: string) {
    return await this.repositoryUser.delete(id);
  }

  async findById(id: string) {
    return await this.repositoryUser.findById(id);
  }

  async findAll() {
    return await this.repositoryUser.findAll();
  }
}
