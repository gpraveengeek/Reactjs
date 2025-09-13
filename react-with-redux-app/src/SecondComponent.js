import { useState } from "react"
import { useSelector } from "react-redux"
import IncrementalComponent from './IncrementalComponent'
import DecrementalComponent from "./DecrementalComponent"
import DynamicIncrement from "./DynamicIncrement"

function SecondComponent(props){
    let [b,setB]=useState("hi")
    let name= useSelector(gs=>gs.name)
    let n= useSelector(gs=>gs.n)

    return(
        <div>
            <h3>this is redux Second Component</h3>
            <p>{b} my name is {name}</p><br/>
            <p>using props showing First Component local variable in SecondComponent <b>{props.eid}</b></p>
            <p>the number is <b>{n}</b></p>
            <IncrementalComponent></IncrementalComponent>
            <DecrementalComponent></DecrementalComponent>
            <DynamicIncrement></DynamicIncrement>
        </div>
    )
}
export default SecondComponent;