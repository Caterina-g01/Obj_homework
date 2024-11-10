interface IAddress {
  street: string;
  city: string;
}

interface IAuthor {
  name: string;
  address: IAddress;
}

interface IBook {
  title: string;
  author: IAuthor;
  pages: number;
}

const book: IBook = {
  title: "Lord Of The Rings",
  author: {
    name: "J. Tolkien",
    address: {
      street: "Name of the street",
      city: "London",
    },
  },
  pages: 634,
};

let bookClone = structuredClone(book);

bookClone.title = "Harry Potter";
bookClone.author.address.street = "Another name of the street";

console.log(bookClone.title);
console.log(book.title);

console.log(bookClone.author.address.street);
console.log(book.author.address.street);
