import { DriverApplication } from "../application/driver.application";
import { Request, Response } from "express";
import { DriverModel } from "../domain/models/driver.model";
import { DriverFactory } from "../domain/models/driver.factory";
import { Trace } from "../../shared/helpers/trace.helper";

export class DriverController {
  constructor(private driverApplication: DriverApplication) {}

  public async getDrivers(req: Request, res: Response) {
    Trace.traceId(true);
    const drivers = await this.driverApplication.findAll({}, [], {});
    res.send(drivers);
  }

  public async getDriver(req: Request, res: Response) {
    Trace.traceId(true);
    const driver = await this.driverApplication.findOne(
      { id: req.params.id },
      []
    );
    res.send(driver);
  }

  public async addDrivers(req: Request, res: Response) {
    Trace.traceId(true);
    const driver = new DriverFactory().create(req.body);

    // const { name, lastname, license, active } = req.body;
    // const driver = new DriverModel(0, name, lastname, license, active);
    const result = await this.driverApplication.add(driver);
    res.send(result);
  }

  public async modifyDrivers(req: Request, res: Response) {
    Trace.traceId(true);
    const driverToInsert = { id: req.params.id, ...req.body };

    const driver = new DriverFactory().create(driverToInsert);
    const result = await this.driverApplication.update(driver, {}, []);
    res.send(result);
  }

  public async deleteDrivers(req: Request, res: Response) {
    Trace.traceId(true);
    const id = req.params.id;
    const result = await this.driverApplication.delete({ id });
    res.send(result);
  }
}
