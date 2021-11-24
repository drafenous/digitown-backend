"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const userRoute_1 = __importDefault(require("./route/userRoute"));
const userEnterpriseRoute_1 = __importDefault(require("./route/userEnterpriseRoute"));
const scheduleRoute_1 = __importDefault(require("./route/scheduleRoute"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json({ type: 'application/*+json' }));
app.use('/user', userRoute_1.default);
app.use('/userEnterprise', userEnterpriseRoute_1.default);
app.use('/schedule', scheduleRoute_1.default);
app.listen(process.env.PORT || 3000);
