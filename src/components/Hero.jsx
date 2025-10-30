import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative bg-neutral-950 text-white pt-16">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-20 grid md:grid-cols-2 gap-10 items-center">
        <div className="relative h-[50vh] md:h-[70vh] rounded-2xl overflow-hidden border border-white/10">
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent" />
        </div>
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400" />
            Tech • Interactive • Modern
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Portfolio that adapts as you grow
          </h1>
          <p className="text-slate-300 md:text-lg max-w-prose">
            Showcase your work with a playful 3D hero, sleek sections, and an admin area to update details anytime.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#projects" className="px-5 py-2.5 rounded-md bg-cyan-500 hover:bg-cyan-400 text-neutral-900 font-semibold transition-colors">View Projects</a>
            <a href="#contact" className="px-5 py-2.5 rounded-md border border-white/15 hover:bg-white/10 text-white transition-colors">Get in touch</a>
          </div>
        </div>
      </div>
    </section>
  );
}
