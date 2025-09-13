let fs = require("fs")
let data = fs.readFileSync("employees.json")
let employees = JSON.parse(data.toString());
let emp1 = {id:101,fname:"steven",age:22,salary:35000,tech:"javascript"};
if(employees.length == 0){
    console.log("no employees found")
    employees.push(emp1)
    fs.writeFileSync("employees.json",JSON.stringify(employees));
    console.log("employee added successfully")
}else{
    console.log("employees details");
    console.log(employees);
        let result = employees.find(e=>e.id == emp1.id)
        if(result===undefined){
            console.log("employee not found, adding new employee")
            employees.push(emp1);
            fs.writeFileSync("employees.json",JSON.stringify(employees));
            console.log("new employee added successfully")
        }else{
            console.log("employees found, not adding new employee")
        }
}