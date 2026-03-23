import { Link, useLocation } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

export function NavLink({ to, children }: NavLinkProps) {
  const { pathname } = useLocation();
  return (
    <Link
      to={to}
      className={`font-medium transition-colors ${
        pathname === to ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'
      }`}
    >
      {children}
    </Link>
  );
}
