import { Gamepad2, Settings, User, LayoutGrid, Mail, Home as HomeIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Navigation() {
  const [currentHash, setCurrentHash] = useState(window.location.hash || '#');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash || '#');
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#', icon: HomeIcon },
    { name: 'About', href: '#about', icon: User },
    { name: 'Portfolio', href: '#portfolio', icon: LayoutGrid },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-4 bg-background-dark/40 backdrop-blur-md border-b border-primary/20 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 text-primary">
            <Gamepad2 className="w-8 h-8" />
            <h2 className="text-slate-100 text-xl font-bold tracking-widest uppercase hidden sm:block">TEGUH.EXE</h2>
          </div>
          
          <nav className="hidden md:flex items-center gap-2 bg-background-dark/50 p-1 rounded-full border border-primary/20">
            {navLinks.map((link) => {
              const isActive = currentHash === link.href || (currentHash === '' && link.href === '#');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 overflow-hidden group ${
                    isActive ? 'text-white' : 'text-slate-400 hover:text-primary'
                  }`}
                >
                  <span className="relative z-10">{link.name}</span>
                  {isActive && (
                    <div className="absolute inset-0 bg-primary/20 border border-primary/50 rounded-full z-0 shadow-[0_0_10px_rgba(244,37,175,0.5)]"></div>
                  )}
                  <div className="absolute inset-0 bg-primary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0 rounded-full"></div>
                </a>
              );
            })}
          </nav>
          
          <div className="flex gap-4">
            <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-white transition-colors shadow-[0_0_10px_rgba(244,37,175,0.2)] hover:shadow-[0_0_15px_rgba(244,37,175,0.6)]">
              <Settings className="w-5 h-5" />
            </button>
            <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-white transition-colors shadow-[0_0_10px_rgba(244,37,175,0.2)] hover:shadow-[0_0_15px_rgba(244,37,175,0.6)]">
              <User className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-background-dark/80 backdrop-blur-lg border-t border-primary/20 px-4 py-3 z-50">
        <div className="flex justify-around items-center">
          {navLinks.map((link) => {
            const isActive = currentHash === link.href || (currentHash === '' && link.href === '#');
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-all duration-300 ${
                  isActive ? 'text-primary bg-primary/10 shadow-[0_0_10px_rgba(244,37,175,0.2)]' : 'text-slate-400 hover:text-primary hover:bg-primary/5'
                }`}
              >
                <Icon className={`w-6 h-6 ${isActive ? 'animate-pulse' : ''}`} />
                <span className="text-[10px] font-bold uppercase tracking-tighter">{link.name}</span>
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}
