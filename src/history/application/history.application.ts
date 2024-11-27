import { HistoryModel } from "../domain/models/history.model";
import { HistoryRepository } from "../domain/repositories/history.repository";

export class HistoryApplication {
  constructor(private repositoryUser: HistoryRepository) {}

  async add(user: HistoryModel): Promise<HistoryModel> {
    return await this.repositoryUser.insert(user);
  }

  async modify(user: HistoryModel): Promise<HistoryModel> {
    return await this.repositoryUser.update(user);
  }

  async delete(id: number): Promise<boolean> {
    return await this.repositoryUser.delete(id);
  }

  async searchById(id: number): Promise<HistoryModel | null> {
    return await this.repositoryUser.findById(id);
  }

  async searchAll(): Promise<HistoryModel[]> {
    return await this.repositoryUser.findAll();
  }
}
