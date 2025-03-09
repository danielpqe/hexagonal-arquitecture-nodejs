import express from "express";
import { HistoryController } from "./history.controller";
import { HistoryApplication } from "../application/history.application";
import { HistoryInfrastructure } from "../infrastructure/history.infrastructure";

const router = express.Router();

const historyInfrastructure = new HistoryInfrastructure();
const historyApplication = new HistoryApplication(historyInfrastructure);
const historyController = new HistoryController(historyApplication);

router.get("/", historyController.getHistories.bind(historyController));
router.post("/", historyController.addHistories.bind(historyController));
router.put("/:id", historyController.modifyHistories.bind(historyController));
router.delete(
  "/:id",
  historyController.deleteHistories.bind(historyController)
);

export default router;
