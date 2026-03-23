import { NavDropdown } from '../ui/NavDropdown';
import { Link } from 'react-router-dom';

const japaneseItems = [
  { to: '/kana', label: 'Kana' },
  { to: '/kanji', label: 'Kanji' },
];

const koreanItems = [
  { to: '/hangeul', label: 'Hangeul' },
  { to: '/korean-words', label: 'Vocabulaire' },
];

const arabicItems = [
  { to: '/arabic', label: 'Alphabet' },
];

export function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 py-3 flex gap-6 items-center">
        <Link to="/" className="font-bold text-gray-800 text-lg hover:text-blue-600 transition-colors">LinguaKard</Link>
        <NavDropdown label="Japonais" items={japaneseItems} />
        <NavDropdown label="Coréen" items={koreanItems} />
        <NavDropdown label="Arabe" items={arabicItems} />
      </div>
    </nav>
  );
}
