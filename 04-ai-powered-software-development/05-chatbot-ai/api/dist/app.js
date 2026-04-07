import express from "express";
import cors from "cors";
const app = express();
/* ------------------------------- Middlewares ------------------------------ */
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
/* ----------------------------- Route Handlers ----------------------------- */
app.get("/api/status", (req, res) => {
    res
        .status(200)
        .json({ message: "API is running!", uptime: process.uptime() });
});
const PORT = 8000;
app.listen(PORT, () => console.info(`Server is listening on port: ${PORT}`));
