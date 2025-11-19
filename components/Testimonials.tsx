type Testimonial = {
  quote: string;
  name: string;
  title: string;
};

export default function Testimonials({ items }: { items: Testimonial[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {items.map((t, idx) => (
        <figure key={idx} className="card p-6">
          <blockquote className="text-slate-800">?{t.quote}?</blockquote>
          <figcaption className="mt-4 text-sm text-slate-600">
            <span className="font-semibold text-slate-900">{t.name}</span> ? {t.title}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
