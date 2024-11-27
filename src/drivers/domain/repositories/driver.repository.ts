import { BaseRepository } from "../../../shared/domain/repositories/base-repository";
import { DriverModel } from "../models/driver.model";

export interface DriverRepository extends BaseRepository<DriverModel, number> {
  reportByDriverId(id: number): Promise<DriverModel>;
}
