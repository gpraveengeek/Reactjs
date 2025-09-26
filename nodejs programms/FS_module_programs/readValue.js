let obj = require("readline");
let readline = obj.createInterface({
    input: process.stdin,
    output: process.stdout
})
readline.question("enter your name: ",(data)=>{
console.log("your name is: "+data)
readline.close()
})