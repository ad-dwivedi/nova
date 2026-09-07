const statistics = [
  { value: '40K+', label: 'Teams using NOVA' },
  { value: '98%', label: 'Customer satisfaction' },
  { value: '12M+', label: 'Tasks automated' },
  { value: '35%', label: 'Average productivity improvement' },
]

function Statistics() {
  return (
    <section className="bg-slate-950 px-6 py-16 text-white lg:px-8 lg:py-20"><div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-4">{statistics.map((statistic) => <div key={statistic.label} className="border-l border-slate-700 pl-5"><p className="text-3xl font-semibold tracking-tight sm:text-4xl">{statistic.value}</p><p className="mt-2 text-sm leading-6 text-slate-400">{statistic.label}</p></div>)}</div></section>
  )
}

export default Statistics