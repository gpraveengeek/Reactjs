var fs = require("fs")
var data = "data storing in synchronously"

fs.writeFileSync("sample1.txt",data);
console.log("data stored successfully")
console.log("1st task completed")
console.log("2nd task completed")
console.log("3rd task completed")