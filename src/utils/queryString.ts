// { [key: string]: string | number } means any JS object that has string keys and values of the specified type
/**
 * Creates a query string from a JS object of keys and values. If any values
 * are null or undefined, they will be converted to an empty string
 * @param obj The JS object to encode as a query string
 * @returns The query string
 */
export const encode = (obj?: { [key: string]: string | number | null | undefined }) => {
  if (!obj) return '';

  const keys = Object.keys(obj);
  if (!keys.length) return '';

  const kvPairs = keys.map((key) => {
    const value = obj[key] ? encodeURIComponent(obj[key]!) : '';
    return `${key}=${value}`;
  });

  return `?${kvPairs.join('&')}`;
};
