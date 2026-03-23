import { Card } from '../ui/Card';

interface CharacterCardProps {
  character: string;
  romanji: string;
}

export function CharacterCard({ character, romanji }: CharacterCardProps) {
  return (
    <Card className="flex flex-col items-center justify-center py-3 hover:shadow transition-shadow">
      <span className="text-2xl font-bold text-gray-800 leading-none">{character}</span>
      <span className="text-xs text-gray-400 mt-1">{romanji}</span>
    </Card>
  );
}
