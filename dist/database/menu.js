"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.item = exports.menu = void 0;
const PgConfig_1 = require("../util/PgConfig");
const menu = async () => {
    try {
        return await PgConfig_1.db.manyOrNone('select MENU.ID,TITLE,INGREDIENTS,ITEM_IMAGE,ACTIVE,ITEM_PRICE,MENU_SIZE from MENU join MENU_VARIETY on MENU.ID = MENU_VARIETY.MENU_ID where MENU_SIZE = $1 or MENU_SIZE = $2', ['Small', '']);
    }
    catch (error) {
        console.log(error);
    }
};
exports.menu = menu;
const item = async (id) => {
    try {
        const extrasId = await PgConfig_1.db.manyOrNone('select * from EXTRAS where MENU_ID = $1', [id]);
        if (extrasId.length > 0) {
            return await PgConfig_1.db.manyOrNone('select MENU.ID,MENU.TITLE,DRINK_INCLUDED,ACTIVE,MENU_SIZE,ITEM_PRICE,EXTRAS.TITLE as NAME,PRICE from MENU_VARIETY join MENU on MENU_VARIETY.MENU_ID = MENU.ID join EXTRAS on MENU.ID = EXTRAS.MENU_ID where MENU.ID = $1', [id]);
        }
        else {
            return await PgConfig_1.db.manyOrNone('select MENU.ID,MENU.TITLE,DRINK_INCLUDED,ACTIVE,MENU_SIZE,ITEM_PRICE from MENU_VARIETY join MENU on MENU_VARIETY.MENU_ID = MENU.ID WHERE MENU.ID = $1', [id]);
        }
    }
    catch (error) {
        console.log(error);
    }
};
exports.item = item;
//# sourceMappingURL=menu.js.map