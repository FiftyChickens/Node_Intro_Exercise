const fs = require("fs");

function cat(path) {
  fs.readFile(path, "utf8", function (err, data) {
    if (err) {
      console.log(`Error reading ${path}: ${err}`);
    } else {
      console.log(data);
    }
  });
}

cat("./huh.txt");
