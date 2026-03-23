import { useKoreanWordsQuiz } from '../hooks/useKoreanWordsQuiz';
import { useBestScore } from '../hooks/useBestScore';
import { QuizOptionCard } from '../ui/QuizOptionCard';
import { QuizScore } from '../ui/QuizScore';
import { koreanWordsData } from '../data/koreanWords';

export function KoreanWordsQuizMode() {
  const { current, options, selectedAnswer, score, submitAnswer } = useKoreanWordsQuiz(koreanWordsData);
  const bestScore = useBestScore('korean-words-best-score', score.correct);

  return (
    <div className="flex flex-col items-center gap-6 py-8">
      <QuizScore correct={score.correct} total={score.total} best={bestScore} />

      <div className="flex flex-col items-center gap-2 py-4">
        <span className="text-5xl font-bold text-gray-800">{current.korean}</span>
        <span className="text-base text-blue-400">{current.romanization}</span>
      </div>

      <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
        {options.map(option => (
          <QuizOptionCard
            key={option}
            option={option}
            correctAnswer={current.french}
            selectedAnswer={selectedAnswer}
            onSelect={() => submitAnswer(option)}
          />
        ))}
      </div>
    </div>
  );
}
