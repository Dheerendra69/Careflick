export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface User {
  _id: number | string;

  name: string;

  email: string;

  phone: string;

  address?: Address;

  company?: Company;
}