import { Card } from '../ui/Card';
import type { KoreanWord } from '../data/koreanWords';

interface KoreanWordCardProps {
  word: KoreanWord;
}

export function KoreanWordCard({ word }: KoreanWordCardProps) {
  return (
    <Card className="flex flex-col items-center justify-center p-3 hover:shadow transition-shadow gap-1 text-center">
      <span className="text-2xl font-bold text-gray-800 leading-none">{word.korean}</span>
      <span className="text-sm text-blue-500">{word.romanization}</span>
      <span className="text-xs text-gray-500">{word.french}</span>
    </Card>
  );
}
