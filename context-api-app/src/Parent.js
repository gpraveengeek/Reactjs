import {useState} from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
import Child3 from "./Child3";
import MyContext from "./MyContext"
function Parent(){

    let[counter,setCounter]=useState("praveen@gmail.com")

    return(
        <MyContext.Provider value={counter}>
        <div>
            <h1>this is Parent component</h1>
            <p>Counter value of parent component is {counter}</p>
            <Child1></Child1>
            <Child2></Child2>
            <Child3></Child3>
        </div>
        </MyContext.Provider>
    )
}
export default Parent;