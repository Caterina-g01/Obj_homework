interface IUser {
  name: string;
  age: number;
  city: string;
}

const user: IUser = {
  name: "Ivan",
  age: 28,
  city: "Moscow",
};

for (const key in user) {
  console.log(key);
  console.log(user[key as keyof IUser]);
}

console.log(user);
