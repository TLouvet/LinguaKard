import { useState } from 'react';
import { arabicData, arabicCategories } from '../data/arabic';
import type { ArabicCategory } from '../data/arabic';
import { ArabicCard } from './ArabicCard';
import { TabsList, TabsTrigger } from '../ui/Tabs';

export function ArabicStudyMode() {
  const [activeCategory, setActiveCategory] = useState<ArabicCategory>(arabicCategories[0]);
  const letters = arabicData.filter(l => l.category === activeCategory);

  return (
    <div className="flex flex-col gap-4">
      <TabsList>
        {arabicCategories.map(category => (
          <TabsTrigger
            key={category}
            active={activeCategory === category}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </TabsTrigger>
        ))}
      </TabsList>

      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2">
        {letters.map(l => (
          <ArabicCard key={l.letter} letter={l} />
        ))}
      </div>
    </div>
  );
}
