const fs = require("fs");
const filePath = "./sample-files/1.txt";
const content = fs.readFileSync(filePath, "utf-8");

const lineNumber = content.split("\n").map((line, index) => {
  return `${index + 1} ${line}`;
});
process.stdout.write(lineNumber.join("\n"));
