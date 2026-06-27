import express from 'express';
import userRoutes from './user/user.route.js';
import authRoutes from './user/auth.route.js'
const router=express.Router();

router.use('/user',userRoutes);
router.use('/auth',authRoutes);

export default router;