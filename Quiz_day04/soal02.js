const employees = require('./soal.js');

function salaryRange(employees,minSalary, maxSalary) {
    let out = '';
    const salary = employees.filter(employee => parseInt(employee.salary) >= minSalary && parseInt(employee.salary) <= maxSalary);
    salary.forEach(employee => {
        out += `${employee.first_name} ${employee.last_name}\n`
    });
    return out;
}

console.log(salaryRange(employees,2400,4800));