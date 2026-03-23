import { useState } from 'react';
import { Button } from '../ui/Button';
import { KanjiStudyMode } from '../components/KanjiStudyMode';
import { KanjiQuizMode } from '../components/KanjiQuizMode';

type Tab = 'study' | 'quiz';

export function KanjiPage() {
  const [tab, setTab] = useState<Tab>('study');

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Kanji — JLPT N5</h1>
      <div className="flex gap-3 mb-6">
        <Button active={tab === 'study'} onClick={() => setTab('study')}>Étude</Button>
        <Button active={tab === 'quiz'} onClick={() => setTab('quiz')}>Quiz</Button>
      </div>
      {tab === 'study' ? <KanjiStudyMode /> : <KanjiQuizMode key="kanji-quiz" />}
    </div>
  );
}
