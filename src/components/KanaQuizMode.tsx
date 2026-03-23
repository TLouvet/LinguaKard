import { useQuizCore } from '../hooks/useQuizCore';
import { useBestScore } from '../hooks/useBestScore';
import { QuizOptionCard } from '../ui/QuizOptionCard';
import { QuizScore } from '../ui/QuizScore';
import type { Kana } from '../data/kana';

interface KanaQuizModeProps {
  script: 'hiragana' | 'katakana';
  kanaData: Kana[];
}

export function KanaQuizMode({ script, kanaData }: KanaQuizModeProps) {
  const { current, options, selectedAnswer, score, submitAnswer } =
    useQuizCore(kanaData, k => k.romanji);
  const bestScore = useBestScore('kana-best-score', score.correct);
  const displayChar = script === 'hiragana' ? current.hiragana : current.katakana;

  return (
    <div className="flex flex-col items-center gap-6 py-8">
      <QuizScore correct={score.correct} total={score.total} best={bestScore} />

      <div className="text-9xl font-bold text-gray-800 py-4 leading-none">{displayChar}</div>

      <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
        {options.map(option => (
          <QuizOptionCard
            key={option}
            option={option}
            correctAnswer={current.romanji}
            selectedAnswer={selectedAnswer}
            onSelect={() => submitAnswer(option)}
          />
        ))}
      </div>
    </div>
  );
}
