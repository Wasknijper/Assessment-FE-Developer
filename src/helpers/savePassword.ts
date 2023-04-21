import { Password } from "../types";
import { getLSData } from "./getLSData";
import { saveLSData } from "./saveLSData";

export const savePassword = (password: Password) => {
  const savedPasswords = getLSData() || [];

  if (savedPasswords.find((pw) => pw.title === password.title)) {
    alert("Password already exists! Please change the title");
    return;
  }

  saveLSData([...savedPasswords, password]);
};
