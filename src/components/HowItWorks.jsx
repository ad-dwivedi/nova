const steps = [
  { number: '01', title: 'Connect', description: 'Connect your tools and workspace.' },
  { number: '02', title: 'Organize', description: 'Bring tasks, projects and priorities together.' },
  { number: '03', title: 'Automate', description: 'Let NOVA handle repetitive workflows.' },
  { number: '04', title: 'Improve', description: 'Use insights to continuously improve team productivity.' },
]

function HowItWorks() {
  return (
    <section className="border-b border-slate-200 bg-white px-6 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl"><div className="max-w-xl"><p className="text-sm font-semibold uppercase tracking-[0.16em] text-indigo-600">A better rhythm</p><h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">From busywork to better work</h2></div><div className="relative mt-12 grid gap-8 md:grid-cols-4 md:gap-6"><div className="absolute left-0 right-0 top-5 hidden h-px bg-slate-200 md:block" />{steps.map((step) => <div key={step.number} className="relative"><span className="relative flex h-10 w-10 items-center justify-center rounded-full border border-indigo-200 bg-white text-xs font-bold text-indigo-600">{step.number}</span><h3 className="mt-5 text-base font-semibold text-slate-900">{step.title}</h3><p className="mt-2 max-w-[220px] text-sm leading-6 text-slate-600">{step.description}</p></div>)}</div></div>
    </section>
  )
}

export default HowItWorks