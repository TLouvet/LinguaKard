interface QuizScoreProps {
  correct: number;
  total: number;
  best: number;
}

export function QuizScore({ correct, total, best }: QuizScoreProps) {
  return (
    <div className="flex gap-8 text-lg font-medium text-gray-600">
      <span>Score : {correct} / {total}</span>
      <span>Meilleur : {best}</span>
    </div>
  );
}
