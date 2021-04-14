const employees = require('./soal.js');

function totalSalaryAllEmployee(employees) {
    let total = 0;
    employees.forEach(employee => {
        total += parseFloat(employee.salary);
    });
    return total;    
}

console.log(totalSalaryAllEmployee(employees));