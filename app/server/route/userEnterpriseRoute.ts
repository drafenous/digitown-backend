import bodyParser from "body-parser";
import express from "express";
import UserEnterpriseService from "../service/userEnterpriseService";

const router = express.Router()
const service = new UserEnterpriseService()
const jsonParser = bodyParser.json()

router.get("/login", async (req, res) => service.login(req, res));
router.post("/create", jsonParser, async (req, res) => service.create(req, res));

export default router;