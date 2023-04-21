import * as customers from "../data/customers.json";

export const getCustomers = () => {
  return setTimeout(() => customers, 10);
};
