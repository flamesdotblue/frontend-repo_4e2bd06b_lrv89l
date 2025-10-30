import { useState } from 'react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const NavLinks = () => (
    <ul className="flex flex-col md:flex-row md:items-center gap-6 text-sm font-medium">
      <li><a href="#home" className="text-slate-300 hover:text-white transition-colors">Home</a></li>
      <li><a href="#projects" className="text-slate-300 hover:text-white transition-colors">Projects</a></li>
      <li><a href="#contact" className="text-slate-300 hover:text-white transition-colors">Contact</a></li>
      <li>
        <button onClick={() => setShowLogin(true)} className="px-4 py-2 rounded-md bg-white/10 text-white hover:bg-white/20 border border-white/10 backdrop-blur transition-colors">
          Admin
        </button>
      </li>
    </ul>
  );

  return (
    <>
      <nav className="fixed top-0 inset-x-0 z-50 bg-neutral-900/60 border-b border-white/10 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <a href="#home" className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-cyan-400"></span>
              <span className="text-white font-semibold tracking-wide">MyPortfolio</span>
            </a>

            <div className="hidden md:block">
              <NavLinks />
            </div>

            <button
              aria-label="Toggle menu"
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-200 hover:bg-white/10"
              onClick={() => setMobileOpen((v) => !v)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                {mobileOpen ? (
                  <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06z" clipRule="evenodd" />
                ) : (
                  <path fillRule="evenodd" d="M3.75 5.25a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5H4.5a.75.75 0 0 1-.75-.75zm0 6.75a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5H4.5a.75.75 0 0 1-.75-.75zm0 6.75a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5H4.5a.75.75 0 0 1-.75-.75z" clipRule="evenodd" />
                )}
              </svg>
            </button>
          </div>

          {mobileOpen && (
            <div className="md:hidden py-4 border-t border-white/10">
              <NavLinks />
            </div>
          )}
        </div>
      </nav>

      {showLogin && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="w-full max-w-sm rounded-xl border border-white/10 bg-neutral-900 p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white text-lg font-semibold">Admin Login</h3>
              <button
                aria-label="Close login"
                className="text-slate-300 hover:text-white"
                onClick={() => setShowLogin(false)}
              >
                ✕
              </button>
            </div>
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                alert('Login action will be connected to the backend.');
                setShowLogin(false);
              }}
            >
              <div>
                <label className="block text-sm text-slate-300 mb-1" htmlFor="email">Email</label>
                <input id="email" type="email" required placeholder="admin@example.com" className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1" htmlFor="password">Password</label>
                <input id="password" type="password" required placeholder="••••••••" className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
              </div>
              <button type="submit" className="w-full px-4 py-2 rounded-md bg-cyan-500 text-white hover:bg-cyan-400 transition-colors">Sign in</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
