import { hangeulData, hangeulCategories } from '../data/hangeul';
import { HangeulCard } from './HangeulCard';

export function HangeulStudyMode() {
  return (
    <div className="flex flex-col gap-6">
      {hangeulCategories.map(category => {
        const chars = hangeulData.filter(h => h.category === category);
        return (
          <div key={category}>
            <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
              {category}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-2">
              {chars.map(h => (
                <HangeulCard key={h.character} hangeul={h} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
