import { useKanjiQuiz } from '../hooks/useKanjiQuiz';
import { useBestScore } from '../hooks/useBestScore';
import { QuizOptionCard } from '../ui/QuizOptionCard';
import { QuizScore } from '../ui/QuizScore';
import { kanjiData } from '../data/kanji';

export function KanjiQuizMode() {
  const { current, options, selectedAnswer, score, submitAnswer } = useKanjiQuiz(kanjiData);
  const bestScore = useBestScore('kanji-best-score', score.correct);

  return (
    <div className="flex flex-col items-center gap-6 py-8">
      <QuizScore correct={score.correct} total={score.total} best={bestScore} />

      <div className="flex flex-col items-center gap-1 py-4">
        <span className="text-9xl font-bold text-gray-800 leading-none">{current.kanji}</span>
        <span className="text-sm text-blue-400">{current.onyomi}</span>
        <span className="text-sm text-emerald-500">{current.kunyomi}</span>
      </div>

      <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
        {options.map(option => (
          <QuizOptionCard
            key={option}
            option={option}
            correctAnswer={current.meaning}
            selectedAnswer={selectedAnswer}
            onSelect={() => submitAnswer(option)}
          />
        ))}
      </div>
    </div>
  );
}
