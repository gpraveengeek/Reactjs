import Child4 from "./Child4";
import Child5 from "./Child5";
import MyContext from "./MyContext";
import {useContext} from "react";
function Child1(){

    let Praveen= useContext(MyContext)   // get the context reference using useContext hook

    return(
        <div>
            <h3>this is Child1 component</h3>
            <p>counter value in Child1 component is {Praveen}</p>
            <Child4></Child4>
            <Child5></Child5>
        </div>
    )
}
export default Child1;