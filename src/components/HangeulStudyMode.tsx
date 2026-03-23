import { useState } from 'react';
import { hangeulData, hangeulCategories } from '../data/hangeul';
import type { HangeulCategory } from '../data/hangeul';
import { HangeulCard } from './HangeulCard';
import { TabsList, TabsTrigger } from '../ui/Tabs';

export function HangeulStudyMode() {
  const [activeCategory, setActiveCategory] = useState<HangeulCategory>(hangeulCategories[0]);
  const chars = hangeulData.filter(h => h.category === activeCategory);

  return (
    <div className="flex flex-col gap-4">
      <TabsList>
        {hangeulCategories.map(category => (
          <TabsTrigger
            key={category}
            active={activeCategory === category}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </TabsTrigger>
        ))}
      </TabsList>

      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-2">
        {chars.map(h => (
          <HangeulCard key={h.character} hangeul={h} />
        ))}
      </div>
    </div>
  );
}
