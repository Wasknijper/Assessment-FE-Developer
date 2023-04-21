import { LocalStorageKey } from "../constants/LocalStorageKey";
import { Password } from "../types";

export const saveLSData = (data: Password[]) => {
  let value = JSON.stringify(data);

  localStorage.setItem(LocalStorageKey, value);
};
