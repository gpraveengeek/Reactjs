import { useState } from "react";
import { useDispatch } from "react-redux";

function DynamicIncrement(){

    let[num,setNum]=useState(0);
    let dispatch=useDispatch()
    
    let handleIncrement=()=>{
        dispatch({type:"DYNAMIC_INCREMENT", payload:num})
    }

    return(
        <div>
            <h2>DynamicIncrement</h2>
            <input type="number" value={num} onChange={(e)=>setNum(eval(e.target.value))}/>
            <input type="button" value="DynamicIncrement" onClick={handleIncrement}/>
        </div>
    )
}
export default DynamicIncrement;