import { BaseRepository } from "../../shared/domain/repository/base-repository";
import { BaseInfraestructure } from "../../shared/infraestructure/base-infraestructure";
import { DriverModel } from "../domain/models/driver.model";
import { DriverRepository } from "../domain/repository/driver.repository";

export class DriverInfraestructure
  extends BaseInfraestructure<DriverModel, number>
  implements DriverRepository
{
  reportByDriver(id: number): Promise<DriverModel[]> {
    throw new Error("Method not implemented.");
  }
}
