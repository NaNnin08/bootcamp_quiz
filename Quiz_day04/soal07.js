const employees = require('./soal.js');

function totalEmployeeByDepartment(employees) {
    let out = '';
    for (let i = 0; i < employees.length; i++) {
        let total = 0;
        let department = employees.filter(employee => employee.department_id === i);
        for (let j = 0; j < department.length; j++) {
            total += 1;            
        }
        if(total > 0) {
            out += `Department: ${i} => Total Employee: ${total}\n`;
        }
    }
    return out;
}

console.log(totalEmployeeByDepartment(employees));
