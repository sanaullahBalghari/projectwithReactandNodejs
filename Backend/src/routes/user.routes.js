import { Router } from "express";
import { loginUser, logoutuser, registeruser } from "../controllers/auth.controller.js";


const router=Router()

router.route('/register').post(registeruser)
router.route('/login').post(loginUser)
router.route('/logout').post(logoutuser)
export default router