// Power shell commands =======> Vs <===== Js codes

// wc sample-files/* 

const fs = require("fs");
const filePath = "./sample-files";
const contents = fs.readdirSync(filePath);

let totalLines = 0;
let totalWords = 0;
let totalCharacters = 0;

contents.forEach((file) => {
  const path = `${filePath}/${file}`;

  const files = fs.readFileSync(path, "utf-8");

  const lines = files.split("\n").length - 1;
  const words = files.trim().split(/\s+/).length;
  const chars = files.length;

  console.log(lines, words, chars, path);

  totalLines += lines;
  totalWords += words;
  totalCharacters += chars;
});
console.log(totalLines, totalWords, totalCharacters, "total");
