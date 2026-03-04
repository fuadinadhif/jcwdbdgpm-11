import http from "http";
import fs from "fs/promises";
const app = http.createServer(async (req, res) => {
    // console.log(req.method);
    // console.log(req.url);
    const method = req.method;
    const url = req.url;
    if (method === "GET" && url === "/api/status") {
        res.writeHead(200); // Untuk menulis response header
        res.write(JSON.stringify({ message: "API is running!", uptime: process.uptime() })); // Untuk menulis response body
        res.end(); // Mengakhiri response
    }
    else if (method === "GET" && url === "/api/articles") {
        const articles = await fs.readFile("./data/articles.json");
        res.writeHead(200);
        res.write(articles);
        res.end();
    }
});
const PORT = 8000;
app.listen(PORT, () => {
    console.info(`Server is listening on port: ${PORT}`);
});
/*
Check status: GET /api/status ✅
Get all articles: GET /api/articles ✅
*/
//# sourceMappingURL=app-node.js.map