var fs = require("fs");
console.log("file loaded");
let data = "my name is praveen gunnala and saving this sample file using fs module";

fs.writeFile("sample.txt",data,(error)=>{
    if(error){
        console.log("Error occured",error);
    }else{
        console.log("file written successfully");
    }
});
console.log("1st task done")
console.log("2nd task done")
console.log("3rd task done")