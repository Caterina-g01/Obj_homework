interface User {
  name: string;
  age: number;
  city: string;
}

const user: User = {
  name: "Ivan",
  age: 28,
  city: "Moscow",
};

for (const key in user) {
  console.log(key); // ключи
  console.log(user[key as keyof User]); // значения
}

console.log(user); // объект
