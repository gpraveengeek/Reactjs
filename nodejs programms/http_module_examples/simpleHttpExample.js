let http = require("http");

let server = http.createServer((request,response)=>{
    response.end("welcome to node js http module")
})

server.listen(3597,()=>console.log("http server is running on port number 3597"))