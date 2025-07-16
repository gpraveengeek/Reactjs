import {useState} from 'react';

function MyProducts() {
    let [Pro,setPro] = useState(["idli","vada","uthappam","bajji","puri"]);
    let [spro,setSpro] = useState("");
    let handleEvent = (event) => {
        let name = event.target.name
        let value = event.target.value
        
        setSpro(value);
    }
        let addItems = () => {
            console.log("New Item is Added "+spro);
            setSpro([...Pro, spro]);
            setSpro("");
        }
        return(
            <div>
                Item Name: 
                <input type="text" name="spro" placeholder="Enter your Item" onChange={handleEvent} value={spro}/><br/>
                <input type="button" value="Add Item" onClick={addItems}/><br/>
                <h4>Add and Display Food Items</h4>
                <ul>
                    {
                        Pro.map((name,index)=>{
                            return <li key={index}>--){name}</li>
                        })
                    }
                </ul>
            </div>

        )
}
export default MyProducts;