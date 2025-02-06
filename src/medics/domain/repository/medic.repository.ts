import { BaseRepository } from "../../../shared/domain/repository/base-repository";
import { MedicModel } from "../models/medic.model";

export interface MedicRepository extends BaseRepository<MedicModel, number> {
  reportByMedic(id: number): Promise<MedicModel[]>;
}
