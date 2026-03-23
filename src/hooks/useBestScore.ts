import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export function useBestScore(key: string, current: number): number {
  const [bestScore, setBestScore] = useLocalStorage(key, 0);

  useEffect(() => {
    if (current > bestScore) setBestScore(current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  return bestScore;
}
