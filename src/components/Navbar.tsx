import { NavDropdown } from '../ui/NavDropdown';

const japaneseItems = [
  { to: '/kana', label: 'Kana' },
  { to: '/kanji', label: 'Kanji' },
];

const koreanItems = [
  { to: '/hangeul', label: 'Hangeul' },
  { to: '/korean-words', label: 'Vocabulaire' },
];

export function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 py-3 flex gap-6 items-center">
        <span className="font-bold text-gray-800 text-lg">LinguaKard</span>
        <NavDropdown label="Japonais" items={japaneseItems} />
        <NavDropdown label="Coréen" items={koreanItems} />
      </div>
    </nav>
  );
}
