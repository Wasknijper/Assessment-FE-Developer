import customers from "../data/customers.json";
import { Customer } from "../types";

export const getCustomers = (): Promise<Customer[]> => {
  console.log(customers);
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(customers);
    }, 100)
  );
};
