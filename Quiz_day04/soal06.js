const employees = require('./soal.js');

function totalSalaryByDepartment(employees, departmentId) {
      const salaryDepartment = employees.filter(employee => employee.department_id === departmentId);
      let total = 0;
      salaryDepartment.forEach(employee => {
          total += parseFloat(employee.salary);
      });

      return total;
}


console.log(totalSalaryByDepartment(employees, 8));