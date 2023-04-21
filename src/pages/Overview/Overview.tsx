import React, { useEffect, useState } from "react";
import { getCustomers, getLSData } from "../../helpers";
import { Customer, Password } from "../../types";

export const Overview = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [customers, setCustomers] = useState<Customer[] | undefined>();
  const [passwords, setPasswords] = useState<Password[] | undefined>();

  useEffect(() => {
    const fetchCustomers = async () => {
      const data = await getCustomers();

      setIsLoading(false);
      setCustomers(data);
    };

    fetchCustomers();

    const passwords = getLSData();
    setPasswords(passwords);
  }, []);

  const getCustomerColor = (name?: string) => {
    if (!customers || !name) return "#000";

    const selectedCustomer = customers?.find(
      (customer) => customer.name === name
    );

    return selectedCustomer?.color || "#000";
  };

  return (
    <div>
      <h1>Saved passwords</h1>
      {isLoading ? (
        "Loading"
      ) : (
        <div>
          {passwords?.map(({ title, customer }) => {
            const color = getCustomerColor(customer);

            return (
              <div style={{ border: `2px solid ${color}` }} key={title}>
                <h2>{title}</h2>
                {customer && <h3 style={{ color: color }}>{customer}</h3>}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
