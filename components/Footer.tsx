import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200/60 bg-white">
      <div className="container-responsive py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-[var(--gradient-start)] to-[var(--gradient-end)]" />
            <span className="font-extrabold text-lg">Sona Educator</span>
          </div>
          <p className="text-slate-600 mt-4 text-sm">
            Build and grow a profitable digital business with modern strategies and practical education.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900">Explore</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li><Link className="hover:text-indigo-700" href="/products">Digital Products</Link></li>
            <li><Link className="hover:text-indigo-700" href="/courses">Courses</Link></li>
            <li><Link className="hover:text-indigo-700" href="/blog">Blog</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900">Company</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li><Link className="hover:text-indigo-700" href="/about">About</Link></li>
            <li><Link className="hover:text-indigo-700" href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900">Newsletter</h4>
          <p className="text-slate-600 mt-2 text-sm">Join 10,000+ founders getting weekly growth insights.</p>
          <form action="/api/subscribe" method="post" className="mt-3 flex gap-2">
            <input required name="email" type="email" placeholder="Enter your email" className="w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            <button className="btn btn-primary px-4">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="border-t border-slate-200/60">
        <div className="container-responsive py-6 text-sm text-slate-500 flex items-center justify-between">
          <p>? {new Date().getFullYear()} Sona Educator. All rights reserved.</p>
          <div className="flex gap-4">
            <Link className="hover:text-indigo-700" href="#">Privacy</Link>
            <Link className="hover:text-indigo-700" href="#">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
