interface BadgeProps {
  children: React.ReactNode;
  variant?: 'blue' | 'green' | 'orange' | 'gray';
}

const variantStyles: Record<NonNullable<BadgeProps['variant']>, string> = {
  blue:   'bg-blue-100 text-blue-700',
  green:  'bg-green-100 text-green-700',
  orange: 'bg-orange-100 text-orange-600',
  gray:   'bg-gray-100 text-gray-600',
};

export function Badge({ children, variant = 'gray' }: BadgeProps) {
  return (
    <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold ${variantStyles[variant]}`}>
      {children}
    </span>
  );
}
