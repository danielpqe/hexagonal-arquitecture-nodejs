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

  override findAll(
    where: {
      [s: string]: string | number | boolean;
    },
    order: { [s: string]: string }
  ): Promise<DriverModel[]> {
    const dataSource = DatabaseBootstrap.dataSource;
    const repository = dataSource.getRepository(DriverEntity);
    return repository.find({ where: where || {}, order: order || {} });
  }

  override insert(driver: DriverModel): Promise<DriverModel> {
    const dataSource = DatabaseBootstrap.dataSource;
    const repository = dataSource.getRepository(DriverEntity);

    return repository.save(driver);
  }

  override async update(driver: DriverModel): Promise<DriverModel> {
    const dataSource = DatabaseBootstrap.dataSource;
    const repository = dataSource.getRepository(DriverEntity);
    const driverToUpdate = await repository.findOneBy({ id: driver.id });
    if (driverToUpdate) {
      delete driver.id;
      Object.assign(driverToUpdate, driver);
      return repository.save(driverToUpdate);
    }
    throw new Error("Driver not found");
  }

  override async delete(id: number): Promise<boolean> {
    const dataSource = DatabaseBootstrap.dataSource;
    const repository = dataSource.getRepository(DriverEntity);
    const driverToDelete = await repository.findOneBy({ id });
    if (driverToDelete) {
      driverToDelete.active = false;
      await repository.save(driverToDelete);
      return true;
    }
    return false;
  }
}
