import { BaseRepository } from "../../shared/domain/repository/base-repository";
import { MedicModel } from "../domain/models/medic.model";
import { MedicRepository } from "../domain/repository/medic.repository";

export class MedicApplication {
  constructor(private repositoryMedic: MedicRepository) {}
  async add(user: MedicModel) {
    return await this.repositoryMedic.insert(user);
  }

  async update(user: MedicModel) {
    return await this.repositoryMedic.update(user);
  }

  async delete(id: number) {
    return await this.repositoryMedic.delete(id);
  }

  async findById(id: number) {
    return await this.repositoryMedic.findById(id);
  }

  async getMedicById(id: number) {
    return await this.repositoryMedic.reportByMedic(id);
  }
}
