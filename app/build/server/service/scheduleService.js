"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const scheduleData_1 = __importDefault(require("../data/scheduleData"));
class ScheduleService {
    constructor() {
        this.db = new scheduleData_1.default();
    }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userId } = req.query;
            if (userId) {
                const data = yield this.db.getSchedules(userId);
                if (data) {
                    return res.json(Object.assign({}, data));
                }
                return res.status(404).send("Not found");
            }
            return res.status(404).send("Not found");
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userId, companyName, datetime } = req.body.params;
            if (userId && companyName && datetime) {
                const params = { userId: Number(userId), companyName: String(companyName), datetime: String(datetime) };
                const data = yield this.db.createSchedule(params);
                if (data) {
                    return res.json(Object.assign({}, data));
                }
                return res.status(500).send("Create schedule error");
            }
            return res.status(504).send("Create schedule error");
        });
    }
}
exports.default = ScheduleService;
