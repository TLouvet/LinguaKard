interface TabsListProps {
  children: React.ReactNode;
}

export function TabsList({ children }: TabsListProps) {
  return (
    <div className="flex border-b border-gray-200 gap-1 overflow-x-auto scrollbar-none">
      {children}
    </div>
  );
}

interface TabsTriggerProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

export function TabsTrigger({ active, onClick, children }: TabsTriggerProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 text-sm font-medium -mb-px border-b-2 transition-colors capitalize cursor-pointer whitespace-nowrap shrink-0 ${
        active
          ? 'border-blue-600 text-blue-600'
          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
      }`}
    >
      {children}
    </button>
  );
}
