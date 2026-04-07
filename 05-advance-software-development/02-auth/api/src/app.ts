import "dotenv/config";

import express, { type Application } from "express";

import authRoutes from "./routes/auth.route";

const app: Application = express();

app.use(express.json());

app.use("/", authRoutes);

const PORT: number = 8000;
app.listen(PORT, () => console.info(`Server is listening on port: ${PORT}`));
