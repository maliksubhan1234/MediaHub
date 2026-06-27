import express from "express";
import {
  deleteUser,
  getUser,
  updateUser,
} from "../../controllers/user.controller.js";
import { authroizedRoles } from "../../middleware/role.middleware.js";
import { tokenVerification } from "../../middleware/auth.middleware.js";
const router = express.Router();

router.get(
  "/get-user/:id",
  tokenVerification,
  authroizedRoles("admin", "moderator", "user"),
  getUser,
);
router.delete(
  "/delete-user/:id",
  tokenVerification,
  authroizedRoles("admin"),
  deleteUser,
);
router.put(
  "/update-user/:id",
  tokenVerification,
  authroizedRoles("admin", "moderator"),
  updateUser,
);

export default router;
