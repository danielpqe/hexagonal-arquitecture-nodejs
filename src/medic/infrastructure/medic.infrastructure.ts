import { BaseInfrastructure } from "../../shared/infrastructure/base-infrastructure";
import { MedicModel } from "../domain/models/medic.model";
import { MedicRepository } from "../domain/repositories/medic.repository";

export class MedicInfrastructure
  extends BaseInfrastructure<MedicModel, number>
  implements MedicRepository {}
