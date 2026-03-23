import { KoreanWordsStudyMode } from '../components/KoreanWordsStudyMode';
import { KoreanWordsQuizMode } from '../components/KoreanWordsQuizMode';
import { TabsList, TabsTrigger } from '../ui/Tabs';
import { useQueryState } from '../hooks/useQueryState';

export function KoreanWordsPage() {
  const [tab, setTab] = useQueryState<'study' | 'quiz'>('tab', 'study');

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Vocabulaire coréen</h1>
      <div className="mb-6">
        <TabsList>
          <TabsTrigger active={tab === 'study'} onClick={() => setTab('study')}>Étude</TabsTrigger>
          <TabsTrigger active={tab === 'quiz'} onClick={() => setTab('quiz')}>Quiz</TabsTrigger>
        </TabsList>
      </div>
      {tab === 'study' ? <KoreanWordsStudyMode /> : <KoreanWordsQuizMode key="korean-words-quiz" />}
    </div>
  );
}
