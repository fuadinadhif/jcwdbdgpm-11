import express from "express";
import {
  adminOnlyController,
  loggedInOnlyController,
  userOnlyController,
} from "../controllers/protected.controller";

const router = express.Router();

router.route("/loggedIn").get(loggedInOnlyController);
router.route("/admin").get(adminOnlyController);
router.route("/user").get(userOnlyController);

export default router;
