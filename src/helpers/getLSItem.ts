import { LocalStorageKey } from "../constants/LocalStorageKey";
import { Password } from "../types";

export const getLSItem = (): Password[] | null => {
  const rawData = localStorage.getItem(LocalStorageKey);

  if (!rawData) {
    return null;
  }

  return JSON.parse(rawData);
};
