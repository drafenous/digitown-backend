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
const bcrypt_1 = __importDefault(require("bcrypt"));
const database_1 = __importDefault(require("../infra/database"));
class UserEnterpriseData {
    getUser(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `select * from public.enterpriseUsers where email = '${email}'`;
            return yield database_1.default.query(query).then((users) => users.find((user) => __awaiter(this, void 0, void 0, function* () {
                return yield bcrypt_1.default.compare(password, user.passwordHash);
            })));
        });
    }
    createUser({ fullName, email, passwordHash: password, enterpriseId }) {
        return __awaiter(this, void 0, void 0, function* () {
            const hash = bcrypt_1.default.hash(password, 10);
            const query = `INSERT INTO public.enterpriseUsers(
      "fullName", email, "passwordHash", "enterpriseId")
      VALUES ('${fullName}', '${email}', '${hash}', '${enterpriseId}');`;
            return yield database_1.default.query(query);
        });
    }
}
exports.default = UserEnterpriseData;
