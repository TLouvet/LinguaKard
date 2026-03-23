import { useQuiz } from '../hooks/useQuiz';
import { useBestScore } from '../hooks/useBestScore';
import { QuizOptionCard } from '../ui/QuizOptionCard';
import { QuizScore } from '../ui/QuizScore';
import type { Kana } from '../data/kana';

interface KanaQuizModeProps {
  script: 'hiragana' | 'katakana';
  kanaData: Kana[];
}

export function KanaQuizMode({ script, kanaData }: KanaQuizModeProps) {
  const { displayChar, options, selectedAnswer, currentKana, score, submitAnswer } =
    useQuiz(kanaData, script);
  const bestScore = useBestScore('kana-best-score', score.correct);

  return (
    <div className="flex flex-col items-center gap-6 py-8">
      <QuizScore correct={score.correct} total={score.total} best={bestScore} />

      <div className="text-9xl font-bold text-gray-800 py-4 leading-none">{displayChar}</div>

      <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
        {options.map(option => (
          <QuizOptionCard
            key={option}
            option={option}
            correctAnswer={currentKana.romanji}
            selectedAnswer={selectedAnswer}
            onSelect={() => submitAnswer(option)}
          />
        ))}
      </div>
    </div>
  );
}
