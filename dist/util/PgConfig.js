"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
require("dotenv/config");
const pg_promise_1 = __importDefault(require("pg-promise"));
const EnvValidation_1 = __importDefault(require("../util/EnvValidation"));
const pgp = (0, pg_promise_1.default)();
exports.db = pgp({ connectionString: EnvValidation_1.default.DB_CONNECTION_STRING });
//# sourceMappingURL=PgConfig.js.map