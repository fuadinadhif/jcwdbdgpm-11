import "dotenv/config";

import express from "express";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "./generated/prisma/client.js";

const app = express();

/* -------------------------- Membuat prisma client ------------------------- */
const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});
const prisma = new PrismaClient({ adapter });

/* ------------------------------- Middlewares ------------------------------ */
app.use(express.json()); // middleware untuk mengambil data dari request client

/* ---------------------------- Get all articles ---------------------------- */
app.get("/api/articles", async (req, res) => {
  const page = +req.query.page! || 1;
  const limit = +req.query.limit! || 3;
  const skip = (page - 1) * limit;

  const articles = await prisma.article.findMany({
    skip,
    take: limit,
    include: {
      authors: { select: { name: true, email: true } },
      articleTags: true,
    },
  });

  const articleCount = await prisma.article.count();

  res.status(200).json({
    data: articles,
    page,
    totalArticles: articleCount,
    totalPages: Math.ceil(articleCount / limit),
  });
});

/* ----------------------------- Get all authors ---------------------------- */
app.get("/api/authors", async (req, res) => {
  const authors = await prisma.author.findMany({
    omit: { password: true },
    where: { deleted_at: null },
  });
  res.status(200).json({ data: authors });
});

/* ------------------------- Get single author by id ------------------------ */
app.get("/api/authors/:id", async (req, res) => {
  const id = +req.params.id;
  const author = await prisma.author.findUnique({
    where: { id, deleted_at: null },
  });
  res.status(200).json({ data: author });
});

/* ---------------------------- Create new author --------------------------- */
app.post("/api/authors", async (req, res) => {
  const userInput = req.body;

  if (!userInput.name)
    return res.status(400).json({ message: "Field name is missing" });
  if (!userInput.email)
    return res.status(400).json({ message: "Field email is missing" });
  if (!userInput.password)
    return res.status(400).json({ message: "Field password is missing" });

  const author = await prisma.author.create({ data: userInput });
  res.status(201).json({ message: "Author created", data: author });
});

/* --------------------------- Update author data --------------------------- */
app.put("/api/authors/:id", async (req, res) => {
  const userInput = req.body;
  const id = +req.params.id;
  const updatedAuthor = await prisma.author.update({
    where: { id },
    data: userInput,
  });
  res
    .status(200)
    .json({ message: `Author with id: ${id} updated`, data: updatedAuthor });
});

/* -------------------------- Delete single author -------------------------- */
// HARD
app.delete("/api/authors/:id", async (req, res) => {
  const id = +req.params.id;
  await prisma.author.delete({ where: { id } });
  res.status(200).json({ message: `Author with id: ${id} deleted` });
});

// SOFT
app.put("/api/authors/soft-delete/:id", async (req, res) => {
  const id = +req.params.id;
  await prisma.author.update({
    where: { id },
    data: { deleted_at: new Date() },
  });
  res.status(200).json({ message: `Author with id: ${id} (soft) deleted` });
});

/* --------------------------- Delete all authors --------------------------- */
// HARD
app.delete("/api/authors", async (req, res) => {
  await prisma.author.deleteMany();
  res.status(200).json({ message: "All authors deleted" });
});

// SOFT
app.put("/api/authors/soft-delete", async (req, res) => {
  await prisma.author.updateMany({
    data: { deleted_at: new Date() },
  });
  res.status(200).json({ message: `All authors (soft) deleted` });
});

const PORT = 8000;
app.listen(PORT, () => console.info(`Server is listening on port: ${PORT}`));
