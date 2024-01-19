"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const envalid_1 = require("envalid");
const envalid_2 = require("envalid");
exports.default = (0, envalid_1.cleanEnv)(process.env, {
    DB_CONNECTION_STRING: (0, envalid_2.str)(),
    PORT: (0, envalid_2.port)(),
});
//# sourceMappingURL=EnvValidation.js.map