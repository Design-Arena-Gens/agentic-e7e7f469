import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full blur-3xl opacity-30 bg-gradient-to-tr from-[var(--gradient-start)] to-[var(--gradient-end)]" />
      <div className="container-responsive py-20 sm:py-28">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Build and Grow a Profitable Digital Business with Sona Educator
          </h1>
          <p className="mt-5 text-lg text-slate-600">
            Practical systems, products, and training to help you launch, scale, and monetize your digital business.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link href="#newsletter" className="btn btn-primary px-6 py-3">Get Started</Link>
            <Link href="/products" className="btn btn-secondary px-6 py-3">Browse Digital Products</Link>
          </div>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div className="card p-4">
              <p className="text-2xl font-bold">10k+</p>
              <p className="text-sm text-slate-600">Students</p>
            </div>
            <div className="card p-4">
              <p className="text-2xl font-bold">150+</p>
              <p className="text-sm text-slate-600">Resources</p>
            </div>
            <div className="card p-4">
              <p className="text-2xl font-bold">500k+</p>
              <p className="text-sm text-slate-600">YouTube Views</p>
            </div>
            <div className="card p-4">
              <p className="text-2xl font-bold">8+</p>
              <p className="text-sm text-slate-600">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
