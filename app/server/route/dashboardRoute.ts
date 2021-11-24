import express from "express";
import DashboardService from "../service/dashboardService";

const router = express.Router()
const service = new DashboardService()

router.get("/todayPending", async (req, res) => service.todayPending(req, res));
router.get("/todayEntrance", async (req, res) => service.todayEntrance(req, res));
router.get("/todaySchedule", async (req, res) => service.todaySchedule(req, res));

export default router;