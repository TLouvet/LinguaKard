import { kanaData } from '../data/kana';
import { StudyMode } from '../components/StudyMode';
import { QuizMode } from '../components/QuizMode';
import { Button } from '../ui/Button';
import { TabsList, TabsTrigger } from '../ui/Tabs';
import { useQueryState } from '../hooks/useQueryState';

export function KanaPage() {
  const [tab, setTab] = useQueryState<'study' | 'quiz'>('tab', 'study');
  const [script, setScript] = useQueryState<'hiragana' | 'katakana'>('script', 'hiragana');

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Kana</h1>
      <div className="flex items-center justify-between mb-6 gap-4 flex-wrap">
        <TabsList>
          <TabsTrigger active={tab === 'study'} onClick={() => setTab('study')}>Étude</TabsTrigger>
          <TabsTrigger active={tab === 'quiz'} onClick={() => setTab('quiz')}>Quiz</TabsTrigger>
        </TabsList>
        <div className="flex gap-2">
          <Button active={script === 'hiragana'} onClick={() => setScript('hiragana')}>Hiragana</Button>
          <Button active={script === 'katakana'} onClick={() => setScript('katakana')}>Katakana</Button>
        </div>
      </div>
      {tab === 'study'
        ? <StudyMode script={script} kanaData={kanaData} />
        : <QuizMode key={script} script={script} kanaData={kanaData} />
      }
    </div>
  );
}
