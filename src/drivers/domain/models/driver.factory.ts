import { DriverModel } from "./driver.model";

export interface IDriver {
  id: number;
  name: string;
  lastname: string;
  license: string;
  active: boolean;
}

export class DriverFactory {
  create(driver: Partial<IDriver>) {
    const id = driver.id || 0;
    const name = driver.name;
    const lastname = driver.lastname;
    const license = driver.license;
    const active = driver.active || true;

    if (!name) {
      throw new Error("Driver id is required");
    }
    if (!lastname) {
      throw new Error("Driver lastname is required");
    }
    if (!license) {
      throw new Error("Driver license is required");
    }

    return new DriverModel(id, name, lastname, license, active);
  }
}
