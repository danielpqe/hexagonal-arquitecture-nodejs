import { BaseRepository } from "../../shared/domain/repository/base-repository";
import { DriverModel } from "../domain/models/driver.model";
import { DriverRepository } from "../domain/repository/driver.repository";

export class DriverApplication {
  constructor(private repositoryDriver: DriverRepository) {}
  async add(user: DriverModel) {
    return await this.repositoryDriver.insert(user);
  }

  async update(user: DriverModel) {
    return await this.repositoryDriver.update(user);
  }

  async delete(id: number) {
    return await this.repositoryDriver.delete(id);
  }

  async findById(id: number) {
    return await this.repositoryDriver.findById(id);
  }

  async getDriverById(id: number) {
    return await this.repositoryDriver.reportByDriver(id);
  }
}
