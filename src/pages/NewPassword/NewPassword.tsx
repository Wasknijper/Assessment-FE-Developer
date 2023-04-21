import React, { useEffect, useState } from "react";
import { getCustomers } from "../../helpers";
import { Customer } from "../../types";

export const NewPassword = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [customers, setCustomers] = useState<Customer[] | undefined>();

  useEffect(() => {
    const fetchCustomers = async () => {
      console.log("hoi");
      const data = await getCustomers();

      setIsLoading(false);
      setCustomers(data);
    };

    fetchCustomers();
  });

  return (
    <div>
      <h1>Add new password</h1>
      {isLoading ? (
        "Loading"
      ) : (
        <form>
          <label>
            Title*
            <input name="title" required></input>
          </label>
          <label>
            Password*
            <input name="title" type="password" required></input>
          </label>
          {customers && (
            <label>
              Customer
              <select>
                {customers.map(({ name }) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </select>
            </label>
          )}
        </form>
      )}
    </div>
  );
};
