import { useState, useMemo } from 'react';
import type { ArabicLetter } from '../data/arabic';

export function useArabicQuiz(data: ArabicLetter[]) {
  const shuffled = useMemo(
    () => [...data].sort(() => Math.random() - 0.5),
    [data]
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState({ correct: 0, total: 0 });

  const current = shuffled[currentIndex % shuffled.length];

  const options = useMemo(() => {
    const correct = current.transliteration;
    const distractors = data
      .filter(l => l.transliteration !== correct)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map(l => l.transliteration);
    return [...distractors, correct].sort(() => Math.random() - 0.5);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, data]);

  const submitAnswer = (answer: string) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(answer);
    const isCorrect = answer === current.transliteration;
    setScore(prev => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      total: prev.total + 1,
    }));
    setTimeout(() => {
      setSelectedAnswer(null);
      setCurrentIndex(prev => prev + 1);
    }, 1500);
  };

  return { current, options, selectedAnswer, score, submitAnswer };
}
