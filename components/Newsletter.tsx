export default function Newsletter() {
  return (
    <section id="newsletter" className="container-responsive my-20">
      <div className="card p-8 md:p-10 bg-gradient-to-tr from-indigo-50 to-violet-50">
        <h2 className="section-title">Join the Sona Insider Newsletter</h2>
        <p className="section-subtitle">Actionable tips on audience growth, digital products, and marketing automation.</p>
        <form action="/api/subscribe" method="post" className="mt-6 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-3">
          <input required name="email" type="email" placeholder="Enter your email"
                 className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          <button className="btn btn-primary px-6 py-3">Subscribe Free</button>
        </form>
      </div>
    </section>
  );
}
