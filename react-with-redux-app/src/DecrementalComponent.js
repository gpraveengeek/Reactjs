import { useDispatch } from "react-redux";
function DecrementalComponent(){
    let dispatch = useDispatch();
    let handleDecrement=()=>{
        //dispatch({type:"Some Action"}); // it call reducer function with action type "Some Action"
        dispatch({type:"DECREMENT"}); // it will call reducer function with action type "INCREMENT"
    }

    return(
        <div>
            <h3>Decrement Component</h3>
            <input type="button" value="Decrement" onClick={handleDecrement}/>
        </div>
    )
}
export default DecrementalComponent;