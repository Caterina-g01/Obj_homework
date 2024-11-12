interface Student {
  name: string;
  age: number;
  city: string;
  university: string;
}

const student: Student = {
  name: "Ivan",
  age: 28,
  city: "Moscow",
  university: "MSU",
};

function getObjectInfo(obj: Record<string, any>): number {
  return Object.entries(obj).length;
}
console.log(getObjectInfo(student));
