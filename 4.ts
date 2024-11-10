//копируем объект, где свойство category необязательно, если не хотим менять изначальный объект
interface Product {
  name: string;
  price: number;
  category: string;
}

const product: Product = {
  name: "iPhone 13",
  price: 600,
  category: "Smartphones",
};

let updatedProduct: Partial<Product> = { ...product };

delete updatedProduct.category;

console.log(product);

// удаляем свойство из изначального объекта
interface Product {
  name: string;
  price: number;
  category?: string;
}

const product: Product = {
  name: "iPhone 13",
  price: 600,
  category: "Smartphones",
};

delete product.category;

console.log(product);
