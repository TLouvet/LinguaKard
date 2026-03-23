import { useSearchParams } from 'react-router-dom';

export function useQueryState<T extends string>(key: string, defaultValue: T): [T, (value: T) => void] {
  const [searchParams, setSearchParams] = useSearchParams();
  const value = (searchParams.get(key) as T) ?? defaultValue;

  const setValue = (newValue: T) => {
    setSearchParams(prev => {
      const next = new URLSearchParams(prev);
      next.set(key, newValue);
      return next;
    }, { replace: true });
  };

  return [value, setValue];
}
