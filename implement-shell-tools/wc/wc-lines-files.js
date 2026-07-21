const fs = require("fs");
const folder = "./sample-files";
const filesPath = fs.readdirSync(folder);

let totalLines = 0;

filesPath.forEach((file) => {
  const path = `${folder}/${file}`;
  const files = fs.readFileSync(path, "utf-8");

  const lines = files.split("\n").length - 1;
  console.log(lines, path);

  totalLines += lines;
});
console.log(totalLines, "total");
