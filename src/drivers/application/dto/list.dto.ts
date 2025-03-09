import Result from "../../../shared/application/interfaces/result.interface";
import { DriverModel } from "../../domain/models/driver.model";

const FilterDriver = (driver: DriverModel) => ({
  id: driver.id,
  name: driver.name,
  email: driver.lastname,
});

// export function ListDriverDto(
//   result: Result<DriverModel>
// ): Result<DriverModel> {
//   const data = result.payload.data as DriverModel[];
//   result.payload.data = data.map(FilterDriver);
//   return result;
// }

export abstract class DTOAbstract<T> {
  abstract callback(result: Result<T>): Result<T>;

  mapping(result: Result<T>): Result<T> {
    return this.callback(result);
  }
}

export class DriverDto extends DTOAbstract<DriverModel> {
  callback(result: Result<DriverModel>): Result<DriverModel> {
    const data = result.payload.data;
    if (Array.isArray(data)) {
      result.payload.data = data.map(FilterDriver);
      return result;
    }
    result.payload.data = FilterDriver(data);
    return result;
  }
}
