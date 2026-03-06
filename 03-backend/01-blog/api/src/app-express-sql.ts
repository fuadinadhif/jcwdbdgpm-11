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
  console.log(req.query);

  const page = +req.query.page! || 1;
  const limit = +req.query.limit! || 3;
  const offset = limit * (page - 1);

  // 1. Ambil data paginasi
  const articles = await pool.query(
    `SELECT * FROM articles ORDER BY id LIMIT $1 OFFSET $2`,
    [limit, offset],
  );

  // 2. Ambil total data
  const countResult = await pool.query(`SELECT COUNT(*) FROM articles`);
  console.log(countResult);
  const totalArticle = +countResult.rows[0].count;
  const totalPage = Math.ceil(totalArticle / limit);

  res.status(200).json({ data: articles.rows, page, totalPage, totalArticle });
});

const PORT = 8000;
app.listen(PORT, () => console.info(`Server is listening on port: ${PORT}`));

/* ---------------------------------- NOTES --------------------------------- */
// http://localhost:8000/api/articles?page=2 -> endpoint
// http -> protocol
// localhost:8000 -> domain
// /api/articles/:id -> parameters | params
// ?page=2&limit=10 -> queries
