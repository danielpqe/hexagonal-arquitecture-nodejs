import { BaseApplication } from "../../shared/application/interfaces/base-application";
import { BaseRepository } from "../../shared/domain/repositories/base-repository";
import { MedicModel } from "../domain/models/medic.model";
import { MedicRepository } from "../domain/repository/medic.repository";

export class MedicApplication extends BaseApplication<MedicModel> {
  constructor(private repositoryMedic: MedicRepository) {
    super(repositoryMedic);
  }

  async getMedicById(id: number) {
    return await this.repositoryMedic.reportByMedic(id);
  }
}
