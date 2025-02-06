import { BaseInfrastructure } from "../../shared/infrastructure/base-infrastructure";
import { MedicModel } from "../domain/models/medic.model";
import { MedicEntity } from "../domain/models/medic.entity";
import { MedicRepository } from "../domain/repositories/medic.repository";

export class MedicInfrastructure
  extends BaseInfrastructure<MedicModel>
  implements MedicRepository
{
  constructor() {
    super(MedicEntity);
  }
}
