const employees = require('./soal.js');

function salaryMinMax(employees) {
    const salaryMaxMin = employees.sort((employee1, employee2) => parseInt(employee2.salary) - parseInt(employee1.salary));
    return `Employees dengan salary terbesar yaitu: ${salaryMaxMin[0].first_name} ${salaryMaxMin[0].last_name} dengan gaji: ${salaryMaxMin[0].salary}\nEmployees dengan salary terkecil yaitu: ${salaryMaxMin[employees.length-1].first_name} ${salaryMaxMin[employees.length-1].last_name} dengan gaji: ${salaryMaxMin[employees.length-1].salary}`;
}

console.log(salaryMinMax(employees));