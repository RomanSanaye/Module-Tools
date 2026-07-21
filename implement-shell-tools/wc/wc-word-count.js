const fs = require("fs");
const file = "./sample-files/3.txt";
const content = fs.readFileSync(file, "utf-8");

const word = content.split(/\s+/).length - 1;

console.log(word, file);
