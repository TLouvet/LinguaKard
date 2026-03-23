import { useState } from 'react';
import { toast } from 'react-toastify';

export function useLocalStorage<T>(key: string, initialValue: T): [T, (v: T) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = globalThis.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (err) {
      toast.error(`Erreur lors de la lecture de "${key}" depuis le localStorage.`);
      console.error(err);
      return initialValue;
    }
  });

  const setValue = (value: T) => {
    try {
      setStoredValue(value);
      globalThis.localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      toast.error(`Erreur lors de l'écriture de "${key}" dans le localStorage.`);
      console.error(err);
    }
  };

  return [storedValue, setValue];
}
