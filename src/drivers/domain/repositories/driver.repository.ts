import { DriverModel } from "../models/driver.model";

export interface DriverRepository {
  insert(driver: DriverModel): Promise<DriverModel>;
  update(driver: DriverModel): Promise<DriverModel>;
  delete(id: number): Promise<boolean>;
  findById(id: number): Promise<DriverModel | null>;
  findAll(): Promise<DriverModel[]>;
}
