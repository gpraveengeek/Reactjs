let jwt = require("jsonwebtoken")

let key1 = "myKey1"

let uniquedata1 = {"emailid":"pr@123"}
let token1 = jwt.sign(uniquedata1,key1,{expiresIn:"10s"})

let key2 = "myKey2"

let uniquedata2 = {"emailid":"gunn@123"}
let token2 = jwt.sign(uniquedata2,key2)

console.log(token1)
console.log("---------------")
console.log(token2)

console.log("Verify Token")
console.log("First Token")

setTimeout(()=>{
    try{
        let decodeToken = jwt.verify(token1,key1)
        console.log(decodeToken)
    }catch(error){
        console.log(error.message)
    }
},12000);