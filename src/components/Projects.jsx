export default function Projects() {
  const projects = [
    {
      title: 'Interactive Dashboard',
      desc: 'Data-rich analytics with smooth micro-interactions.',
      tags: ['React', 'Tailwind', 'Charts'],
    },
    {
      title: 'E-commerce Experience',
      desc: 'High-converting storefront with polished UX.',
      tags: ['Next.js', 'Stripe', 'UX'],
    },
    {
      title: '3D Landing Page',
      desc: 'Immersive product storytelling with Spline.',
      tags: ['Spline', 'Framer Motion'],
    },
  ];

  return (
    <section id="projects" className="bg-neutral-950 text-white">
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
          <p className="text-slate-400 mt-2">A selection of work that blends usability and delight.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <article key={idx} className="group relative rounded-2xl border border-white/10 bg-white/5 p-5 overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-b from-transparent to-cyan-500/10 pointer-events-none" />
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-slate-300 mb-4">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-md bg-white/10 border border-white/10 text-slate-200">{t}</span>
                ))}
              </div>
              <button className="mt-5 inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300">
                <span>View case study</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M12.97 4.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06l4.72-4.72H4.5a.75.75 0 0 1 0-1.5h13.19l-4.72-4.72a.75.75 0 0 1 0-1.06z" clipRule="evenodd" />
                </svg>
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
