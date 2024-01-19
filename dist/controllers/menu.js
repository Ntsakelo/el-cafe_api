"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuItem = exports.menuItems = void 0;
const menu_1 = require("../database/menu");
const menuItems = async (req, res) => {
    try {
        const items = await (0, menu_1.menu)();
        items ? res.status(200).json(items) : res.status(400).json({
            status: 'something went wrong'
        });
    }
    catch (error) {
        console.log(error);
        res.status(400).json({
            status: 'data not found'
        });
    }
};
exports.menuItems = menuItems;
const menuItem = async (req, res) => {
    try {
        const { id } = req.body;
        const menuItem = await (0, menu_1.item)(id);
        let title = "";
        const extras = [];
        const sizes = [];
        const itemData = {
            title: title,
            extras: extras,
            sizes: sizes
        };
        if (menuItem) {
            title = menuItem[0].title;
            menuItem.forEach(item => {
                if (item.name) {
                    extras.push({ name: item.name, price: item.price });
                }
            });
            menuItem.forEach(item => {
                if (item.menu_size) {
                    sizes.push({ item_price: item.item_price, menu_size: item.menu_size });
                }
            });
        }
        menuItem ? res.status(200).json(itemData) : res.status(400).json({
            status: "Something went wrong"
        });
    }
    catch (error) {
        console.log(error);
        res.status(400).json({
            status: 'data not found'
        });
    }
};
exports.menuItem = menuItem;
//# sourceMappingURL=menu.js.map