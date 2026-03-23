import { arabicData, arabicCategories } from '../data/arabic';
import { ArabicCard } from './ArabicCard';

export function ArabicStudyMode() {
  return (
    <div className="flex flex-col gap-6">
      {arabicCategories.map(category => {
        const letters = arabicData.filter(l => l.category === category);
        return (
          <div key={category}>
            <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
              {category}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2">
              {letters.map(l => (
                <ArabicCard key={l.letter} letter={l} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
