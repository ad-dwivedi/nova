const solutions = [
  { icon: '↗', title: 'Startups', description: 'Move quickly, stay aligned, and do more with a small team.' },
  { icon: '◈', title: 'Product Teams', description: 'Bring planning, priorities, product execution, and visibility together.' },
  { icon: '✦', title: 'Marketing Teams', description: 'Coordinate campaigns, content workflows, and the people behind them.' },
  { icon: '▦', title: 'Enterprise Teams', description: 'Connect teams across the business with automation and visibility.' },
]

function Solutions() {
  return (
    <section id="solutions" className="border-b border-slate-200 bg-white px-6 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="text-sm font-semibold uppercase tracking-[0.16em] text-indigo-600">Made to move with you</p><h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Built for every kind of team</h2></div><p className="max-w-sm text-sm leading-6 text-slate-500">One flexible system for the different ways modern teams get great work done.</p></div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{solutions.map((solution) => <article key={solution.title} className="group rounded-2xl border border-slate-200 p-6 transition-colors hover:border-indigo-200 hover:bg-indigo-50/40"><span className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-lg text-indigo-600 transition-colors group-hover:bg-indigo-100">{solution.icon}</span><h3 className="mt-6 text-base font-semibold text-slate-900">{solution.title}</h3><p className="mt-2 min-h-12 text-sm leading-6 text-slate-600">{solution.description}</p><a href="#get-started" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-600">Explore solution <span aria-hidden="true">→</span></a></article>)}</div>
      </div>
    </section>
  )
}

export default Solutions