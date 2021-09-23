import bodyParser from "body-parser";
import express from "express";
import UserService from "../service/userService";

const router = express.Router()
const service = new UserService()
const jsonParser = bodyParser.json()

router.get("/login", async (req, res) => service.login(req, res));
router.post("/create", jsonParser, async (req, res) => service.create(req, res));

export default router;