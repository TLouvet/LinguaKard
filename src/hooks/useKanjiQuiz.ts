import { useState, useMemo } from 'react';
import type { Kanji } from '../data/kanji';

export function useKanjiQuiz(kanjiData: Kanji[]) {
  const shuffled = useMemo(
    () => [...kanjiData].sort(() => Math.random() - 0.5),
    [kanjiData]
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState({ correct: 0, total: 0 });

  const current = shuffled[currentIndex % shuffled.length];

  const options = useMemo(() => {
    const correct = current.meaning;
    const distractors = kanjiData
      .filter(k => k.meaning !== correct)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map(k => k.meaning);
    return [...distractors, correct].sort(() => Math.random() - 0.5);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, kanjiData]);

  const submitAnswer = (answer: string) => {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(answer);
    const isCorrect = answer === current.meaning;
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
    isAnswered: selectedAnswer !== null,
    score,
    submitAnswer,
  };
}
