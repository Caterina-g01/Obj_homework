interface IAddress {
  city: string;
  street: string;
  building: {
    number: number;
    office: string[];
  };
}

interface ICompany {
  name: string;
  address: IAddress;
  employees: {
    name: string;
    role: string;
  }[];
}

const company: ICompany = {
  name: "Very Big Company",
  address: {
    city: "New-York",
    street: "Some street",
    building: {
      number: 9,
      office: ["office1", "office2", "office3"],
    },
  },
  employees: [
    { name: "John", role: "Director" },
    { name: "Robert", role: "Assistant" },
  ],
};

function copyObject<T>(obj: T): T {
  return structuredClone(obj);
}

let companyClone: ICompany = copyObject(company);

companyClone.address.city = "Moscow";

console.log(companyClone.address.city);
console.log(company.address.city);
