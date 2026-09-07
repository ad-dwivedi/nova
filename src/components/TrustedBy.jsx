const companies = ['Vertex', 'Linear Labs', 'Northstar', 'Orbit', 'Elevate', 'Meridian']

function TrustedBy() {
  return (
    <section className="border-b border-slate-200 bg-slate-50/60 px-6 py-14 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-center text-sm font-medium text-slate-500">Trusted by teams building what&apos;s next</p>
        <div className="mt-8 grid grid-cols-2 items-center gap-x-6 gap-y-7 sm:grid-cols-3 lg:grid-cols-6">
          {companies.map((company) => <span key={company} className="text-center text-base font-semibold tracking-tight text-slate-400 sm:text-lg">{company}</span>)}
        </div>
      </div>
    </section>
  )
}

export default TrustedBy