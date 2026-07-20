const fs = require("fs");
const path = "./sample-files";
const directories = fs.readdirSync(path);

directories.forEach((file) => {
  if (file === "dir") {
    console.log("dir:");
    console.log(fs.readdirSync("./sample-files/dir").join(" "));
  } else {
    console.log(file);
  }
});
