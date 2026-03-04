import { useState, useEffect } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Navigation from './components/Navigation';

export default function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };
    
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="relative min-h-screen w-full flex flex-col overflow-x-hidden font-display bg-background-dark text-slate-100 selection:bg-primary/30 pb-20 md:pb-0">
      {/* Background Overlay for Retro Feel */}
      <div className="fixed inset-0 retro-scanlines z-50 opacity-20 pointer-events-none"></div>
      
      <Navigation />
      
      <div className="flex-1 flex flex-col pt-24 relative z-10">
        {currentHash === '#about' ? <About /> : currentHash === '#portfolio' ? <Portfolio /> : currentHash === '#contact' ? <Contact /> : <Home />}
      </div>
    </div>
  );
}
