import express from "express";
import { HistoryController } from "./history.controller";
import { HistoryApplication } from "../application/history.application";
import { HistoryInfrastructure } from "../infrastructure/history.infrastructure";

const router = express.Router();

const historyInfrastructure = new HistoryInfrastructure();
const historyApplication = new HistoryApplication(historyInfrastructure);
const historyController = new HistoryController(historyApplication);

router.get("/", historyController.getHistorys.bind(historyController));
router.post("/", historyController.addHistorys.bind(historyController));
router.put("/:id", historyController.modifyHistorys.bind(historyController));
router.delete("/:id", historyController.deleteHistorys.bind(historyController));

export default router;
