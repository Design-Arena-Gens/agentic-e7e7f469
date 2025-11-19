"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";

const nav = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Courses", href: "/courses" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="border-b border-slate-200/60 bg-white/80 backdrop-blur sticky top-0 z-40">
      <div className="container-responsive py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-[var(--gradient-start)] to-[var(--gradient-end)] shadow-soft" />
          <span className="font-extrabold text-xl tracking-tight">Sona Educator</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "text-sm font-medium hover:text-indigo-700 transition-colors",
                pathname === item.href ? "text-indigo-700" : "text-slate-600"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex gap-3">
          <Link href="/products" className="btn btn-secondary">Browse Digital Products</Link>
          <Link href="#newsletter" className="btn btn-primary">Get Started</Link>
        </div>
        <div className="md:hidden">
          {/* Simple mobile menu (non-interactive for now) */}
          <Link href="/products" className="btn btn-primary py-2 px-4">Menu</Link>
        </div>
      </div>
    </header>
  );
}
