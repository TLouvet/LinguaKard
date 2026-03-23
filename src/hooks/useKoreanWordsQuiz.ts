import { useState, useMemo } from 'react';
import type { KoreanWord } from '../data/koreanWords';

export function useKoreanWordsQuiz(data: KoreanWord[]) {
  const shuffled = useMemo(
    () => [...data].sort(() => Math.random() - 0.5),
    [data]
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState({ correct: 0, total: 0 });

  const current = shuffled[currentIndex % shuffled.length];

  const options = useMemo(() => {
    const correct = current.french;
    const distractors = data
      .filter(w => w.french !== correct)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map(w => w.french);
    return [...distractors, correct].sort(() => Math.random() - 0.5);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, data]);

  const submitAnswer = (answer: string) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(answer);
    const isCorrect = answer === current.french;
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
