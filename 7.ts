interface Salaries {
  John: number;
  Ann: number;
  Pete: number;
}

let salaries = {
  John: 1000,
  Ann: 1600,
  Pete: 1300,
};

function calculateSumOfSalaries(obj: Record<string, any>): number {
  let sum = 0;
  for (let key in obj) {
    sum += obj[key];
  }
  return sum;
}
console.log(calculateSumOfSalaries(salaries));

//  с методом reduce

interface Salaries {
  John: number;
  Ann: number;
  Pete: number;
}

let salaries = {
  John: 1000,
  Ann: 1600,
  Pete: 1300,
};

function calculateSumOfSalaries(obj: Salaries): number {
  return Object.values(obj).reduce((sum, salary) => sum + salary, sum);
}
console.log(calculateSumOfSalaries(salaries));
