import { useEffect, useState } from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const backendBase = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';
  const defaultLinkedIn = 'https://www.linkedin.com/in/evilvirus7/';

  useEffect(() => {
    let isMounted = true;
    async function fetchProfile() {
      try {
        setLoading(true);
        const url = new URL('/linkedin/scrape', backendBase);
        url.searchParams.set('url', defaultLinkedIn);
        const res = await fetch(url.toString());
        const data = await res.json();
        if (!res.ok) throw new Error(data?.detail || 'Failed to load profile');
        if (isMounted) setProfile(data);
      } catch (e) {
        if (isMounted) setError(String(e));
      } finally {
        if (isMounted) setLoading(false);
      }
    }
    fetchProfile();
    return () => {
      isMounted = false;
    };
  }, [backendBase]);

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
            Live profile import
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            {profile?.name ? (
              <>
                {profile.name}
              </>
            ) : (
              'Portfolio that adapts as you grow'
            )}
          </h1>

          <p className="text-slate-300 md:text-lg max-w-prose">
            {profile?.headline
              ? profile.headline
              : 'Showcase your work with a playful 3D hero, sleek sections, and an admin area to update details anytime.'}
          </p>

          {error && (
            <div className="text-sm text-rose-300 bg-rose-950/40 border border-rose-900/50 px-3 py-2 rounded-md">
              Could not load LinkedIn profile. You can still use the site normally.
            </div>
          )}

          {!error && (
            <div className="space-y-2">
              {loading && (
                <div className="text-sm text-slate-400">Loading your public profile…</div>
              )}
              {!loading && profile?.skills?.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {profile.skills.slice(0, 6).map((s, i) => (
                    <span key={i} className="text-xs px-2 py-1 rounded-md bg-white/10 border border-white/10 text-slate-200">
                      {s}
                    </span>
                  ))}
                </div>
              )}
            </div>
          )}

          <div className="flex flex-wrap gap-3">
            <a href="#projects" className="px-5 py-2.5 rounded-md bg-cyan-500 hover:bg-cyan-400 text-neutral-900 font-semibold transition-colors">View Projects</a>
            <a href="#contact" className="px-5 py-2.5 rounded-md border border-white/15 hover:bg-white/10 text-white transition-colors">Get in touch</a>
          </div>
        </div>
      </div>
    </section>
  );
}
