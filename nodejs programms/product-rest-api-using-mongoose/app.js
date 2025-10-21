let express = require("express")
let app = express()
let config = require("dotenv")
config.configDotenv();
let connectDB = require("./config/dbConfig.js")
let productRouter = require("./router/productRouter.js")

let PORT = process.env.PORT;

connectDB();

app.use("/product",productRouter)

app.listen(PORT,()=>console.log(`server is running on port number ${PORT}`));