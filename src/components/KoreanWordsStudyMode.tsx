import { useState } from 'react';
import { koreanWordsData, koreanWordsCategories } from '../data/koreanWords';
import type { KoreanWordsCategory } from '../data/koreanWords';
import { KoreanWordCard } from './KoreanWordCard';
import { TabsList, TabsTrigger } from '../ui/Tabs';

export function KoreanWordsStudyMode() {
  const [activeCategory, setActiveCategory] = useState<KoreanWordsCategory>(koreanWordsCategories[0]);
  const words = koreanWordsData.filter(w => w.category === activeCategory);

  return (
    <div className="flex flex-col gap-4">
      <TabsList>
        {koreanWordsCategories.map(category => (
          <TabsTrigger
            key={category}
            active={activeCategory === category}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </TabsTrigger>
        ))}
      </TabsList>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
        {words.map(w => (
          <KoreanWordCard key={w.korean} word={w} />
        ))}
      </div>
    </div>
  );
}
