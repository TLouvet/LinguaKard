interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

export function Button({ active, className = '', children, ...props }: ButtonProps) {
  const base = 'px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer';
  const variant = active
    ? 'bg-blue-600 text-white'
    : 'bg-gray-100 text-gray-700 hover:bg-gray-200';

  return (
    <button className={`${base} ${variant} ${className}`} {...props}>
      {children}
    </button>
  );
}
