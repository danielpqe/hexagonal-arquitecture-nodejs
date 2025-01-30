import express from "express";
import { DriverController } from "./drivers.controller";
import { DriverApplication } from "../application/driver.application";
import { DriverInfrastructure } from "../infrastructure/driver.infrastructure";

const router = express.Router();

const driverInfrastructure = new DriverInfrastructure();
const driverApplication = new DriverApplication(driverInfrastructure);
const driverController = new DriverController(driverApplication);

router.get("/", driverController.getDrivers.bind(driverController));
router.post("/", driverController.addDrivers.bind(driverController));
router.put("/:id", driverController.modifyDrivers.bind(driverController));
router.delete("/:id", driverController.deleteDrivers.bind(driverController));

export default router;
