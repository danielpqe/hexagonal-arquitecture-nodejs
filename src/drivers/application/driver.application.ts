import { BaseApplication } from "../../shared/application/interfaces/base-application";
import { BaseRepository } from "../../shared/domain/repositories/base-repository";
import { DriverModel } from "../domain/models/driver.model";
import { DriverRepository } from "../domain/repositories/driver.repository";
import { DriverDto } from "./dto/list.dto";

export class DriverApplication extends BaseApplication<DriverModel> {
  constructor(private repositoryDriver: DriverRepository) {
    super(repositoryDriver, new DriverDto(), "Driver Application");
  }

  async reportByDriverId(id: number): Promise<DriverModel | null> {
    return await this.repositoryDriver.reportByDriverId(id);
  }
}
