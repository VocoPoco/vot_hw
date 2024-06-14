import { Router } from "express";
import passport from "../auth/auth";
import { register, login } from '../controllers/user_controller';

const router = Router();

router.post('/register', register);
router.post('/login', login)

export default router;