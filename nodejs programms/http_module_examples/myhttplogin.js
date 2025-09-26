let http = require("http")
let fs = require("fs")
let url = require("url")

let server = http.createServer((request,response)=>{
    let urlRef = url.parse(request.url,true);
    response.writeHead(200,{"content-Type":"text/html"});

    if(urlRef.pathname == "/login"){
        let loginPage=fs.readFileSync("login.html");
        response.write(loginPage);
    }else{
        (urlRef.pathname == "/about_us")
        let aboutPage=fs.readFileSync("about.html");
        response.write(aboutPage);
    }

    response.end();
})

server.listen(8080, ()=>console.log("Server is running on port number 8080"));