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
  let objectArray = Object.entries(obj);
  return objectArray.length;
}
console.log(getObjectInfo(student));
