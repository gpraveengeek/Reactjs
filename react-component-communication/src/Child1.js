import {useState} from "react"
function Child1(props){
    
let [user1,setUser1]=useState("praveen(child-1)@gmail.com")
    return(
        <div style={{"backgroundColor":"yellow", "height":"150px"}}>
            <h3>this is child1 Component</h3>
            <p>this is viewing from child1 <b>{props.name}</b></p>
            <p>this is viewing from child1 <b>(local)</b> <b>{user1}</b></p>
            <p>this is viewing from child1, of child2 data <b>{props.child2Value}</b></p>
            {props.handleUser1(user1)}
        </div>
    )
}
export default Child1;