var fs = require("fs");

var data = "Third Information"
fs.appendFile("sample2.txt",data,(error)=>{
    if (error) throw error;
    console.log("file append is successfully")
});
console.log("1st task completed");
console.log("2nd task completed");
console.log("3rd task completed");