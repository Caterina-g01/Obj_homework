interface Client {
  [key: string | number]: string | number;
}

let client: Client = {};

function addProperty(
  obj: Client,
  key: string | number,
  value: string | number
): void {
  obj[key] = value;
}

addProperty(client, "name", "John");
console.log(client);
