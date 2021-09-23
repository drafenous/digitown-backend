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
const userData_1 = __importDefault(require("../data/userData"));
class UserService {
    constructor() {
        this.db = new userData_1.default();
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = req.query;
            if (email && password) {
                const data = yield this.db.getUser(email, password);
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
            const { fullName, email, password } = req.body.params;
            if (fullName && email && password) {
                const params = { fullName: String(fullName), email: String(email), passwordHash: String(password) };
                const data = yield this.db.createUser(params);
                if (data) {
                    return res.json(Object.assign({}, data));
                }
                return res.status(500).send("Create user error");
            }
            return res.status(504).send("Create user error");
        });
    }
}
exports.default = UserService;
