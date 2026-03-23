import { useState } from 'react';
import { HangeulStudyMode } from '../components/HangeulStudyMode';
import { HangeulQuizMode } from '../components/HangeulQuizMode';
import { TabsList, TabsTrigger } from '../ui/Tabs';

type Tab = 'study' | 'quiz';

export function HangeulPage() {
  const [tab, setTab] = useState<Tab>('study');

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Hangeul — 한글</h1>
      <div className="mb-6">
        <TabsList>
          <TabsTrigger active={tab === 'study'} onClick={() => setTab('study')}>Étude</TabsTrigger>
          <TabsTrigger active={tab === 'quiz'} onClick={() => setTab('quiz')}>Quiz</TabsTrigger>
        </TabsList>
      </div>
      {tab === 'study' ? <HangeulStudyMode /> : <HangeulQuizMode key="hangeul-quiz" />}
    </div>
  );
}
