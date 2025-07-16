import { useState } from "react";
import PorderList from './PorderList'
import PunOrderList from './PunOrderList'

function Products(){
    let [pnames,setPNames]=useState([]);
    let [pname,setPName]=useState("");
    let AddProductNames =(event)=>{
    setPNames([...pnames,pname])
    setPName("")
    }
    return(
        <div>
            <h2>Products Order List</h2>
            <input type="text" placeholder="Add Name" value={pname} name="pname"
            onChange={(event)=>setPName(event.target.value)}/>
            <input type="button" value="Add Names" onClick={AddProductNames}/>
            <hr/>
            <PorderList products={pnames}></PorderList>
            <hr/>
            <PunOrderList products={pnames}></PunOrderList>
        </div>
    )

}
export default Products;