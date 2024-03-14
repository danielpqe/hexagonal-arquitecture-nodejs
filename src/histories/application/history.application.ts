import { HistoryModel } from "../domain/models/history.model";
import { HistoryRepository } from "../domain/repository/history.repository";

export class HistoryAplication {
  constructor(private repositoryHistory: HistoryRepository) {}
  async add(user: HistoryModel) {
    return await this.repositoryHistory.insert(user);
  }

  async update(user: HistoryModel) {
    return await this.repositoryHistory.update(user);
  }

  async delete(id: number) {
    return await this.repositoryHistory.delete(id);
  }

  async findById(id: number) {
    return await this.repositoryHistory.findById(id);
  }

  async getHistoryById(id: number) {
    return await this.repositoryHistory.reportByHistory(id);
  }
}
