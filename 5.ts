function hasProperty(obj: object, property: string): boolean {
  return property in obj;
}

interface Car {
  model: string;
  year: number;
  color: string;
}

const car: Car = {
  model: "Tesla",
  year: 2023,
  color: "Silver",
};

console.log(hasProperty(car, "model"));
console.log(hasProperty(car, "engine"));

function checkHasProperty(obj: Record<string, any>, key: string): boolean {
  return key in obj;
}

console.log(checkHasProperty(car, "color"));
console.log(checkHasProperty(car, "engine"));
