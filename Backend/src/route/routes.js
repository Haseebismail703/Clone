import express from "express";
import { signupUser, signinUser, adminLogin } from '../controler/authController.js'
const router = express.Router();
// publich route
router.post('/signinUser', signinUser);
router.post('/signupUser', signupUser);
router.post('/adminLogin', adminLogin);

export default router
