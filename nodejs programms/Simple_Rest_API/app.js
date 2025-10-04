let express = require("express")
let app = express();

let data = {
    message:"Welcome to Rest API",
    status:"Success"
}

app.get("/data/text",(req,res)=>{
    res.type("text/plain");
    res.send(`<div><h1>${data.status}</h1><p>${data.message}</p></div>`)
})

app.get("/data/html",(req,res)=>{
    res.type("text/html");
    res.send(`<div><h1>${data.status}</h1><p>${data.message}</p></div>`)
})

app.get("/data/xml",(req,res)=>{
    res.type("text/xml");
    res.send(`<div><h1>${data.status}</h1><p>${data.message}</p></div>`)
})

app.get("/data/json",(req,res)=>{
    res.send(data)
})


app.listen(3000,()=>console.log("server is running on port number 3000"))