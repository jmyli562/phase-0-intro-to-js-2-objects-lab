// Write your solution in this file!
const employee = {
    name: "John Doe",
    address: "1234 Elm Street",
};

//console.log(employee.address); //making sure the object is initialized correctly
////console.log(employee.name); 

function updateEmployeeWithKeyAndValue(employee,key,value){
    const updatedNewEmployee = {...employee};
    updatedNewEmployee[key] = value;
    return updatedNewEmployee

}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    const newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];

    return employee
    
}