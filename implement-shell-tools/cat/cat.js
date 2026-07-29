const fs = require("fs");
const filePath = "./sample-files/1.txt";

const content = fs.readdirSync(filePath, "utf-8");

process.stdout.write(content);
