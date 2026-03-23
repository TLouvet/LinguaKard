import { useState } from 'react';
import { kanjiData, kanjiCategories } from '../data/kanji';
import type { KanjiCategory } from '../data/kanji';
import { KanjiCard } from './KanjiCard';
import { TabsList, TabsTrigger } from '../ui/Tabs';

export function KanjiStudyMode() {
  const [activeCategory, setActiveCategory] = useState<KanjiCategory>(kanjiCategories[0]);
  const chars = kanjiData.filter(k => k.category === activeCategory);

  return (
    <div className="flex flex-col gap-4">
      <TabsList>
        {kanjiCategories.map(category => (
          <TabsTrigger
            key={category}
            active={activeCategory === category}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </TabsTrigger>
        ))}
      </TabsList>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
        {chars.map(k => (
          <KanjiCard key={k.kanji} kanji={k} />
        ))}
      </div>
    </div>
  );
}
