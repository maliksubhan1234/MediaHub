import express from "express";
import { login, register } from "../../controllers/auth.controller.js";
import { upload } from "../../middleware/upload.middleware.js";
const router = express.Router();

router.post("/register", upload.single("avtar"), register);
router.post("/login", login);

export default router;
