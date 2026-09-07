const footerGroups = [
  { title: 'Product', links: [{ label: 'Features', href: '#features' }, { label: 'Solutions', href: '#solutions' }, { label: 'Pricing', href: '#pricing' }] },
  { title: 'Company', links: [{ label: 'About', href: '#' }, { label: 'Careers', href: '#' }, { label: 'Contact', href: '#' }] },
  { title: 'Resources', links: [{ label: 'Help Center', href: '#' }, { label: 'Documentation', href: '#' }, { label: 'Blog', href: '#' }] },
  { title: 'Legal', links: [{ label: 'Privacy', href: '#' }, { label: 'Terms', href: '#' }, { label: 'Security', href: '#' }] },
]

function Footer() {
  return (
    <footer className="bg-slate-950 px-6 py-14 text-white lg:px-8"><div className="mx-auto max-w-7xl"><div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]"><div className="max-w-xs"><a href="#top" className="flex items-center gap-2 text-lg font-bold tracking-[0.18em] text-white"><span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-sm tracking-normal text-slate-950">N</span>NOVA</a><p className="mt-5 text-sm leading-6 text-slate-400">One workspace for focused, productive teams.</p><div className="mt-6 flex gap-3"><a href="#" aria-label="NOVA on LinkedIn" className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 text-xs font-semibold text-slate-300 hover:border-slate-500 hover:text-white focus-visible:outline-2 focus-visible:outline-indigo-400">in</a><a href="#" aria-label="NOVA on X" className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 text-xs font-semibold text-slate-300 hover:border-slate-500 hover:text-white focus-visible:outline-2 focus-visible:outline-indigo-400">X</a></div></div><div className="grid grid-cols-2 gap-8 sm:grid-cols-4">{footerGroups.map((group) => <div key={group.title}><h3 className="text-sm font-semibold text-white">{group.title}</h3><ul className="mt-4 space-y-3">{group.links.map((link) => <li key={link.label}><a href={link.href} className="text-sm text-slate-400 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-indigo-400">{link.label}</a></li>)}</ul></div>)}</div></div><div className="mt-14 flex flex-col gap-3 border-t border-slate-800 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between"><p>© 2026 NOVA. All rights reserved.</p><p>Built for better work.</p></div></div></footer>
  )
}

export default Footer