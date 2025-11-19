import Link from "next/link";

export type Product = {
  slug: string;
  title: string;
  description: string;
  price: number;
  badge?: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="card p-5 flex flex-col">
      <div className="aspect-[16/9] rounded-xl bg-gradient-to-tr from-[var(--gradient-start)] to-[var(--gradient-end)] mb-4" />
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-lg text-slate-900">{product.title}</h3>
          {product.badge && (
            <span className="text-xs bg-indigo-50 text-indigo-700 px-2 py-1 rounded-lg font-semibold">{product.badge}</span>
          )}
        </div>
        <p className="text-slate-600 mt-2 text-sm">{product.description}</p>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <p className="font-bold text-slate-900">${product.price.toFixed(2)}</p>
        <Link href={`/products/${product.slug}`} className="btn btn-secondary px-3 py-2">View Details</Link>
      </div>
    </div>
  );
}
