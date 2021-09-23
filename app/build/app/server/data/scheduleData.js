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
const database_1 = __importDefault(require("../infra/database"));
class ScheduleData {
    getSchedules(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `select * from public.schedule where "userId" = '${userId}'`;
            return yield database_1.default.query(query);
        });
    }
    createSchedule({ companyName, datetime, userId }) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `INSERT INTO public.schedule(
      "companyName", datetime, "userId")
      VALUES ('${companyName}', '${datetime}', '${userId}');`;
            yield database_1.default.query(query);
            const responseQuery = `select * from public.schedule where "companyName" = '${companyName}' AND datetime = '${datetime}' and "userId" = ${userId}`;
            return database_1.default.query(responseQuery);
        });
    }
}
exports.default = ScheduleData;
