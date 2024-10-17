import express from "express";
import {
  applyJob,
  getApplicants,
  getAppliedJobs,
  updateStatus,
} from "../controllers/application.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.route("/apply/:id").get(authenticate, applyJob);
router.route("/get").get(authenticate, getAppliedJobs);
router.route("/:id/applicants").get(authenticate, getApplicants);
router.route("/status/:id/update").post(authenticate, updateStatus);

export default router;
