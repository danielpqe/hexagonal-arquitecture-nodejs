import { BaseRepository } from "../../../shared/domain/repository/base-repository";
import { DriverModel } from "../models/driver.model";

export interface DriverRepository extends BaseRepository<DriverModel, number> {
  reportByDriver(id: number): Promise<DriverModel[]>;
}
