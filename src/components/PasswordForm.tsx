import { savePassword } from "../helpers";
import { Customer, Password } from "../types";
import "./PasswordForm.css";

type Props = {
  customers?: Customer[];
};

export const PasswordForm = ({ customers }: Props) => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;

        const formData = new FormData(form);

        const passwordData = Object.fromEntries(formData) as Password;

        savePassword(passwordData);
        alert("Password added!");
        form.reset();
      }}
    >
      <label>
        <p>Title*</p>
        <input name="title" required></input>
      </label>
      <label>
        <p>Password*</p>
        <input name="password" type="password" required></input>
      </label>
      {customers && (
        <label>
          <p>Customer</p>
          <select name="customer">
            <option value="">Select a customer</option>
            {customers.map(({ name }) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
        </label>
      )}
      <button type="submit">Submit</button>
    </form>
  );
};
