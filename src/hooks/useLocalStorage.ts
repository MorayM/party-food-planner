import { useState } from 'react';
import { getStorageItem, setStorageItem } from 'utils/localStorage';

export type UseLocalStorageReturnType<T> = [T | null, (value: T) => void, () => void, () => T | null];

export const useLocalStorage = <T>(key: string, defaultValue: T | null = null): UseLocalStorageReturnType<T> => {
  const existingItem = getStorageItem<T>(key);
  const [item, setItemState] = useState<T | null>(existingItem || defaultValue);

  const setItem = (newValue: T) => {
    setStorageItem(key, newValue);
    setItemState(newValue);
  };

  const clearItem = () => {
    setStorageItem(key, null);
    setItemState(null);
  };

  const getItem = (): T | null => {
    const parsedValue = getStorageItem<T>(key);
    setItemState(parsedValue);
    return parsedValue;
  };

  return [item, setItem, clearItem, getItem];
};
