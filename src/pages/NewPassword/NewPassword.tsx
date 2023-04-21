import React, { useEffect, useState } from "react";
import { PasswordForm } from "../../components";
import { getCustomers } from "../../helpers";
import { Customer } from "../../types";

export const NewPassword = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [customers, setCustomers] = useState<Customer[] | undefined>();

  useEffect(() => {
    const fetchCustomers = async () => {
      const data = await getCustomers();

      setIsLoading(false);
      setCustomers(data);
    };

    fetchCustomers();
  });

  return (
    <div>
      <h1>Add new password</h1>
      {isLoading ? "Loading" : <PasswordForm customers={customers} />}
    </div>
  );
};
