"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
require("dotenv/config");
const pg_promise_1 = __importDefault(require("pg-promise"));
const pgp = (0, pg_promise_1.default)();
exports.db = pgp('postgres://el_cafe_user:71K6YOAjtjPhLxDgyYcBSYwdCADpgsLX@dpg-cmlf40v109ks7391qpag-a.oregon-postgres.render.com/el_cafe?ssl=true');
//# sourceMappingURL=PgConfig.js.map