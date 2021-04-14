const employees = require('./soal.js');

function hireRangeDate(employees,startDate, endDate) {
    let out = "Jadi Employee yang di hire diantara tanggal yang ditentukan yaitu:\n"
    const hire = employees.filter(employee => (new Date(employee.hire_date)) >= (new Date(startDate)) && (new Date(employee.hire_date)) <= (new Date(endDate)));
    hire.forEach(employee => {
        out += `${employee.first_name} ${employee.last_name} => tanggal: ${employee.hire_date}\n`;
    });
    return out;
}

console.log(hireRangeDate(employees, '12-01-1993', '12-12-1995'))