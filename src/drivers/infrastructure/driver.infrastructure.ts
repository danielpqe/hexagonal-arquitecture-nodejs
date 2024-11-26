import { BaseRepository } from "../../shared/domain/repositories/base-repository";
import { DriverModel } from "../domain/models/driver.model";
import { DriverRepository } from "../domain/repositories/driver.repository";

export class DrivrInfrastructure implements BaseRepository<DriverModel> {
  async insert(driver: DriverModel): Promise<DriverModel> {
    return Promise.resolve(driver);
  }

  async update(driver: DriverModel): Promise<DriverModel> {
    return driver;
  }

  async delete(id: number): Promise<boolean> {
    return true;
  }

  async findById(id: number): Promise<DriverModel | null> {
    return null;
  }

  async findAll(): Promise<DriverModel[]> {
    return [];
  }
}
