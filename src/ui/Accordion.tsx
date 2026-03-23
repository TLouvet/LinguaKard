import { useState } from 'react';

interface AccordionItemProps {
  question: string;
  answer: string;
}

function AccordionItem({ question, answer }: AccordionItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-none">
      <button
        className="w-full flex items-center justify-between gap-4 py-4 text-left text-gray-800 font-medium hover:text-blue-600 transition-colors cursor-pointer"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
      >
        <span>{question}</span>
        <span className={`text-gray-400 transition-transform duration-200 shrink-0 ${open ? 'rotate-180' : ''}`}>▾</span>
      </button>
      <div className={`grid transition-all duration-300 ease-in-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <p className="pb-4 text-sm text-gray-500 leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
}

interface AccordionProps {
  items: AccordionItemProps[];
}

export function Accordion({ items }: AccordionProps) {
  return (
    <div className="divide-y divide-gray-200 rounded-xl border border-gray-200 bg-white px-6">
      {items.map(item => (
        <AccordionItem key={item.question} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
}
