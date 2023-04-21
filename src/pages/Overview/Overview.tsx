import React, { useEffect, useState } from "react";
import { PasswordItem } from "../../components";
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
    if (!customers || !name) return;

    const selectedCustomer = customers?.find(
      (customer) => customer.name === name
    );

    return selectedCustomer?.color;
  };

  return (
    <div>
      <h1>Saved passwords</h1>
      {isLoading ? (
        "Loading"
      ) : (
        <div>
          {passwords?.map((password) => (
            <PasswordItem
              key={password.title}
              item={password}
              color={getCustomerColor(password.customer)}
            />
          ))}
        </div>
      )}
    </div>
  );
};
