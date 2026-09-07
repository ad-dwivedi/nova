function CheckIcon() {
  return <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-700">&#10003;</span>
}

function Hero() {
  return (
    <section id="top" className="overflow-hidden border-b border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 pb-20 pt-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:pb-28 lg:pt-24">
        <div className="max-w-xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-700">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
            AI-powered productivity
          </div>
          <h1 className="max-w-lg text-5xl font-semibold leading-[1.08] tracking-tight text-slate-950 sm:text-6xl">
            Make space for your best work.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
            NOVA brings your tasks, team, and momentum into one intelligent workspace so every day moves with purpose.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#get-started" className="rounded-lg bg-indigo-600 px-5 py-3 text-center text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-600">Start for free</a>
            <a href="#demo" className="rounded-lg border border-slate-300 px-5 py-3 text-center text-sm font-semibold text-slate-700 transition-colors hover:border-slate-400 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-600">Book a demo</a>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm text-slate-500">
            <span className="flex items-center gap-2"><CheckIcon />No credit card required</span>
            <span className="flex items-center gap-2"><CheckIcon />Set up in 2 minutes</span>
          </div>
        </div>

        <div className="relative min-w-0">
          <div className="absolute -inset-6 -z-10 rounded-4xl bg-indigo-50/70" />
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_24px_70px_-28px_rgba(15,23,42,0.35)]">
            <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3 sm:px-5">
              <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-rose-300" /><span className="h-2.5 w-2.5 rounded-full bg-amber-300" /><span className="h-2.5 w-2.5 rounded-full bg-emerald-300" /></div>
              <span className="text-xs font-medium text-slate-400">nova.app / overview</span>
              <span className="h-6 w-6 rounded-full bg-indigo-100" />
            </div>
            <div className="grid min-h-97.5 grid-cols-[104px_1fr] sm:grid-cols-[150px_1fr]">
              <aside className="border-r border-slate-200 bg-slate-50 p-3 sm:p-4">
                <div className="mb-7 flex items-center gap-2 text-xs font-bold tracking-widest text-slate-800"><span className="flex h-6 w-6 items-center justify-center rounded-md bg-indigo-600 text-[10px] text-white">N</span><span className="hidden sm:inline">NOVA</span></div>
                <div className="space-y-1 text-[11px] font-medium text-slate-500 sm:text-xs">
                  <div className="rounded-md bg-indigo-100 px-2 py-2 text-indigo-700">Overview</div><div className="px-2 py-2">My tasks</div><div className="px-2 py-2">Projects</div><div className="px-2 py-2">Calendar</div>
                </div>
                <div className="mt-12 hidden text-[10px] font-bold uppercase tracking-widest text-slate-400 sm:block">Workspaces</div><div className="mt-2 hidden px-2 text-xs text-slate-500 sm:block">Product team</div>
              </aside>
              <div className="min-w-0 p-4 sm:p-6">
                <div className="flex items-start justify-between"><div><p className="text-xs font-medium text-slate-400">Monday, September 14</p><h2 className="mt-1 text-xl font-semibold text-slate-900">Good morning, Alex</h2></div><button type="button" className="rounded-md border border-slate-200 px-2 py-1 text-xs font-medium text-slate-500">This week</button></div>
                <div className="mt-6 grid gap-3 sm:grid-cols-3"><div className="rounded-xl border border-slate-200 p-3"><p className="text-[10px] font-medium uppercase tracking-wider text-slate-400">Focus time</p><p className="mt-2 text-xl font-semibold text-slate-900">4h 32m</p><p className="mt-1 text-[10px] text-emerald-600">+18% this week</p></div><div className="rounded-xl border border-slate-200 p-3"><p className="text-[10px] font-medium uppercase tracking-wider text-slate-400">Completed</p><p className="mt-2 text-xl font-semibold text-slate-900">24</p><p className="mt-1 text-[10px] text-slate-500">of 31 tasks</p></div><div className="rounded-xl border border-slate-200 p-3"><p className="text-[10px] font-medium uppercase tracking-wider text-slate-400">Streak</p><p className="mt-2 text-xl font-semibold text-slate-900">12 days</p><p className="mt-1 text-[10px] text-indigo-600">Keep it going</p></div></div>
                <div className="mt-5 rounded-xl border border-slate-200 p-4"><div className="flex items-center justify-between"><h3 className="text-xs font-semibold text-slate-800">Today&apos;s priorities</h3><span className="text-[10px] font-medium text-indigo-600">View all</span></div><div className="mt-3 space-y-3"><div className="flex items-center gap-2"><CheckIcon /><span className="flex-1 truncate text-xs text-slate-500 line-through">Review product brief</span><span className="text-[10px] text-slate-400">9:00</span></div><div className="flex items-center gap-2"><span className="h-5 w-5 shrink-0 rounded-full border-2 border-indigo-500" /><span className="flex-1 truncate text-xs font-medium text-slate-700">Prepare launch notes</span><span className="text-[10px] text-slate-400">11:30</span></div><div className="flex items-center gap-2"><span className="h-5 w-5 shrink-0 rounded-full border-2 border-slate-300" /><span className="flex-1 truncate text-xs text-slate-700">Team sync and feedback</span><span className="text-[10px] text-slate-400">14:00</span></div></div></div>
                <div className="mt-5 flex items-end justify-between rounded-xl bg-slate-950 p-4 text-white"><div><p className="text-[10px] font-medium text-slate-400">Weekly progress</p><p className="mt-1 text-sm font-semibold">You&apos;re on a roll</p></div><div className="flex h-9 items-end gap-1">{[20, 32, 25, 42, 36, 52, 64].map((height, index) => <span key={index} className={`w-2 rounded-t-sm ${index === 6 ? 'bg-indigo-400' : 'bg-slate-600'}`} style={{ height: `${height}%` }} />)}</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero