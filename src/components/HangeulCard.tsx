import { Card } from '../ui/Card';
import type { Hangeul } from '../data/hangeul';

interface HangeulCardProps {
  hangeul: Hangeul;
}

export function HangeulCard({ hangeul }: HangeulCardProps) {
  return (
    <Card className="flex flex-col items-center justify-center p-3 hover:shadow transition-shadow gap-1">
      <span className="text-3xl font-bold text-gray-800 leading-none">{hangeul.character}</span>
      <span className="text-sm font-medium text-blue-500">{hangeul.romanization}</span>
      <span className="text-xs text-gray-400 text-center leading-tight">{hangeul.name}</span>
    </Card>
  );
}
