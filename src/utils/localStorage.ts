/**
 * Get a typed value from localStorage.
 * @param key The value key.
 * @returns The value parsed as type `T`, or `null` if no value is found.
 * @template T The type of the value. Defaults to `unknown`.
 */
export const getItem = <T = unknown>(key: string): T | null => {
  const value = window.localStorage.getItem(key);
  if (!value) return null;
  return JSON.parse(value);
};

/**
 * Store a value to localStorage.
 * @param key The key to store the value under.
 * @param value The value to save.
 */
export const setItem = (key: string, value: unknown) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};
