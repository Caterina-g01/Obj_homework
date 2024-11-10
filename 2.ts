interface Person {
  name: string;
  age: number;
}

interface Address {
  city: string;
}

const person: Person = {
  name: "Ivan",
  age: 28,
};

const address: Address = {
  city: "Moscow",
};

const fullInfo: Person & Address = Object.assign(
  {},
  person,
  address
) as Person & Address;

const fullInfo2: Person & Address = { ...person, ...address } as Person &
  Address;

console.log(fullInfo);
console.log(fullInfo2);
