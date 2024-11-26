import { BaseRepository } from "../../shared/domain/repositories/base-repository";
import { DriverModel } from "../domain/models/driver.model";
import { DriverRepository } from "../domain/repositories/driver.repository";

export class DriverApplication {
  constructor(private repositoryDriver: BaseRepository<DriverModel>) {}

  async add(driver: DriverModel): Promise<DriverModel> {
    return await this.repositoryDriver.insert(driver);
  }

  async modify(driver: DriverModel): Promise<DriverModel> {
    return await this.repositoryDriver.update(driver);
  }

  async delete(id: number): Promise<boolean> {
    return await this.repositoryDriver.delete(id);
  }

  async searchById(id: number): Promise<DriverModel | null> {
    return await this.repositoryDriver.findById(id);
  }

  async searchAll(): Promise<DriverModel[]> {
    return await this.repositoryDriver.findAll();
  }
}
