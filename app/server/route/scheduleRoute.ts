import bodyParser from "body-parser";
import express from "express";
import ScheduleService from "../service/scheduleService";

const router = express.Router()
const service = new ScheduleService()
const jsonParser = bodyParser.json()

router.get("/list", async (req, res) => service.list(req, res));
router.get("/listPending", async (req, res) => service.pendingList(req, res));
router.post("/create", jsonParser, async (req, res) => service.create(req, res));
router.put("/update", jsonParser, async (req, res) => service.update(req, res));

export default router;