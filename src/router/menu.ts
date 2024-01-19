import { Router } from "express";

const router = Router();

import { menuItems,menuItem } from "../controllers/menu";

export default (router:Router) => {
      router.get('/menu', menuItems);
      router.post('/menu/item', menuItem);
}