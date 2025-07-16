import { useState } from 'react';
import Child1 from './Child1';
import Child2 from './Child2';
function Parent(){
    let [admin,setAdmin]=useState("admin@gmail.com")  //state variable local to parent component
    let [child1Data,setChild1Data]=useState("")       //to display the data in browser, (initially empty(""))
    let [child2Data,setChild2Data]=useState("")

    let functionUser1=(data)=>{
        // console.log("this is user1 "+data)
        setChild1Data(data)   //when the function call the value will set and display
    }

    let functionUser2=(data1)=>{
        setChild2Data(data1)
    }
    return(
        <div style={{"backgroundColor":"lightgreen", "height":"525px"}}>
            <h2 style={{"backgroundColor":"blue", "height":"35px"}}>this is Parent Component</h2>
            <p>hi this mail id is viewing from parent component is <b>(local)</b> <b>{admin}</b></p>
            <p>hi this mail id is viewing child1 component is <b>{child1Data}</b></p>   
            <Child1 name={admin} handleUser1={functionUser1} child2Value={child2Data}></Child1>
            <Child2 name={admin} handleUser2={functionUser2} child1Value={child1Data}></Child2>
            <p>hi this mail id is viewing from parent component is <b>(local)</b> <b>{admin}</b></p>
            <p>hi this mail id is viewing child2 component is <b>{child2Data}</b></p>
        </div>
    )
}
export default Parent;