import { useArabicQuiz } from '../hooks/useArabicQuiz';
import { useBestScore } from '../hooks/useBestScore';
import { QuizOptionCard } from '../ui/QuizOptionCard';
import { arabicData } from '../data/arabic';

export function ArabicQuizMode() {
  const { current, options, selectedAnswer, score, submitAnswer } = useArabicQuiz(arabicData);
  const bestScore = useBestScore('arabic-best-score', score.correct);

  return (
    <div className="flex flex-col items-center gap-6 py-8">
      <div className="flex gap-8 text-lg font-medium text-gray-600">
        <span>Score : {score.correct} / {score.total}</span>
        <span>Meilleur : {bestScore}</span>
      </div>

      <div className="py-4">
        <span className="text-9xl font-bold text-gray-800 leading-none" dir="rtl">{current.letter}</span>
      </div>

      <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
        {options.map(option => (
          <QuizOptionCard
            key={option}
            option={option}
            correctAnswer={current.transliteration}
            selectedAnswer={selectedAnswer}
            onSelect={() => submitAnswer(option)}
          />
        ))}
      </div>
    </div>
  );
}
