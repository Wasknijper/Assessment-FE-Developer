import { LocalStorageKey } from "../constants/LocalStorageKey";
import { Password } from "../types";

export const getLSData = (): Password[] | null => {
  const rawData = localStorage.getItem(LocalStorageKey);

  if (!rawData) {
    return null;
  }

  return JSON.parse(rawData);
};
