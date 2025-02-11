import { BaseApplication } from "../../shared/application/interfaces/base-application";
import { HistoryModel } from "../domain/models/history.model";
import { HistoryRepository } from "../domain/repository/history.repository";

export class HistoryApplication extends BaseApplication<HistoryModel> {
  constructor(private repositoryHistory: HistoryRepository) {
    super(repositoryHistory);
  }
}
