const employees = require('./soal.js');

function totalEmployeeByDepartment(employees) {
    let out = '';
    for (let i = 0; i < employees.length; i++) {
        let total = 0;
        let jobid = employees.filter(employee => employee.job_id === i);
        for (let j = 0; j < jobid.length; j++) {
            total += 1;            
        }
        if(total > 0) {
            out += `JobId: ${i} => Total Employee: ${total}\n`;
        }
    }
    return out;
}

console.log(totalEmployeeByDepartment(employees));
