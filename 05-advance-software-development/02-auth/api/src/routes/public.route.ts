import express from "express";
import { publicController } from "../controllers/public.controller";

const router = express.Router();

router.route("/").get(publicController);

export default router;
