const fs = require("fs");
const folder = "./sample-files";
const content = fs.readdirSync(folder);

let totalLines = 0;
let totalWords = 0;
content.forEach((file) => {
  const path = `${folder}/${file}`;
  const filePath = fs.readFileSync(path, "utf-8");

  const line = filePath.split("\n").length - 1;
  const word = filePath.split(/\s+/).length - 1;

  totalLines += line;
  totalWords += word;
  console.log(line, word, path);
});

console.log(totalLines, totalWords, "total");
