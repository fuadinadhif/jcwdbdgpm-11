import "dotenv/config";

import express, { type Application } from "express";

import authenticationRoutes from "./routes/auth.route";
import protectedRoutes from "./routes/protected.route";
import publicRoutes from "./routes/public.route";

import { verifyToken } from "./middlewares/auth.middleware";

const app: Application = express();

// global middlewares
app.use(express.json());
app.use((req, res, next) => {
  console.log("Hello everybody!");
  next();
});

app.use("/api/authentication", authenticationRoutes);
app.use("/api/authorization/protected", verifyToken, protectedRoutes);
app.use("/api/authorization/public", publicRoutes);

const PORT: number = 8000;
app.listen(PORT, () => console.info(`Server is listening on port: ${PORT}`));
