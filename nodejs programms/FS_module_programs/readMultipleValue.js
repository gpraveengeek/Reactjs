let obj = require("readline");
let readline = obj.createInterface({
    input: process.stdin,
    output: process.stdout
})
readline.question("enter your id: ",(id)=>{
    readline.question("enter your fname: ",(fname)=>{
        readline.question("enter your age: ",(age)=>{
            console.log("your id is "+id)
            console.log("your fname is "+fname)
            console.log("your age is "+age)
            readline.close()
})
})
})