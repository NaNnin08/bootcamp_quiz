const employees = require('./soal.js');

function sortSalary(employees) {
    return employees.sort((employee1, employee2) => parseInt(employee2.salary) - parseInt(employee1.salary));
}

console.log(sortSalary(employees));