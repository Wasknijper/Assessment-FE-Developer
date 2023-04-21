import { savePassword } from "../helpers";
import { Customer, Password } from "../types";

type Props = {
  customers?: Customer[];
};

export const PasswordForm = ({ customers }: Props) => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);

        const passwordData = Object.fromEntries(formData) as Password;

        savePassword(passwordData);
      }}
    >
      <label>
        Title*
        <input name="title" required></input>
      </label>
      <label>
        Password*
        <input name="password" type="password" required></input>
      </label>
      {customers && (
        <label>
          Customer
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
