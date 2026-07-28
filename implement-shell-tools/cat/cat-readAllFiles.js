const fs = require("fs");
const args = process.argv.slice(2);

const fileContents = args.map((file) => {
  return fs.readFileSync(file, "utf-8");
});
process.stdout.write(fileContents.join(""));
