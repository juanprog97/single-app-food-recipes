export enum LocalStorageKeys {
  AUTH_STATE = "auth",
  FAVORITE_FOODS = "favoriteRecipe",
}

export const saveInLocalStorage = (key: string, value: string) => {
  localStorage.setItem(key, value);
};

export const getInLocalStorage = (key: string) => {
  const result = localStorage.getItem(key);
  return !!result ? result : "";
};

export const getObjectLocalStorage = (key: string) => {
  const result = localStorage.getItem(key);
  return !!result ? result : JSON.stringify({ version: "1" });
};

export const RemoveLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};
