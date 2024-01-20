"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const compression_1 = __importDefault(require("compression"));
const index_1 = __importDefault(require("./router/index"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    credentials: false,
}));
app.use(body_parser_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use((0, compression_1.default)());
const server = http_1.default.createServer(app);
const PORT = process.env.PORT || 5001;
server.listen(PORT, () => {
    console.log('app running on http://localhost:' + PORT);
});
app.use('/', (0, index_1.default)());
//# sourceMappingURL=index.js.map