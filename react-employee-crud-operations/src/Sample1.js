import {useState, useEffect} from 'react';
function Sample1(){
    let URL="http://localhost:3000/employees"
    let[employee,setEmployee]=useState({name:"",salary:""});
    let[employees,setEmployees]=useState([]);
    let[msg,setMsg]=useState("")

useEffect=(()=> {
    axios.get(URL).then(result=>setEmployees(result.data)).catch(error=>console.log(error))
},[msg])
let storeEmployee =(event)=> {
    event.preventDefault();
    setMsg("");
    console.log(employee)
    axios.post(URL,employee).then(result=>{setMsg(result.statusText)}).catch(error=>console.log(error));
    setEmployee({name:"",salary:""})
}
return(
    <div>
        <span style={{"color":"red"}}>{}msg</span>
        <h3>Employee Management System</h3>
        <form onSubmit={storeEmployee}>
            <label>Name</label>
            <input type="text" value={employee.name} name="name" 
            onChange={(event)=>setEmployee({...employee,"name":event.target.value})}/><br/>

            <label>Salary</label>
            <input type="text" value={employee.salary} name="salary" 
            onChange={(event)=>setEmployee({...employee,"salary":event.target.value})}/><br/>

            <input type="submit" value="store Value"/>
            <input type="reset" value="reset"/>
        </form>
    </div>
)
}

export default Sample1;