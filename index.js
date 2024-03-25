const employee = {
    name: "Sam",
    streetAddress: "11",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    
    const updatedEmployee = { ...employee };
    
    updatedEmployee[key] = value;
    
    return updatedEmployee;
}

console.log(updateEmployeeWithKeyAndValue(employee, 'streetAddress', '22'));

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    
    employee[key] = value;
    
    return employee;
}


console.log(destructivelyUpdateEmployeeWithKey(employee, 'streetAddress', '22'));

function deleteFromEmployeeByKey(employee, key) {
    
    const updatedEmployee = { ...employee };
    
    delete updatedEmployee[key];
    
    return updatedEmployee;
}

console.log(deleteFromEmployeeByKey(employee, 'streetAddress'));

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    
    delete employee[key];
    
    return employee;
}

delete employee.name;

console.log(employee);

module.exports = {
    employee,
    updateEmployeeWithKeyAndValue,
    destructivelyUpdateEmployeeWithKey,
    deleteFromEmployeeByKey,
    destructivelyDeleteFromEmployeeByKey,
};
