export enum LocalStorageKeys {
  AUTH_STATE = "auth",
}

export const saveInLocalStorage = (key: string, value: string) => {
  localStorage.setItem(key, value);
};

export const getInLocalStorage = (key: string) => {
  const result = localStorage.getItem(key);
  return !!result ? result : "";
};

export const clearLocalStorage = () => {
  localStorage.clear();
};
