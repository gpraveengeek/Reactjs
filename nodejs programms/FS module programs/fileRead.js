var fs = require("fs")
fs.readFile("sample.txt",(error,data)=>{
    if(error){
        console.log("file is error",error)
    }else{
        // console.log(data)
        console.log(data.toString());
    }
});
console.log("1st task done")
console.log("2nd task done")
console.log("3rd task done")