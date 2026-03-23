import { useState, useRef, useEffect } from 'react';
import { NavLink } from './NavLink';

interface NavDropdownItem {
  to: string;
  label: string;
}

interface NavDropdownProps {
  label: string;
  items: NavDropdownItem[];
}

export function NavDropdown({ label, items }: NavDropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(o => !o)}
        className="flex items-center gap-1 font-medium text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
      >
        {label}
        <svg
          className={`w-3.5 h-3.5 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-2 w-36 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-50">
          {items.map(item => (
            <div key={item.to} onClick={() => setOpen(false)} className="px-3 py-1.5 hover:bg-gray-50">
              <NavLink to={item.to}>{item.label}</NavLink>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
