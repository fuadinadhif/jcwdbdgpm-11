import express from "express";
import {
  adminOnlyController,
  loggedInOnlyController,
  customerOnlyController,
} from "../controllers/protected.controller";
import { roleGuard } from "../middlewares/auth.middleware";

const router = express.Router();

router.route("/loggedIn").get(loggedInOnlyController);
router.route("/admin").get(roleGuard("ADMIN"), adminOnlyController);
router.route("/customer").get(roleGuard("CUSTOMER"), customerOnlyController);

export default router;
