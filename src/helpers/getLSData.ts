import { LocalStorageKey } from "../constants/LocalStorageKey";
import { Password } from "../types";

export const getLSData = (): Password[] | undefined => {
  const rawData = localStorage.getItem(LocalStorageKey);

  if (!rawData) {
    return;
  }

  return JSON.parse(rawData);
};
