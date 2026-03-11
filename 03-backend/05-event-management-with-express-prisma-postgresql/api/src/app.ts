import "dotenv/config";

import express from "express";
import type { Application, Request, Response } from "express";

import { prisma } from "./lib/prisma.js";

import cors from "cors";

const app: Application = express();

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

/* ---------------------------- CHECK API STATUS ---------------------------- */
app.get("/api/status", async (req: Request, res: Response) => {
  res
    .status(200)
    .json({ message: "API is running!", uptime: process.uptime() });
});

/* ------------------------------ CREATE EVENT ------------------------------ */
app.post("/api/data/events", async (req: Request, res: Response) => {
  console.log(req.body);

  const eventData = req.body;

  const result = await prisma.event.create({
    data: {
      title: eventData.title,
      price: eventData.price,
      description: eventData.description,
    },
  });

  res.status(201).json({ message: "Event created", data: result });
});

const PORT: number = 8000;
app.listen(PORT, () => console.info(`Server is listening on port: ${PORT}`));
