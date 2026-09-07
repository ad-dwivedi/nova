const benefits = ['One workspace for every priority', 'Context that stays with the work', 'A calmer way to keep momentum']
const projects = [
  { name: 'Website refresh', owner: 'Design team', progress: '82%', color: 'bg-indigo-500' },
  { name: 'Q4 launch plan', owner: 'Growth team', progress: '54%', color: 'bg-emerald-500' },
  { name: 'Mobile experience', owner: 'Product team', progress: '36%', color: 'bg-amber-400' },
]

function Product() {
  return (
    <section id="product" className="overflow-hidden border-b border-slate-200 bg-slate-50/60 px-6 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="max-w-lg">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-indigo-600">One unified workspace</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Your work, with room to think.</h2>
          <p className="mt-5 text-base leading-7 text-slate-600">NOVA brings planning, collaboration, and delivery into a single calm workspace. Everyone sees what matters, when it matters.</p>
          <ul className="mt-8 space-y-4">
            {benefits.map((benefit) => <li key={benefit} className="flex items-center gap-3 text-sm font-medium text-slate-700"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-700">&#10003;</span>{benefit}</li>)}
          </ul>
        </div>

        <div className="min-w-0 rounded-2xl border border-slate-200 bg-white shadow-[0_24px_70px_-28px_rgba(15,23,42,0.3)]">
          <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3"><div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-rose-300" /><span className="h-2.5 w-2.5 rounded-full bg-amber-300" /><span className="h-2.5 w-2.5 rounded-full bg-emerald-300" /></div><span className="text-xs font-medium text-slate-400">Product team / workspace</span><span className="h-6 w-6 rounded-full bg-slate-100" /></div>
          <div className="grid min-h-97.5 grid-cols-[92px_1fr] sm:grid-cols-[148px_1fr]">
            <aside className="border-r border-slate-200 bg-slate-50 p-3 sm:p-4"><div className="mb-7 flex items-center gap-2 text-xs font-bold tracking-widest text-slate-800"><span className="flex h-6 w-6 items-center justify-center rounded-md bg-slate-950 text-[10px] text-white">N</span><span className="hidden sm:inline">NOVA</span></div><p className="mb-2 hidden px-2 text-[10px] font-bold uppercase tracking-widest text-slate-400 sm:block">Workspace</p><div className="space-y-1 text-[11px] font-medium text-slate-500 sm:text-xs"><div className="rounded-md bg-indigo-100 px-2 py-2 text-indigo-700">All projects</div><div className="px-2 py-2">My work</div><div className="px-2 py-2">Team activity</div></div></aside>
            <div className="min-w-0 p-4 sm:p-6"><div className="flex items-start justify-between"><div><p className="text-xs font-medium text-slate-400">Workspace overview</p><h3 className="mt-1 text-lg font-semibold text-slate-900">Project pulse</h3></div><span className="rounded-md bg-emerald-50 px-2 py-1 text-[10px] font-semibold text-emerald-700">On track</span></div><div className="mt-5 grid gap-3 sm:grid-cols-3"><div className="rounded-xl bg-slate-950 p-3 text-white"><p className="text-[10px] text-slate-400">Open tasks</p><p className="mt-2 text-xl font-semibold">48</p></div><div className="rounded-xl border border-slate-200 p-3"><p className="text-[10px] text-slate-400">Completed</p><p className="mt-2 text-xl font-semibold text-slate-900">76%</p></div><div className="rounded-xl border border-slate-200 p-3"><p className="text-[10px] text-slate-400">Active now</p><p className="mt-2 text-xl font-semibold text-slate-900">12</p></div></div><div className="mt-5 rounded-xl border border-slate-200 p-4"><div className="flex items-center justify-between"><h4 className="text-xs font-semibold text-slate-800">Active projects</h4><span className="text-[10px] text-indigo-600">See all</span></div><div className="mt-4 space-y-4">{projects.map((project) => <div key={project.name}><div className="flex items-center justify-between gap-3"><div className="min-w-0"><p className="truncate text-xs font-medium text-slate-700">{project.name}</p><p className="mt-1 text-[10px] text-slate-400">{project.owner}</p></div><span className="text-[10px] font-semibold text-slate-500">{project.progress}</span></div><div className="mt-2 h-1.5 rounded-full bg-slate-100"><div className={`h-1.5 rounded-full ${project.color}`} style={{ width: project.progress }} /></div></div>)}</div></div><div className="mt-5 flex items-center gap-3"><div className="flex -space-x-2"><span className="h-7 w-7 rounded-full border-2 border-white bg-indigo-200" /><span className="h-7 w-7 rounded-full border-2 border-white bg-amber-200" /><span className="h-7 w-7 rounded-full border-2 border-white bg-emerald-200" /></div><p className="text-[11px] text-slate-500"><strong className="font-semibold text-slate-700">8 teammates</strong> active in the last hour</p></div></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Product