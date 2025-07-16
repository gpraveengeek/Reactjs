import axios from "axios";
import { useEffect, useState } from "react";
function ProductsOperation() {
    let URL = "http://localhost:3000/products";
    let [product,setProduct]=useState({"Pname":"","Price":""});
    let [products,setProducts]=useState([]);
    let [msg,setMsg]=useState("");
    let [buttonValue,setButtonValue]=useState("storeProduct")
useEffect(()=>{
    axios.get(URL).then(result=>setProducts(result.data)).catch(error=>console.log(error))
},[msg])

let storeProduct = (event)=> {event.preventDefault();
    console.log(product)
    axios.post(URL,product).then(result=>{setMsg(result.statusText)}).catch(error=>console.log(error))
    setMsg("")
    setProduct({"Pname":"","Price":""})
}
let deleteProduct = (event,id)=>{
    alert("ID is deleted "+id)
    setMsg("")
    axios.delete(URL+"/"+id).then(result=>{setMsg(result.statusText)}).catch(error=>console.log(error))
}
let updateProducts = (event,updateProduct)=>{
    console.log(updateProduct)
    setProduct(updateProduct)
    setButtonValue("update product")
}
return(
    <div>
        <span style={{"color":"red"}}>{msg}</span>
        <h3>Product Management System</h3>
            <form onSubmit={storeProduct}>
                <label>Pname:</label>
                <input type="text" vlaue={product.Pname} name="Pname" 
                onChange={(event)=>setProduct({...product,"Pname":event.target.value})}/><br/>

                <label>Price:</label>
                <input type="number" vlaue={product.Price} name="Price" 
                onChange={(event)=>setProduct({...product,"Price":event.target.value})}/><br/>
            
                <input type="submit" value={buttonValue}/><br/>
                <input type="reset" value="reset"/>
            </form>
        <hr/>
        <table border="1">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Pname</th>
                    <th>Price</th>
                    <th>Remove</th>
                    <th>Update</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map(products=>
                        <tr key={products.id}>
                            <td>{products.id}</td>
                            <td>{products.Pname}</td>
                            <td>{products.Price}</td>
                            <td><input type="button" value="Remove" 
                            onClick={(event)=> deleteProduct(event,products.id)}></input></td>
                            <td><input type="button" value="Update" 
                            onClick={(event)=> updateProducts(event,products)}></input></td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
)
}
export default ProductsOperation;