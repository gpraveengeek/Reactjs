import axios from 'axios'
import { useEffect, useState } from 'react';

function SignUpPage(){

    let URL="http://localhost:3000/employees"
    let [employees,setEmployees]=useState([]);
    let [employee,setEmployee]=useState({name:"",department:"", emailid:""});
    let [msg,setMessage]=useState("")
    let [buttonValue,setButtonValue]=useState("Store Employee");

    useEffect(()=> {
    axios.get(URL).then(result=>setEmployees(result.data)).catch(error=>console.log(error))
},[msg])

let storeEmployee=(event)=> {
    event.preventDefault();
    setMessage("");
    if(buttonValue=="Store Employee"){
        axios.post(URL,employee).then(result=>{
            setMessage(result.statusText);
            
    }).catch(error=>console.log(error));

    }else {

    axios.put(URL+"/"+employee.id,employee).then(result=>{
            setMessage(result.statusText);
            setButtonValue("Store Employee")
    }).catch(error=>console.log(error));

    }
    setEmployee({name:"",department:"", emailid:""})
}
let deleteEmployee = (event,id)=>{
    setMessage("");
    axios.delete(URL+"/"+id).then(result=>{
            setMessage(result.statusText);       
    }).catch(error=>console.log(error));
}
let setToUpdateEmployee = (event,employeeUpdate)=> {
    console.log(employeeUpdate)   
    setEmployee(employeeUpdate);      
    setButtonValue("Update Employee");  
}


    return(
        <div className="container">
            <span style={{"color":"red"}}>{msg}</span>
            <h3>SignUp Page</h3>
            <form onSubmit={storeEmployee} className="form-group">
                
                <label>Name: </label>
                <input type="text" value={employee.name} name="name"
                onChange={(event)=>setEmployee({...employee,"name":event.target.value})}
                className="form-control"
                /><br/>

                <label>Department: </label>
                <input type="text" value={employee.department} name="department"
                onChange={(event)=>setEmployee({...employee,"department":event.target.value})}
                className="form-control"
                /><br/>

                <label>Email ID: </label>
                <input type="text" value={employee.email} name="emailid"
                onChange={(event)=>setEmployee({...employee,"emailid":event.target.value})}
                className="form-control"
                /><br/>

                <input type="submit" value={buttonValue} className="btn btn-outline-primary"/>
                <input type="reset" value="reset" className="btn btn-outline-info"/>
            </form>
        </div>
    )
}
export default SignUpPage;