import { Card } from '../ui/Card';
import type { ArabicLetter } from '../data/arabic';

interface ArabicCardProps {
  letter: ArabicLetter;
}

export function ArabicCard({ letter }: ArabicCardProps) {
  return (
    <Card className="flex flex-col items-center justify-center p-3 hover:shadow transition-shadow gap-1 text-center">
      <span className="text-3xl font-bold text-gray-800 leading-none" dir="rtl">{letter.letter}</span>
      <span className="text-sm font-medium text-blue-500">{letter.transliteration}</span>
      <span className="text-xs text-gray-400">{letter.nameRoman}</span>
      <span className="text-xs text-gray-300" dir="rtl">{letter.arabicName}</span>
    </Card>
  );
}
