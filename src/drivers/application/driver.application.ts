import { BaseRepository } from "../../shared/domain/repositories/base-repository";
import { DriverModel } from "../domain/models/driver.model";
import { DriverRepository } from "../domain/repositories/driver.repository";

export class DriverApplication {
  constructor(private repositoryDriver: DriverRepository) {}

  async add(driver: DriverModel): Promise<DriverModel> {
    return await this.repositoryDriver.insert(driver);
  }

  async modify(driver: DriverModel): Promise<DriverModel> {
    return await this.repositoryDriver.update(driver, {}, []);
  }

  async delete(id: number): Promise<DriverModel | null> {
    return await this.repositoryDriver.delete({});
  }

  async searchById(id: number): Promise<DriverModel | null> {
    return await this.repositoryDriver.findOne({}, []);
  }

  async findAll(): Promise<DriverModel[]> {
    return await this.repositoryDriver.findAll({ active: true }, [], {
      name: "DESC",
    });
  }

  async reportByDriverId(id: number): Promise<DriverModel | null> {
    return await this.repositoryDriver.reportByDriverId(id);
  }
}
