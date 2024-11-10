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

function checkHasProperty(obj: Record<string, any>): void {
  let key: string | null;

  while (true) {
    key = prompt("Введите название ключа", "");

    if (key) {
      alert(key in obj);
      break;
    } else {
      alert("Пожалуйста, введите значение ключа");
    }
  }
}

checkHasProperty(car);
