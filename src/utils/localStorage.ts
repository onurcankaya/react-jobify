export const addItemToLocalStorage = (
  key: string,
  obj: Record<string, string>
) => {
  localStorage.setItem(key, JSON.stringify(obj));
};

export const getItemFromLocalStorage = (key: string) => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
};

export const removeItemFromLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};
