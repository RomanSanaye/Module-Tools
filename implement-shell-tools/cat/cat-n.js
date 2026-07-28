const fs = require("fs");
const args = process.argv.slice(2);

const flag = args[0];
const filePath = args[1];

const content = fs.readFileSync(filePath, "utf-8");

const lineNumber = content.split("\n").map((line, index) => {
  return `${index + 1} ${line}`;
});
process.stdout.write(lineNumber.join("\n"));
