/**
 * Get a typed value from localStorage.
 * @param key The value key.
 * @returns The value parsed as type `T`, or `null` if no value is found.
 * @template T The type of the value. Defaults to `unknown`.
 */
export const getStorageItem = <T = unknown>(key: string): T | null => {
  const value = localStorage.getItem(key);
  if (!value) return null;
  return JSON.parse(value);
};

/**
 * Store a value to localStorage.
 * @param key The key to store the value under.
 * @param value The value to save.
 */
export const setStorageItem = (key: string, value: unknown) => {
  localStorage.setItem(key, JSON.stringify(value));
};
