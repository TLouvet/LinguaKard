import { useState, useMemo } from 'react';
import type { Hangeul } from '../data/hangeul';

export function useHangeulQuiz(hangeulData: Hangeul[]) {
  const shuffled = useMemo(
    () => [...hangeulData].sort(() => Math.random() - 0.5),
    [hangeulData]
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState({ correct: 0, total: 0 });

  const current = shuffled[currentIndex % shuffled.length];

  const options = useMemo(() => {
    const correct = current.romanization;
    const distractors = hangeulData
      .filter(h => h.romanization !== correct)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map(h => h.romanization);
    return [...distractors, correct].sort(() => Math.random() - 0.5);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, hangeulData]);

  const submitAnswer = (answer: string) => {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(answer);
    const isCorrect = answer === current.romanization;
    setScore(prev => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      total: prev.total + 1,
    }));

    setTimeout(() => {
      setSelectedAnswer(null);
      setCurrentIndex(prev => prev + 1);
    }, 1500);
  };

  return {
    current,
    options,
    selectedAnswer,
    score,
    submitAnswer,
  };
}
