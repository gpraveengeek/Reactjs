import MyContext from "./MyContext";
import {useContext} from "react";
function Child10(){
    let MyContent= useContext(MyContext)

    return(
        <div>
            <h3>this is Child10 component</h3>
            <p>counter value in Child1 component is {MyContent}</p>
        </div>
    )
}
export default Child10;