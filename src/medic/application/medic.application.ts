import { MedicModel } from "../domain/models/medic.model";
import { MedicRepository } from "../domain/repositories/medic.repository";

export class UserApplication {
  constructor(private repositoryMedic: MedicRepository) {}

  async add(medic: MedicModel): Promise<MedicModel> {
    return await this.repositoryMedic.insert(medic);
  }

  async modify(medic: MedicModel): Promise<MedicModel> {
    return await this.repositoryMedic.update(medic);
  }

  async delete(id: number): Promise<boolean> {
    return await this.repositoryMedic.delete(id);
  }

  async searchById(id: number): Promise<MedicModel | null> {
    return await this.repositoryMedic.findById(id);
  }

  async searchAll(): Promise<MedicModel[]> {
    return await this.repositoryMedic.findAll();
  }
}
