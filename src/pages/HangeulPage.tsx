import { HangeulStudyMode } from '../components/HangeulStudyMode';
import { HangeulQuizMode } from '../components/HangeulQuizMode';
import { TabsList, TabsTrigger } from '../ui/Tabs';
import { HistorySection } from '../ui/HistorySection';
import { hangeulHistory } from '../data/hangeulHistory';
import { useQueryState } from '../hooks/useQueryState';

export function HangeulPage() {
  const [tab, setTab] = useQueryState<'study' | 'quiz' | 'history'>('tab', 'study');

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Hangeul — 한글</h1>
      <div className="mb-6">
        <TabsList>
          <TabsTrigger active={tab === 'study'} onClick={() => setTab('study')}>Étude</TabsTrigger>
          <TabsTrigger active={tab === 'quiz'} onClick={() => setTab('quiz')}>Quiz</TabsTrigger>
          <TabsTrigger active={tab === 'history'} onClick={() => setTab('history')}>Histoire</TabsTrigger>
        </TabsList>
      </div>
      {tab === 'study' && <HangeulStudyMode />}
      {tab === 'quiz' && <HangeulQuizMode key="hangeul-quiz" />}
      {tab === 'history' && <HistorySection items={hangeulHistory} />}
    </div>
  );
}
