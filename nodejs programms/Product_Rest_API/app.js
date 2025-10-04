let express = require("express")
let app = express()
const PORT = 3000

app.use(express.json())

let products = [
    {pid:100,pname:"TV",price:15000},
    {pid:101,pname:"Washing machine",price:35000},
    {pid:102,pname:"laptop",price:55000},
    {pid:103,pname:"monitor",price:13000},
    {pid:104,pname:"mobile",price:25000}
]

//http://localhost:3000
app.get("/products",(req,res)=>{
    res.json(products)
})

//http://localhost:3000/findProductUsingQueryParam?pid=100
app.get("/findProductUsingQueryParam",(req,res)=> {
let product_id = eval(req.query.pid)
let result = products.find(product=>product.pid===product_id)
if (result==undefined){
    res.send("product not found")
}else{
    res.json(result)
}
})

//http://localhost:3000/findProductUsingPathParam/100
app.get("/findProductUsingPathParam/:pid",(req,res)=> {
let product_id = eval(req.params.pid)
let result = products.find(product=>product.pid===product_id)
if (result==undefined){
    res.send("product not found")
}else{
    res.json(result)
}
})

//http://localhost:3000/storeProduct
app.post("/storeProduct",(req,res)=>{
    let product = req.body
    let result = products.find(p=>p.pid===product.pid)
    if(result==undefined){
        products.push(product)
        res.send("product stored successfully")
    }else{
        res.send("product already present")
    }
})

//http://localhost:3000/updateProductPrice
app.put("/updateProductPrice",(req,res)=>{
    let product = req.body;
    let index = products.findIndex(p=>p.pid===product.pid)
    if (index==-1){
        res.send("product not found")
    }else{
        products[index].price = product.price;
        res.send("Products price updated")
    }
})

//http://localhost:3000/deleteProduct/100
app.delete("/deleteProduct/:pid",(req,res)=>{
    let pid = eval(req.params.pid)
    let index = products.findIndex(p=>p.pid===pid)
    if(index===-1){
        res.send("product not present")
    }else{
        products.splice(index,1)
        res.send("product details deleted successfully")
    }
})

app.listen(PORT,console.log(`server running on port number ${PORT}`))