const fs = require("fs");
const file = "./sample-files/3.txt";
const content = fs.readFileSync(file, "utf-8");

let lines = 0;

const line = content.split("\n").length - 1;
lines += line;
console.log(lines, file);
