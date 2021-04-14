const employees = require('./soal.js');

function searchEmployee(employees,prefix) {
    let out = '';
    const name = employees.filter(employee => employee.first_name.startsWith(prefix));
    name.forEach(employee => {
        out += `${employee.first_name} ${employee.last_name}\n`
    });
    return out;
}

console.log(searchEmployee(employees, 'D'));