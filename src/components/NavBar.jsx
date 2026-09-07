import { useState } from 'react'

const links = [
	{ label: 'Features', href: '#features' },
	{ label: 'Product', href: '#product' },
	{ label: 'Solutions', href: '#solutions' },
	{ label: 'Pricing', href: '#pricing' },
	{ label: 'FAQ', href: '#faq' },
]

function NavBar() {
	const [menuOpen, setMenuOpen] = useState(false)

	const closeMenu = () => setMenuOpen(false)

	return (
		<header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-sm">
			<nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8" aria-label="Main navigation">
				<a href="#top" className="flex items-center gap-2 text-lg font-bold tracking-[0.18em] text-slate-950" onClick={closeMenu}>
					<span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-950 text-sm font-bold tracking-normal text-white">N</span>
					NOVA
				</a>

				<div className="hidden items-center gap-8 md:flex">
					{links.map((link) => (
						<a key={link.href} href={link.href} className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-600">
							{link.label}
						</a>
					))}
				</div>

				<a href="#get-started" className="hidden rounded-lg bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-600 md:inline-flex">
					Get Started
				</a>

				<button type="button" className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 transition-colors hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 md:hidden" aria-expanded={menuOpen} aria-controls="mobile-menu" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen((open) => !open)}>
					<span className="relative block h-5 w-5">
						<span className={`absolute left-0 top-1 block h-0.5 w-5 bg-current transition-transform ${menuOpen ? 'translate-y-1.5 rotate-45' : ''}`} />
						<span className={`absolute left-0 top-2.5 block h-0.5 w-5 bg-current transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
						<span className={`absolute left-0 top-4 block h-0.5 w-5 bg-current transition-transform ${menuOpen ? '-translate-y-1.5 -rotate-45' : ''}`} />
					</span>
				</button>
			</nav>

			{menuOpen && (
				<div id="mobile-menu" className="border-t border-slate-200 bg-white px-6 py-4 md:hidden">
					<div className="flex flex-col gap-1">
						{links.map((link) => (
							<a key={link.href} href={link.href} onClick={closeMenu} className="rounded-lg px-3 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-indigo-600">
								{link.label}
							</a>
						))}
						<a href="#get-started" onClick={closeMenu} className="mt-2 rounded-lg bg-slate-950 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-indigo-700 focus-visible:outline-2 focus-visible:outline-indigo-600">
							Get Started
						</a>
					</div>
				</div>
			)}
		</header>
	)
}

export default NavBar
