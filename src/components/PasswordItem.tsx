import { useState } from "react";
import { Password } from "../types";

type Props = {
  item: Password;
  color?: string;
};

export const PasswordItem = ({ item, color = "#000" }: Props) => {
  const { title, customer, password } = item;

  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <div style={{ border: `2px solid ${color}`, marginTop: "1em" }} key={title}>
      <h2>{title}</h2>
      {customer && <h3 style={{ color: color }}>{customer}</h3>}
      {showPassword ? (
        <div onClick={() => setShowPassword(false)}>{password}</div>
      ) : (
        <button type="button" onClick={() => setShowPassword(true)}>
          Show password
        </button>
      )}
    </div>
  );
};
