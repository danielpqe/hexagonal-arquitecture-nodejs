import { BaseInfrastructure } from "../../shared/infrastructure/base-infrastructure";
import { HistoryEntity } from "../domain/models/history.entity";
import { HistoryModel } from "../domain/models/history.model";
import { HistoryRepository } from "../domain/repository/history.repository";

export class HistoryInfrastructure
  extends BaseInfrastructure<HistoryModel>
  implements HistoryRepository
{
  constructor() {
    super(HistoryEntity);
  }

  reportByHistory(id: number): Promise<HistoryModel[]> {
    throw new Error("Method not implemented.");
  }
}
