import type { Kana } from '../data/kana';
import { kanaRows } from '../data/kana';
import { KanaGrid } from './KanaGrid';

interface KanaStudyModeProps {
  script: 'hiragana' | 'katakana';
  kanaData: Kana[];
}

export function KanaStudyMode({ script, kanaData }: KanaStudyModeProps) {
  return (
    <div className="flex flex-col gap-1">
      {kanaRows.map(row => {
        const chars = kanaData.filter(k => k.row === row);
        if (chars.length === 0) return null;
        return (
          <KanaGrid
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
