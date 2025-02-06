import { BaseInfraestructure } from "../../shared/infraestructure/base-infraestructure";
import { MedicModel } from "../domain/models/medic.model";
import { MedicRepository } from "../domain/repository/medic.repository";

export class MedicInfraestructure
  extends BaseInfraestructure<MedicModel, number>
  implements MedicRepository
{
  reportByMedic(id: number): Promise<MedicModel[]> {
    throw new Error("Method not implemented.");
  }
}
