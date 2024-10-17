import express from "express";
import {
  getAdminJobs,
  getAllJobs,
  getJobById,
  postJob,
} from "../controllers/job.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.route("/post").post(authenticate, postJob);
router.route("/get").get(authenticate, getAllJobs);
router.route("/getadminjobs").get(authenticate, getAdminJobs);
router.route("/get/:id").get(authenticate, getJobById);

export default router;
