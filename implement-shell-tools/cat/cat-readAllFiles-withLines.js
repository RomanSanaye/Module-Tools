const fs = require("fs");

const args = process.argv;

const flag = args[2];
const filePaths = args.slice(3);

let lineNumber = 1;

const content = filePaths
  .map((file) => fs.readFileSync(file, "utf-8"))
  .join("");

const lines = content.split(/\r?\n/);
if (lines[lines.length - 1] === "") {
  lines.pop();
}

const numberedLines = lines.map((line) => {
  return `${lineNumber++}  ${line}`;
});

process.stdout.write(numberedLines.join("\n"));
