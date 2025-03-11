const path = require("path")

console.log("Absolute Directory path:", path.dirname(__filename));
console.log("Absolute File path:", path.basename(__filename));
console.log("Extension of the file:", path.extname(__filename));

console.log("Joined path: ", path.join("user", "documents", "node"));

console.log("Normalized path:", path.normalize("/user/documents/../node/module"))
