import { Router } from "express"
import menu from "../router/menu";

const router = Router();
export default ():Router => {
 menu(router)
 return router;
}