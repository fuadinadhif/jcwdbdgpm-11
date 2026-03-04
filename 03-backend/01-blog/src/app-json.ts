import express from "express";
import fs from "fs/promises";

// Fungsi untuk mengambil data dari file system
async function getArticles(): Promise<{ id: number; title: string }[]> {
  return JSON.parse(await fs.readFile("./data/articles.json", "utf-8"));
}

async function saveArticles(latestArticles: Record<string, any>[]) {
  await fs.writeFile(
    "./data/articles.json",
    JSON.stringify(latestArticles, null, 2),
  );
}

// Pembuatan server
const app = express();

// Middleware (kode yang memotong dan memanipulasi request/response)
app.use(express.json());

/* ------------------------------- GET STATUS ------------------------------- */
// Route handler
// 1. app
// 2. method: GET/POST/PUT/DELETE
// 3. url/endpoint/route: '/api/status', '/api/orders', '/orders'
// 4. callback: (req, res) => {}
// req -> request:
// - req.body
// - req.params
// - req.query
// - req.file
// - req.files
// res -> response:
// - res.status()
// - res.json()
app.get("/api/status", (req, res) => {
  res
    .status(200)
    .json({ message: "API is running!", uptime: process.uptime() });
});

/* --------------------------------- GET ALL -------------------------------- */
app.get("/api/articles", async (req, res) => {
  const articles = await getArticles();

  res.status(200).json({ data: articles });
});

/* ---------------------------- GET SINGLE BY ID ---------------------------- */
app.get("/api/articles/:objectId", async (req, res) => {
  const objectId = Number(req.params.objectId);

  const articles = await getArticles();
  const filteredArticle = articles.find(
    (element: { id: number }) => element.id === objectId,
  );

  res.status(200).json({ data: filteredArticle });
});

/* --------------------------------- CREATE --------------------------------- */
app.post("/api/articles", async (req, res) => {
  const userInput = req.body;

  const previousArticles = await getArticles();
  const newArticleId =
    previousArticles[previousArticles.length - 1]?.id! + 1 || 1;
  const newArticle = { ...userInput, id: newArticleId, createdAt: new Date() };
  const updatedArticles = [...previousArticles, newArticle];

  await saveArticles(updatedArticles);

  res.status(201).json({ message: "Article created", data: newArticle });
});

/* --------------------------------- UPDATE --------------------------------- */
app.put("/api/articles/:objectId", async (req, res) => {
  // 1. Ambil data terbaru
  const userInput = req.body;

  // 2. Ambil data yang mau diupdate
  const objectId = +req.params.objectId;
  const previousArticles = await getArticles();
  const targetIndex = previousArticles.findIndex((article) => {
    return article.id === objectId;
  });

  // 3. Validasi keberadaan data
  if (targetIndex === -1) {
    return res.status(404).json({ message: "Article not found" });
  }

  // 4. Update data
  const updatedArticle = { ...previousArticles[targetIndex], ...userInput };
  previousArticles[targetIndex] = updatedArticle;

  // 5. Simpan data terbaru
  await saveArticles(previousArticles);

  // 6. Kirim response sukses ke frontend
  res.status(200).json({ message: "Article updated", data: updatedArticle });
});

/* --------------------------------- DELETE --------------------------------- */
app.delete("/api/articles/:objectId", async (req, res) => {
  // 1. Ambil objectid dari request params
  const objectId = +req.params.objectId;

  // 2. Ambil data article yang lama
  const previousArticles = await getArticles();

  // 3. Filter article yang mau didelete dan yang tidak
  const latestArticles = previousArticles.filter(
    (article) => article.id !== objectId,
  );

  // 4. Simpan latest articles
  await saveArticles(latestArticles);

  // 5. Kirim response sukses
  res.status(200).json({ message: "Article deleted" });
});

// Server port
const PORT = 8000;

// Menyalakan server
app.listen(PORT, () => console.info(`Server is listening on port: ${PORT}`));
