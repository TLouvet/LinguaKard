import { useState } from 'react';
import { kanjiData, kanjiCategories } from '../data/kanji';
import type { KanjiCategory } from '../data/kanji';
import { KanjiCard } from './KanjiCard';
import { TabsList, TabsTrigger } from '../ui/Tabs';
import { Table, TableHead, TableBody, TableRow, TableHeader, TableCell } from '../ui/Table';
import { IconButton } from '../ui/IconButton';

type View = 'cards' | 'table';

export function KanjiStudyMode() {
  const [activeCategory, setActiveCategory] = useState<KanjiCategory>(kanjiCategories[0]);
  const [view, setView] = useState<View>('cards');
  const chars = kanjiData.filter(k => k.category === activeCategory);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-4 flex-wrap">
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

        <div className="flex gap-1 shrink-0 ml-auto">
          <IconButton active={view === 'cards'} label="Vue cartes" onClick={() => setView('cards')}>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" />
              <rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
            </svg>
          </IconButton>
          <IconButton active={view === 'table'} label="Vue tableau" onClick={() => setView('table')}>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M3 14h18M10 6v12M3 6h18a0 0 0 0 1 0 12H3a0 0 0 0 1 0-12z" />
            </svg>
          </IconButton>
        </div>
      </div>

      {view === 'cards' ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
          {chars.map(k => (
            <KanjiCard key={k.kanji} kanji={k} />
          ))}
        </div>
      ) : (
        <Table>
          <TableHead>
            <tr>
              <TableHeader>Kanji</TableHeader>
              <TableHeader>On'yomi</TableHeader>
              <TableHeader>Kun'yomi</TableHeader>
              <TableHeader>Signification</TableHeader>
            </tr>
          </TableHead>
          <TableBody>
            {chars.map(k => (
              <TableRow key={k.kanji}>
                <TableCell className="text-2xl font-bold text-gray-800">{k.kanji}</TableCell>
                <TableCell className="text-blue-500">{k.onyomi}</TableCell>
                <TableCell className="text-emerald-600">{k.kunyomi}</TableCell>
                <TableCell>{k.meaning}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}
