import { Card } from '../ui/Card';
import type { Kanji } from '../data/kanji';

interface KanjiCardProps {
  kanji: Kanji;
}

export function KanjiCard({ kanji }: KanjiCardProps) {
  return (
    <Card className="flex flex-col items-center justify-center p-3 hover:shadow transition-shadow gap-1">
      <span className="text-3xl font-bold text-gray-800 leading-none">{kanji.kanji}</span>
      <span className="text-xs text-gray-500 font-medium">{kanji.meaning}</span>
      <div className="flex flex-col items-center">
        <span className="text-xs text-blue-400">{kanji.onyomi}</span>
        <span className="text-xs text-emerald-500">{kanji.kunyomi}</span>
      </div>
    </Card>
  );
}
