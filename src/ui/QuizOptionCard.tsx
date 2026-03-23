import { Card } from './Card';

interface QuizOptionCardProps {
  option: string;
  correctAnswer: string;
  selectedAnswer: string | null;
  onSelect: () => void;
}

function getCardStyle(option: string, correctAnswer: string, selectedAnswer: string | null) {
  if (selectedAnswer === null) return 'border-gray-200 hover:border-blue-400 hover:shadow-md cursor-pointer';
  if (option === correctAnswer) return 'border-green-500 bg-green-100 text-green-700';
  if (option === selectedAnswer) return 'border-red-400 bg-red-100 text-red-600';
  return 'border-gray-100 bg-gray-50 text-gray-300';
}

export function QuizOptionCard({ option, correctAnswer, selectedAnswer, onSelect }: QuizOptionCardProps) {
  return (
    <Card
      className={`flex items-center justify-center p-4 border-2 font-semibold transition-all duration-150 select-none ${getCardStyle(option, correctAnswer, selectedAnswer)}`}
      onClick={selectedAnswer === null ? onSelect : undefined}
    >
      {option}
    </Card>
  );
}
