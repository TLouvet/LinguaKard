import { useState } from 'react';
import { kanaData } from '../data/kana';
import { QuizMode } from '../components/QuizMode';
import { Button } from '../ui/Button';

export function QuizPage() {
  const [script, setScript] = useState<'hiragana' | 'katakana'>('hiragana');

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Mode Quiz</h1>
      <div className="flex gap-3 mb-6 justify-center">
        <Button active={script === 'hiragana'} onClick={() => setScript('hiragana')}>Hiragana</Button>
        <Button active={script === 'katakana'} onClick={() => setScript('katakana')}>Katakana</Button>
      </div>
      <QuizMode key={script} script={script} kanaData={kanaData} />
    </div>
  );
}
