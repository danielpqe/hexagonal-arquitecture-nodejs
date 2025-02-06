import { BaseRepository } from "../../../shared/domain/repository/base-repository";
import { HistoryModel } from "../models/history.model";

export interface HistoryRepository
  extends BaseRepository<HistoryModel, number> {
  reportByHistory(id: number): Promise<HistoryModel[]>;
}
