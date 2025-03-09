import { HistoryModel } from "./history.model";

export interface IHistory {
  id: number;
  name: string;
  lastname: string;
  age: number;
  gender: string;
  phone: string;
  address: string;
  sympthons: string;
  observations: string;
  treatment: string;
}

export class HistoryFactory {
  create(history: Partial<IHistory>) {
    const id = history.id || 0;
    const name = history.name;
    const lastname = history.lastname;
    const age = history.age || 0;
    const gender = history.gender || "";
    const phone = history.phone || "";
    const address = history.address || "";
    const sympthons = history.sympthons || "";
    const observations = history.observations || "";
    const treatment = history.treatment || "";

    if (!name) {
      throw new Error("History id is required");
    }
    if (!lastname) {
      throw new Error("History lastname is required");
    }

    return new HistoryModel(
      id,
      name,
      lastname,
      age,
      gender,
      phone,
      address,
      sympthons,
      observations,
      treatment
    );
  }
}
