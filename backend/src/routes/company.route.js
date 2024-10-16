import { Router } from "express";
import {
  getCompany,
  getCompanyById,
  registerCompany,
  updateCompany,
} from "../controllers/company.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(authenticate, registerCompany);
router.route("/get").get(authenticate, getCompany);
router.route("/get/:id").get(authenticate, getCompanyById);
router.route("/update/:id").put(authenticate, updateCompany);

export default router;
