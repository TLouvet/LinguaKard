import { useState } from 'react';
import { kanaData } from '../data/kana';
import { StudyMode } from '../components/StudyMode';
import { Button } from '../ui/Button';

export function StudyPage() {
  const [script, setScript] = useState<'hiragana' | 'katakana'>('hiragana');

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Mode Etude</h1>
      <div className="flex gap-3 mb-6">
        <Button active={script === 'hiragana'} onClick={() => setScript('hiragana')}>Hiragana</Button>
        <Button active={script === 'katakana'} onClick={() => setScript('katakana')}>Katakana</Button>
      </div>
      <StudyMode script={script} kanaData={kanaData} />
    </div>
  );
}
