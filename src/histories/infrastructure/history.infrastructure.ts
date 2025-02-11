import { BaseInfrastructure } from "../../shared/infrastructure/base-infrastructure";
import { HistoryModel } from "../domain/models/history.model";
import { HistoryRepository } from "../domain/repository/history.repository";

export class HistoryInfrastructure
  extends BaseInfrastructure<HistoryModel>
  implements HistoryRepository
{
  reportByHistory(id: number): Promise<HistoryModel[]> {
    throw new Error("Method not implemented.");
  }
}
