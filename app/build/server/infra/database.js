"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_promise_1 = __importDefault(require("pg-promise"));
const driver = (0, pg_promise_1.default)();
const db = driver({
    user: 'agndiznmrsbfpy',
    password: 'c38c326d6c04a0d0d9fef51336395034bebd6ffa8d59eae13b2141194dfa313b',
    host: 'ec2-23-20-208-173.compute-1.amazonaws.com',
    port: 5432,
    database: 'der3fp10p19q5m'
});
exports.default = db;
