import { HistoryApplication } from "../application/history.application";
import { Request, Response } from "express";
import { HistoryModel } from "../domain/models/history.model";
import { HistoryFactory } from "../domain/models/history.factory";

export class HistoryController {
  constructor(private driverApplication: HistoryApplication) {}

  public async getHistories(req: Request, res: Response) {
    const histories = await this.driverApplication.findAll({}, [], {});
    res.send(histories);
  }

  public async addHistories(req: Request, res: Response) {
    const history = new HistoryFactory().create(req.body);

    // const { name, lastname, license, active } = req.body;
    // const history = new HistoryModel(0, name, lastname, license, active);
    const result = await this.driverApplication.add(history);
    res.send(result);
  }

  public async modifyHistories(req: Request, res: Response) {
    const driverToInsert = { id: req.params.id, ...req.body };

    const history = new HistoryFactory().create(driverToInsert);
    const result = await this.driverApplication.update(history, {}, []);
    res.send(result);
  }

  public async deleteHistories(req: Request, res: Response) {
    const id = req.params.id;
    const result = await this.driverApplication.delete({ id });
    res.send(result);
  }
}
