import { useState } from 'react'
import { useSelector } from 'react-redux';
import SecondComponent from './SecondComponent';

function FirstComponent(){
    let [a,setA]=useState(100)
    let n= useSelector(gs=>gs.n)
    let name= useSelector(gs=>gs.name)

    return(
        <div>
            <h3>This is First Component in Reducer Store</h3>
            <p>local state variable is <b>{a}</b> <br/>
             global state variable is <b>{n}</b> <br/>
            the name in global state variable is <b>{name}</b>
            </p>
            <SecondComponent eid={a}/>
        </div>
    )
}
export default FirstComponent;