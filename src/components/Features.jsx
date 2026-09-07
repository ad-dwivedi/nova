import { features } from '../data/features.js'

const iconPaths = {
  spark: <path d="m12 3 1.6 5.4L19 10l-5.4 1.6L12 17l-1.6-5.4L5 10l5.4-1.6L12 3Zm6.5 11 .6 2.4 2.4.6-2.4.6-.6 2.4-.6-2.4-2.4-.6 2.4-.6.6-2.4Z" />,
  tasks: <path d="M5 6.5h14M5 12h14M5 17.5h8M3.5 6.5h.01M3.5 12h.01M3.5 17.5h.01" />,
  team: <path d="M16 20v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 4 18.5V20m6-8a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm5.5-6.5a3 3 0 0 1 0 5.8M16 15h1.5a3.5 3.5 0 0 1 3.5 3.5V20" />,
  flow: <path d="M6 6h12M6 12h7m-7 6h12M18 4l2 2-2 2M13 10l2 2-2 2M18 16l2 2-2 2" />,
  insights: <path d="M4 19V9m5 10V5m5 14v-7m5 7V3" />,
  report: <path d="M5 20V4h14v16M8 8h8M8 12h8M8 16h5" />,
}

function FeatureIcon({ type }) {
  return <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600"><svg aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" viewBox="0 0 24 24">{iconPaths[type]}</svg></span>
}

function Features() {
  return (
    <section id="features" className="border-b border-slate-200 bg-white px-6 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-indigo-600">Everything in one place</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">The clarity to do work that lasts.</h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">NOVA gives ambitious teams the tools and context to move from scattered work to steady momentum.</p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article key={feature.title} className="rounded-2xl border border-slate-200 bg-white p-6 transition-shadow hover:shadow-[0_16px_36px_-24px_rgba(15,23,42,0.45)]">
              <FeatureIcon type={feature.icon} />
              <h3 className="mt-5 text-base font-semibold text-slate-900">{feature.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features