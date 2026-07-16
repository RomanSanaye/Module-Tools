const fs = require("fs");
const filePath = "./sample-files/3.txt";
const content = fs.readFileSync(filePath, "utf-8");

let count = 1;
const numberLines = content.split("\n").map((line) => {
  if (line.trim() !== "") {
    return `${count++} ${line.trim()}`;
  }
  return "";
});
process.stdout.write(numberLines.join("\n"));
