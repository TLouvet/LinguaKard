interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  label: string; // for accessibility
}

export function IconButton({ active, label, children, ...props }: IconButtonProps) {
  return (
    <button
      aria-label={label}
      title={label}
      className={`p-2 rounded-lg transition-colors cursor-pointer ${
        active
          ? 'bg-blue-600 text-white'
          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
      }`}
      {...props}
    >
      {children}
    </button>
  );
}
