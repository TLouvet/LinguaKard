import { useHangeulQuiz } from '../hooks/useHangeulQuiz';
import { useBestScore } from '../hooks/useBestScore';
import { QuizOptionCard } from '../ui/QuizOptionCard';
import { QuizScore } from '../ui/QuizScore';
import { hangeulData } from '../data/hangeul';

export function HangeulQuizMode() {
  const { current, options, selectedAnswer, score, submitAnswer } = useHangeulQuiz(hangeulData);
  const bestScore = useBestScore('hangeul-best-score', score.correct);

  return (
    <div className="flex flex-col items-center gap-6 py-8">
      <QuizScore correct={score.correct} total={score.total} best={bestScore} />

      <div className="py-4">
        <span className="text-9xl font-bold text-gray-800 leading-none">{current.character}</span>
      </div>

      <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
        {options.map(option => (
          <QuizOptionCard
            key={option}
            option={option}
            correctAnswer={current.romanization}
            selectedAnswer={selectedAnswer}
            onSelect={() => submitAnswer(option)}
          />
        ))}
      </div>
    </div>
  );
}
