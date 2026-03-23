export interface HistoryEntry {
  title: string;
  body: string;
}

interface HistorySectionProps {
  items: HistoryEntry[];
}

export function HistorySection({ items }: HistorySectionProps) {
  return (
    <article className="prose prose-gray max-w-none space-y-6 py-4">
      {items.map(({ title, body }) => (
        <section key={title}>
          <h3 className="text-base font-semibold text-gray-800 mb-1">{title}</h3>
          <p className="text-gray-600 leading-relaxed">{body}</p>
        </section>
      ))}
    </article>
  );
}
