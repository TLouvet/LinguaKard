import { ArabicStudyMode } from '../components/ArabicStudyMode';
import { ArabicQuizMode } from '../components/ArabicQuizMode';
import { TabsList, TabsTrigger } from '../ui/Tabs';
import { useQueryState } from '../hooks/useQueryState';

export function ArabicPage() {
  const [tab, setTab] = useQueryState<'study' | 'quiz'>('tab', 'study');

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Alphabet arabe — أَبْجَدِيَّة</h1>
      <div className="mb-6">
        <TabsList>
          <TabsTrigger active={tab === 'study'} onClick={() => setTab('study')}>Étude</TabsTrigger>
          <TabsTrigger active={tab === 'quiz'} onClick={() => setTab('quiz')}>Quiz</TabsTrigger>
        </TabsList>
      </div>
      {tab === 'study' ? <ArabicStudyMode /> : <ArabicQuizMode key="arabic-quiz" />}
    </div>
  );
}
