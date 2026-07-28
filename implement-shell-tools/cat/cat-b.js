const fs = require("fs");
const args = process.argv.slice(2);

const flag = args[0];
const file = args[1];

const content = fs.readFileSync(file, "utf-8");

let count = 1;
const numberLines = content.split("\n").map((line) => {
  if (line.trim() !== "") {
    return `${count++} ${line.trim()}`;
  }
  return "";
});
process.stdout.write(numberLines.join("\n"));
