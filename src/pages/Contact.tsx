import { User, Terminal, Users, Share2, Info, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-background-dark">
      <div className="flex h-full grow flex-col relative z-10">


        <main className="flex-1 max-w-5xl mx-auto w-full px-6 py-12">
          {/* Hero Section */}
          <div className="flex flex-wrap justify-between items-end gap-6 mb-12">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-primary">
                <Terminal className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-[0.2em]">System Status: Online</span>
              </div>
              <h1 className="text-slate-100 text-5xl md:text-6xl font-black leading-tight tracking-[-0.033em] uppercase italic">RESOURCES & CONTACT</h1>
              <p className="text-primary/70 text-lg font-normal leading-normal max-w-xl">Access your inventory and transmit data to the developers. Equip yourself with the knowledge to level up.</p>
            </div>
          </div>

          {/* Loot Box Section */}
          <section className="mb-20">
            <div className="flex items-center gap-3 mb-8 border-l-4 border-primary pl-4">
              <h2 className="text-slate-100 text-2xl font-bold leading-tight tracking-wide uppercase">[ LOOT BOX ]</h2>
              <div className="h-px grow bg-border-dark"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Resource Card 1 */}
              <div className="group flex flex-col gap-4 p-4 rounded-xl bg-surface-dark border border-border-dark hover:border-primary transition-all cursor-pointer">
                <div className="relative w-full aspect-square overflow-hidden rounded-lg bg-background-dark">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent z-10"></div>
                  <img 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100" 
                    alt="Retro computer keyboard with neon pink lighting" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRJZpAijTybXRhpcppkGicC-breEJ3KJMnEcsP7G6wCwvlNSd5XtEX7_pdyIZy6VtlivVgGoeDVfasySPgFSga01CBwtQY67dYR-wEwtwv-zAsKynciiWoSy_k80t4ULIHkaOvYQwrxyr1aO4kovoWOxpRNveZEHdDO7kW5gvD_cGWEmo-sBC1xfyNkooexFkahKsFraWqbMnGRZLzZp7hQ7cEAz1LZB_BIqzllh50deSitWeo9k78AenSCP7UoobeLT1Pd8bbmRPT"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-2 right-2 z-20">
                    <span className="bg-primary text-white text-[10px] font-bold px-2 py-1 uppercase rounded-sm">Epic</span>
                  </div>
                </div>
                <div>
                  <p className="text-primary text-xs font-bold uppercase tracking-widest mb-1">Learning Module</p>
                  <p className="text-slate-100 text-lg font-bold leading-tight">Skill Module: XP Boost</p>
                  <p className="text-slate-400 text-sm mt-2 leading-relaxed">Optimize your learning path with our proprietary experience multipliers.</p>
                </div>
              </div>
              {/* Resource Card 2 */}
              <div className="group flex flex-col gap-4 p-4 rounded-xl bg-surface-dark border border-border-dark hover:border-primary transition-all cursor-pointer">
                <div className="relative w-full aspect-square overflow-hidden rounded-lg bg-background-dark">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent z-10"></div>
                  <img 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100" 
                    alt="Digital grid code lines and binary abstract" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDK-jhIEYk0UVYK4E71vyXCLm9FR7Y4S6tQQWtdo5YvihWZvmhe9cCmsYiAKqcDrFv4aa6DJvaJFJMGfIERna8c9zo0pz3LfshQKYc8QR7l1RmXMruVTPHf5-UdExF75fgGezvgDARSYtjYeCB2aW6HlESpH94z8QARuGsmtrg1LwOvveaHVOiuVNqMAKJKyFtYfQwqLOC-dxvPMMy0O7kUFdCmf_9LAbmgfMfFNeVLzrZ4VmCNSWmYlp4W-fXRvTXIiC9VtuhX81bM"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-2 right-2 z-20">
                    <span className="bg-blue-500 text-white text-[10px] font-bold px-2 py-1 uppercase rounded-sm">Rare</span>
                  </div>
                </div>
                <div>
                  <p className="text-primary text-xs font-bold uppercase tracking-widest mb-1">Presentation</p>
                  <p className="text-slate-100 text-lg font-bold leading-tight">Lecture Slides: Boss Fight</p>
                  <p className="text-slate-400 text-sm mt-2 leading-relaxed">Comprehensive tactics for overcoming high-difficulty technical challenges.</p>
                </div>
              </div>
              {/* Resource Card 3 */}
              <div className="group flex flex-col gap-4 p-4 rounded-xl bg-surface-dark border border-border-dark hover:border-primary transition-all cursor-pointer">
                <div className="relative w-full aspect-square overflow-hidden rounded-lg bg-background-dark">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent z-10"></div>
                  <img 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100" 
                    alt="Hand holding a retro gaming controller" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDn9uJ4aCOoTjR5C_9rybr8fboTWDJ2v549NDiSZxzUVMNWDVJxRniNnaXvPhCXoZW94ga6ljufNS439x80q0cUEGIylUiYQtips1Df03E4eNvmxNCZ_otN41gvjI-_rY4wcC4pVKXbUwr5bYttQwAwv5cc4Ey_g68EPZZaYZPkZE1r8Ambu2q4ncIJOulT2vLfLrDe37o9_h8LgYyGG8ENB84uxIyglvBwDp9_FrX6wiJM8ANlCGsl_s_1krQ91YYtOcEqicdezCuV"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-2 right-2 z-20">
                    <span className="bg-primary text-white text-[10px] font-bold px-2 py-1 uppercase rounded-sm">Epic</span>
                  </div>
                </div>
                <div>
                  <p className="text-primary text-xs font-bold uppercase tracking-widest mb-1">Video Content</p>
                  <p className="text-slate-100 text-lg font-bold leading-tight">Video: Speedrun Guide</p>
                  <p className="text-slate-400 text-sm mt-2 leading-relaxed">Master efficiency in deployment workflows with these visual tutorials.</p>
                </div>
              </div>
            </div>
          </section>

          {/* JRPG Style Contact Form */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="flex flex-col gap-8">
              <div>
                <div className="flex items-center gap-3 mb-6 border-l-4 border-primary pl-4">
                  <h2 className="text-slate-100 text-2xl font-bold leading-tight tracking-wide uppercase">[ GUILD LINKS ]</h2>
                </div>
                <div className="flex flex-col gap-4">
                  <a className="group flex items-center justify-between p-4 bg-surface-dark border border-border-dark rounded-lg hover:bg-primary/10 transition-all" href="#">
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-primary/20 text-primary rounded">
                        <Users className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-slate-100 font-bold">Join the Guild</p>
                        <p className="text-slate-400 text-xs">LinkedIn Community</p>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </a>
                  <a className="group flex items-center justify-between p-4 bg-surface-dark border border-border-dark rounded-lg hover:bg-primary/10 transition-all" href="#">
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-primary/20 text-primary rounded">
                        <Share2 className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-slate-100 font-bold">Network Updates</p>
                        <p className="text-slate-400 text-xs">Connect with Developers</p>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </a>
                </div>
              </div>
              <div className="p-6 bg-primary/5 border border-primary/20 rounded-xl italic text-primary/80 flex items-start gap-3">
                <Info className="w-6 h-6 shrink-0 mt-1" />
                <p>"A lone traveler is easily defeated, but a party of developers can conquer any bug." - Ancient README</p>
              </div>
            </div>

            <div className="relative">
              <div className="flex items-center gap-3 mb-6 border-l-4 border-primary pl-4">
                <h2 className="text-slate-100 text-2xl font-bold leading-tight tracking-wide uppercase">[ SEND MESSAGE ]</h2>
              </div>
              {/* JRPG Dialogue Style Container */}
              <div className="p-1 bg-gradient-to-b from-primary to-border-dark rounded-xl">
                <div className="bg-surface-dark rounded-lg p-6 border-2 border-slate-100/10">
                  <form className="space-y-6">
                    <div className="space-y-2">
                      <label className="block text-primary text-[10px] font-black uppercase tracking-[0.2em]">Character Name</label>
                      <input 
                        className="w-full bg-background-dark/50 border border-border-dark text-slate-100 focus:ring-1 focus:ring-primary focus:border-primary rounded px-4 py-3 placeholder:text-slate-600 font-medium outline-none transition-all" 
                        placeholder="Enter your handle..." 
                        type="text"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-primary text-[10px] font-black uppercase tracking-[0.2em]">Transmission Channel</label>
                      <input 
                        className="w-full bg-background-dark/50 border border-border-dark text-slate-100 focus:ring-1 focus:ring-primary focus:border-primary rounded px-4 py-3 placeholder:text-slate-600 font-medium outline-none transition-all" 
                        placeholder="email@server.com" 
                        type="email"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-primary text-[10px] font-black uppercase tracking-[0.2em]">Message Log</label>
                      <textarea 
                        className="w-full bg-background-dark/50 border border-border-dark text-slate-100 focus:ring-1 focus:ring-primary focus:border-primary rounded px-4 py-3 placeholder:text-slate-600 font-medium resize-none outline-none transition-all" 
                        placeholder="Input your quest details..." 
                        rows={4}
                      ></textarea>
                    </div>
                    <div className="flex items-center justify-between pt-4">
                      <div className="flex gap-2">
                        <span className="size-2 bg-primary rounded-full animate-pulse"></span>
                        <span className="size-2 bg-slate-600 rounded-full"></span>
                        <span className="size-2 bg-slate-600 rounded-full"></span>
                      </div>
                      <button 
                        className="flex items-center gap-3 bg-primary text-white font-black uppercase italic tracking-wider px-8 py-3 rounded hover:brightness-110 active:scale-95 transition-all shadow-[4px_4px_0px_0px_rgba(244,37,175,0.3)]" 
                        type="button"
                      >
                        Execute Command
                        <Send className="w-4 h-4" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              {/* UI Accents */}
              <div className="absolute -bottom-4 -right-4 size-16 border-r-2 border-b-2 border-primary rounded-br-xl pointer-events-none opacity-50"></div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-border-dark mt-20 py-10 px-6">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-primary font-black italic">TEGUH.EXE</span>
              <span className="text-slate-600 text-xs">© 2024 Level Up Labs. All rights reserved.</span>
            </div>
            <div className="flex gap-6">
              <a className="text-slate-400 hover:text-primary text-xs uppercase tracking-tighter transition-colors" href="#">Terms of Service</a>
              <a className="text-slate-400 hover:text-primary text-xs uppercase tracking-tighter transition-colors" href="#">Privacy Policy</a>
              <a className="text-slate-400 hover:text-primary text-xs uppercase tracking-tighter transition-colors" href="#">Bug Bounty</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
