import type { Kana } from '../data/kana';
import { CharacterCard } from './CharacterCard';

interface CharacterGridProps {
  characters: Kana[];
  title: string;
  script: 'hiragana' | 'katakana';
}

export function CharacterGrid({ characters, title, script }: CharacterGridProps) {
  return (
    <div className="flex items-center gap-3 py-1">
      <span className="w-8 text-right text-xs font-medium text-gray-400 shrink-0">{title}</span>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 flex-1">
        {characters.map((kana, i) => (
          <CharacterCard
            key={i}
            character={script === 'hiragana' ? kana.hiragana : kana.katakana}
            romanji={kana.romanji}
          />
        ))}
      </div>
    </div>
  );
}
