import { useState, useMemo } from 'react';
import type { Kana } from '../data/kana';

export function useQuiz(kanaData: Kana[], script: 'hiragana' | 'katakana') {
  const shuffled = useMemo(() => [...kanaData].sort(() => Math.random() - 0.5), [kanaData]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState({ correct: 0, total: 0 });

  const currentKana = shuffled[currentIndex % shuffled.length];
  const displayChar = script === 'hiragana' ? currentKana.hiragana : currentKana.katakana;

  const options = useMemo(() => {
    const correct = currentKana.romanji;
    const distractors = kanaData
      .filter((k) => k.romanji !== correct)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map((k) => k.romanji);
    return [...distractors, correct].sort(() => Math.random() - 0.5);
  }, [currentIndex, kanaData]);

  const submitAnswer = (answer: string) => {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(answer);
    const isCorrect = answer === currentKana.romanji;
    setScore((prev) => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      total: prev.total + 1,
    }));

    setTimeout(() => {
      setSelectedAnswer(null);
      setCurrentIndex((prev) => prev + 1);
    }, 1500);
  };

  return {
    currentKana,
    displayChar,
    options,
    selectedAnswer,
    isAnswered: selectedAnswer !== null,
    score,
    submitAnswer,
  };
}
