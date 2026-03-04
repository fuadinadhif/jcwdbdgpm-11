// import fs from "fs";
// import fs from "fs/promises";
// import fs from "node:fs";
import fs from "node:fs/promises";

import path from "node:path";

async function createFile() {
  await fs.writeFile("./testing.txt", "Hello");
}

// createFile();

async function getFileContent() {
  const result = await fs.readFile("./testing.txt", "utf-8");
  console.log(result);
}

getFileContent();

console.log(path.extname("./testing.txt"));
