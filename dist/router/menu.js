"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const menu_1 = require("../controllers/menu");
exports.default = (router) => {
    router.get('/menu', menu_1.menuItems);
    router.post('/menu/item', menu_1.menuItem);
};
//# sourceMappingURL=menu.js.map