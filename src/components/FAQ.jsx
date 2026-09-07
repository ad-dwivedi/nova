import { useState } from 'react'
import { faqItems } from '../data/faq.js'

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="faq" className="border-b border-slate-200 bg-slate-50/60 px-6 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-3xl">
        <div className="text-center"><p className="text-sm font-semibold uppercase tracking-[0.16em] text-indigo-600">Questions, answered</p><h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Everything you need to know.</h2><p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-600">A few useful details about bringing NOVA into your team&apos;s day-to-day.</p></div>
        <div className="mt-12 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white px-5 sm:px-7">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index
            return <div key={item.question} className="py-1"><button type="button" aria-expanded={isOpen} aria-controls={`faq-answer-${index}`} onClick={() => setOpenIndex(isOpen ? null : index)} className="flex w-full items-center justify-between gap-5 py-5 text-left text-sm font-semibold text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"><span>{item.question}</span><span aria-hidden="true" className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-slate-200 text-lg font-normal text-slate-500">{isOpen ? '−' : '+'}</span></button><div id={`faq-answer-${index}`} className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}><div className="overflow-hidden"><p className="max-w-2xl pb-5 pr-10 text-sm leading-6 text-slate-600">{item.answer}</p></div></div></div>
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQ