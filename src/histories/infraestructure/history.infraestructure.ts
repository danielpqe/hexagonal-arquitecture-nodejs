import { BaseInfraestructure } from "../../shared/infraestructure/base-infraestructure";
import { HistoryModel } from "../domain/models/history.model";
import { HistoryRepository } from "../domain/repository/history.repository";

export class HistoryInfraestructure
  extends BaseInfraestructure<HistoryModel, number>
  implements HistoryRepository
{
  reportByHistory(id: number): Promise<HistoryModel[]> {
    throw new Error("Method not implemented.");
  }
}
