import express from "express";
import { Pool } from "pg";

const app = express();

// setup database connection
const pool = new Pool({
  user: "postgres.mrzuqzoaxvsfxqpemxio",
  host: "aws-1-ap-northeast-1.pooler.supabase.com",
  database: "postgres",
  password: "purwadhika123",
  port: 5432,
});

/* --------------------------------- GET ALL -------------------------------- */
app.get("/api/articles", async (req, res) => {
  const articles = await pool.query(`SELECT * FROM articles`);
  res.status(200).json({ data: articles.rows });
});

const PORT = 8000;
app.listen(PORT, () => console.info(`Server is listening on port: ${PORT}`));
