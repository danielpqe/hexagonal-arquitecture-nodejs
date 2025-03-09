import { BaseInfrastructure } from "../../shared/infrastructure/base-infrastructure";
import { MedicModel } from "../domain/models/medic.model";
import { MedicRepository } from "../domain/repository/medic.repository";

export class MedicInfrastructure
  extends BaseInfrastructure<MedicModel>
  implements MedicRepository
{
  reportByMedic(id: number): Promise<MedicModel[]> {
    throw new Error("Method not implemented.");
  }
}
