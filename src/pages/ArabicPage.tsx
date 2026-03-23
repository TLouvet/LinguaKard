import { ArabicStudyMode } from '../components/ArabicStudyMode';
import { ArabicQuizMode } from '../components/ArabicQuizMode';
import { TabsList, TabsTrigger } from '../ui/Tabs';
import { HistorySection } from '../ui/HistorySection';
import { arabicHistory } from '../data/arabicHistory';
import { useQueryState } from '../hooks/useQueryState';

export function ArabicPage() {
  const [tab, setTab] = useQueryState<'study' | 'quiz' | 'history'>('tab', 'study');

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Alphabet arabe — أَبْجَدِيَّة</h1>
      <div className="mb-6">
        <TabsList>
          <TabsTrigger active={tab === 'study'} onClick={() => setTab('study')}>Étude</TabsTrigger>
          <TabsTrigger active={tab === 'quiz'} onClick={() => setTab('quiz')}>Quiz</TabsTrigger>
          <TabsTrigger active={tab === 'history'} onClick={() => setTab('history')}>Histoire</TabsTrigger>
        </TabsList>
      </div>
      {tab === 'study' && <ArabicStudyMode />}
      {tab === 'quiz' && <ArabicQuizMode key="arabic-quiz" />}
      {tab === 'history' && <HistorySection items={arabicHistory} />}
    </div>
  );
}
