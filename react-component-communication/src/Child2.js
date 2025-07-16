import {useState} from "react"
function Child2(props){
    
let [user2,setUser2]=useState("pr(child-2)@gmail.com")
    return(
        <div style={{"backgroundColor":"red", "height":"150px"}}>
            <h3>this is child2 Component</h3>
            <p>this is viewing from child2 <b>{props.name}</b></p>
            <p>this is viewing from child2 <b>(local)</b> <b>{user2}</b></p>
            <p>this is viewing from child2, of child1 data <b>{props.child1Value}</b></p>
            {props.handleUser2(user2)}
        </div>
    )
}
export default Child2;