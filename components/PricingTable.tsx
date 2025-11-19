type Plan = {
  name: string;
  price: string;
  features: string[];
  cta: string;
  popular?: boolean;
};

export default function PricingTable({ plans }: { plans: Plan[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {plans.map((plan) => (
        <div key={plan.name} className={`card p-6 ${plan.popular ? 'ring-2 ring-indigo-500' : ''}`}>
          <div className="flex items-baseline justify-between">
            <h3 className="font-bold text-xl text-slate-900">{plan.name}</h3>
            {plan.popular && (
              <span className="text-xs bg-indigo-50 text-indigo-700 px-2 py-1 rounded-lg font-semibold">Most Popular</span>
            )}
          </div>
          <p className="mt-2 text-3xl font-extrabold">{plan.price}</p>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            {plan.features.map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-indigo-500" />
                {f}
              </li>
            ))}
          </ul>
          <button className="btn btn-primary w-full mt-6 py-2">{plan.cta}</button>
        </div>
      ))}
    </div>
  );
}
