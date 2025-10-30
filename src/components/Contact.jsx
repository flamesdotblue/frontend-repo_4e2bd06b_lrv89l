export default function Contact() {
  return (
    <section id="contact" className="bg-neutral-950 text-white">
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">Let’s build something</h2>
          <p className="text-slate-400 mt-2">Tell me about your project and timeline.</p>
        </div>

        <form
          className="grid md:grid-cols-2 gap-6 rounded-2xl border border-white/10 bg-white/5 p-6"
          onSubmit={(e) => {
            e.preventDefault();
            alert('Message sent! This will be connected to the backend later.');
          }}
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm text-slate-300 mb-1">Name</label>
              <input id="name" required className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-slate-300 mb-1">Email</label>
              <input id="email" type="email" required className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="you@example.com" />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="block text-sm text-slate-300 mb-1">Message</label>
            <textarea id="message" rows={6} required className="flex-1 rounded-md bg-white/5 border border-white/10 px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="What are we building?" />
            <div className="mt-4 flex justify-end">
              <button type="submit" className="px-5 py-2.5 rounded-md bg-cyan-500 text-neutral-900 font-semibold hover:bg-cyan-400 transition-colors">Send</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
