import { DriverApplication } from "../application/driver.application";
import { Request, Response } from "express";

export class DriverController {
  constructor(private driverApplication: DriverApplication) {}

  public async getDrivers(req: Request, res: Response) {
    const drivers = await this.driverApplication.searchAll();
    res.send(drivers);
  }
}
