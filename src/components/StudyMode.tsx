import type { Kana } from '../data/kana';
import { kanaRows } from '../data/kana';
import { CharacterGrid } from './CharacterGrid';

interface StudyModeProps {
  script: 'hiragana' | 'katakana';
  kanaData: Kana[];
}

export function StudyMode({ script, kanaData }: StudyModeProps) {
  return (
    <div className="flex flex-col gap-1">
      {kanaRows.map(row => {
        const chars = kanaData.filter(k => k.row === row);
        if (chars.length === 0) return null;
        return (
          <CharacterGrid
            key={row}
            characters={chars}
            title={row}
            script={script}
          />
        );
      })}
    </div>
  );
}
