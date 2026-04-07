import { Router } from "express";
import { getStatus } from "../controllers/statusController.js";
import { sendMessage } from "../controllers/chatController.js";

const router = Router();

// Status route
router.get("/status", getStatus);

// Chat route
router.post("/chat", sendMessage);

export default router;
