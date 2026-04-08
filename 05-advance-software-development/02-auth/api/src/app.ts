import "dotenv/config";

import express, { type Application } from "express";

import authenticationRoutes from "./routes/auth.route";
import protectedRoutes from "./routes/protected.route";
import publicRoutes from "./routes/public.route";

const app: Application = express();

// global middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log("Hello everybody!");
  next();
});

app.use("/api/authentication", authenticationRoutes);
app.use(
  "/api/authorization/protected",
  (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader)
      return res.status(401).json({ message: "Unauthenticated" });

    next();
  },
  protectedRoutes,
);
app.use("/api/authorization/public", publicRoutes);

const PORT: number = 8000;
app.listen(PORT, () => console.info(`Server is listening on port: ${PORT}`));
