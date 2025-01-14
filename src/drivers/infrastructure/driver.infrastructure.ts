import { Repository } from "typeorm";
import { BaseInfrastructure } from "../../shared/infrastructure/base-infrastructure";
import { DriverModel } from "../domain/models/driver.model";
import { DriverRepository } from "../domain/repositories/driver.repository";
import DatabaseBootstrap from "../../bootstrap/database.bootstrap";
import { DriverEntity } from "../domain/models/driver.entity";

export class DriverInfrastructure
  extends BaseInfrastructure<DriverModel, number>
  implements DriverRepository
{
  reportByDriverId(id: number): Promise<DriverModel> {
    throw new Error("Method not implemented.");
  }

  override findAll(): Promise<DriverModel[]> {
    const dataSource = DatabaseBootstrap.dataSource;
    const repository = dataSource.getRepository(DriverEntity);
    return repository.find();
  }
}
