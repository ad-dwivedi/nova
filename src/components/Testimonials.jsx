import { testimonials } from '../data/testimonials.js'

function Testimonials() {
  return (
    <section className="border-b border-slate-200 bg-slate-50/60 px-6 py-20 lg:px-8 lg:py-28"><div className="mx-auto max-w-7xl"><div className="max-w-2xl"><p className="text-sm font-semibold uppercase tracking-[0.16em] text-indigo-600">Good work, shared</p><h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Teams do their best work with NOVA.</h2></div><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{testimonials.map((testimonial) => <article key={testimonial.name} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6"><div className="flex gap-1 text-indigo-500" aria-label="5 out of 5 stars"><span aria-hidden="true">★</span><span aria-hidden="true">★</span><span aria-hidden="true">★</span><span aria-hidden="true">★</span><span aria-hidden="true">★</span></div><blockquote className="mt-6 flex-1 text-base leading-7 text-slate-700">&quot;{testimonial.quote}&quot;</blockquote><div className="mt-8 flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-700">{testimonial.initials}</span><div><p className="text-sm font-semibold text-slate-900">{testimonial.name}</p><p className="mt-0.5 text-xs text-slate-500">{testimonial.role}, {testimonial.company}</p></div></div></article>)}</div></div></section>
  )
}

export default Testimonials