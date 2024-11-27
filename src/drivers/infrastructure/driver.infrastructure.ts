import { BaseRepository } from "../../shared/domain/repositories/base-repository";
import { BaseInfrastructure } from "../../shared/infrastructure/base-infrastructure";
import { DriverModel } from "../domain/models/driver.model";
import { DriverRepository } from "../domain/repositories/driver.repository";

export class DriverInfrastructure
  extends BaseInfrastructure<DriverModel, number>
  implements DriverRepository
{
  reportByDriverId(id: number): Promise<DriverModel> {
    throw new Error("Method not implemented.");
  }
}
