import { useState } from "react";
import axios from "axios";

function Recepies(){

let URL = "https://dummyjson.com/recipes";
let [recipe,setRecepie]=useState([]);
let loadRecepies=()=>{
    axios.get(URL).then(result=>setRecepie(result.data.recipes)).catch(error=>console.log(error))
}

    return(
        <div>
            {loadRecepies()}
            <h2>Recepies using axios</h2>
            <hr/>
            {
                recipe.map(r=>
                <p key={r.id}><b>{r.id}</b>. <b>{r.name}</b>--- {r.ingredients} <b>preptime:</b> {r.prepTimeMinutes} <b>cooktime:</b> {r.cookTimeMinutes} rating: <b>{r.rating}</b> </p>
                )
            }
        </div>
    )
}

export default Recepies;