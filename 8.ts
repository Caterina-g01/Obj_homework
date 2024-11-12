interface Employee {
  name: string;
  salary: number;
}

const employee = [
  {
    name: "Kate",
    salary: 1600,
  },
  {
    name: "Ivan",
    salary: 1700,
  },
  {
    name: "Robert",
    salary: 1300,
  },
];

function calculateSumOfSalaries(employees: Employee[]): number {
  return employees.reduce((sum, employee) => sum + employee.salary, 0);
}

console.log(`Сумма зарплат: ${calculateSumOfSalaries(employee)}`);
