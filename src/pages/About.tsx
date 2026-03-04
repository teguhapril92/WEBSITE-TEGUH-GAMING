import { Gamepad2, Settings, Share2, User, Package, Zap, Save, ScrollText, Wand2, Brain, Lightbulb, Gem, Shield, Users, TrendingUp, ChevronDown } from 'lucide-react';

export default function About() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
      <div className="flex h-full grow flex-col relative z-10">


        <main className="flex-1 max-w-6xl mx-auto w-full p-4 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar Nav */}
          <aside className="lg:col-span-3 flex flex-col gap-4">
            <div className="flex flex-col gap-2 p-4 border-2 border-primary/20 rounded-xl bg-primary/5">
              <div className="flex items-center gap-3 px-3 py-3 rounded-lg bg-primary text-white shadow-[0_0_15px_rgba(244,37,175,0.3)]">
                <User className="w-5 h-5" />
                <p className="text-sm font-bold uppercase tracking-wider">Status</p>
              </div>
              <div className="flex items-center gap-3 px-3 py-3 rounded-lg text-slate-400 hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer" onClick={() => window.location.hash = '#portfolio'}>
                <Package className="w-5 h-5" />
                <p className="text-sm font-bold uppercase tracking-wider">Inventory</p>
              </div>
              <div className="flex items-center gap-3 px-3 py-3 rounded-lg text-slate-400 hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer">
                <Zap className="w-5 h-5" />
                <p className="text-sm font-bold uppercase tracking-wider">Skills</p>
              </div>
              <div className="flex items-center gap-3 px-3 py-3 rounded-lg text-slate-400 hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer">
                <Save className="w-5 h-5" />
                <p className="text-sm font-bold uppercase tracking-wider">Save Game</p>
              </div>
            </div>
          </aside>

          {/* Content Area */}
          <div className="lg:col-span-9 flex flex-col gap-8">
            {/* Hero Status Section */}
            <section className="flex flex-col md:flex-row items-center md:items-start gap-8 p-6 border-4 border-primary rounded-xl bg-primary/5 retro-gradient">
              <div className="relative">
                <div 
                  className="size-40 rounded-xl border-4 border-primary overflow-hidden bg-slate-800 bg-cover bg-center" 
                  title="8-bit style portrait of an educator character" 
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAfxEsi7ezWMxQT8oWXkpGw11GpPVuHki5-GL6vJXAPLC_fEUmHVSyvCas30JT2rFbGUZ6q7eU2juYaosAYOfYdTO2qacQv5XC_WZrrEJTZi_2k00-ysgf1d98hyqxiYbkghp4LQEZcAAfcEv-UjmqJBp1RACIROt70fpN7pJqXNkOt9EHrTY_1TuA7BsMJvWAmegQjhjAA-mkAWpkOvCHpnMrTdYa4epg-cDwFSRXwgxaWHkpIBX6Z0iBR1UX47edBmbSiK9vgN3Xx')" }}
                />
                <div className="absolute -bottom-3 -right-3 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full border-2 border-background-dark">LVL 30</div>
              </div>
              <div className="flex flex-col gap-4 flex-1 text-center md:text-left">
                <div>
                  <h1 className="text-slate-100 text-3xl font-bold tracking-tight mb-1">Teguh Firmansyah Apriliana</h1>
                  <p className="text-primary text-lg font-medium">Class: Scholar / Senior Educator</p>
                </div>
                {/* Stat Bars */}
                <div className="flex flex-col gap-3 max-w-sm w-full mx-auto md:mx-0">
                  <div className="w-full">
                    <div className="flex justify-between text-xs font-bold mb-1 uppercase tracking-tighter">
                      <span>HP: Wisdom</span>
                      <span>999 / 999</span>
                    </div>
                    <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
                      <div className="h-full bg-emerald-500 w-full shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="flex justify-between text-xs font-bold mb-1 uppercase tracking-tighter">
                      <span>MP: Pedagogy</span>
                      <span>500 / 500</span>
                    </div>
                    <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
                      <div className="h-full bg-blue-500 w-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Character Profile Section (Timeline) */}
            <section className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <ScrollText className="text-primary w-8 h-8" />
                <h2 className="text-slate-100 text-2xl font-bold uppercase tracking-tight">[ Character Profile ]</h2>
              </div>
              <div className="relative pl-8 border-l-2 border-primary/30 flex flex-col gap-10">
                {/* Career Journey */}
                <div className="relative">
                  <div className="absolute -left-[41px] top-0 size-5 bg-primary rounded-full border-4 border-background-dark shadow-[0_0_10px_rgba(244,37,175,0.5)]"></div>
                  <div className="flex flex-col gap-1">
                    <span className="text-primary font-bold text-sm uppercase tracking-widest">2018 - Present</span>
                    <h3 className="text-lg font-bold">Career Quest: Senior Educator</h3>
                    <p className="text-slate-400">Leading the educational frontlines, designing immersive learning experiences for the next generation of scholars.</p>
                  </div>
                </div>
                {/* Education */}
                <div className="relative">
                  <div className="absolute -left-[41px] top-0 size-5 bg-primary/40 rounded-full border-4 border-background-dark"></div>
                  <div className="flex flex-col gap-1">
                    <span className="text-primary/60 font-bold text-sm uppercase tracking-widest">2015 - 2017</span>
                    <h3 className="text-lg font-bold">Academic Ritual: Master of Pedagogy</h3>
                    <p className="text-slate-400">Mastered advanced teaching spells and psychological frameworks at the Grand Academy.</p>
                  </div>
                </div>
                {/* The Beginning */}
                <div className="relative">
                  <div className="absolute -left-[41px] top-0 size-5 bg-primary/20 rounded-full border-4 border-background-dark"></div>
                  <div className="flex flex-col gap-1">
                    <span className="text-primary/40 font-bold text-sm uppercase tracking-widest">2012</span>
                    <h3 className="text-lg font-bold">Tutorial Level: Teaching Assistant</h3>
                    <p className="text-slate-400">Initiated the journey into the world of education, gaining base XP and fundamental skills.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Passive Skills Section */}
            <section className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <Wand2 className="text-primary w-8 h-8" />
                <h2 className="text-slate-100 text-2xl font-bold uppercase tracking-tight">[ Passive Skills ]</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border-2 border-primary/20 rounded-xl bg-primary/5 hover:bg-primary/10 hover:border-primary/40 transition-colors">
                  <div className="flex gap-4 items-start">
                    <div className="p-2 bg-primary rounded shadow-[0_0_15px_rgba(244,37,175,0.4)]">
                      <Brain className="text-background-dark w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary uppercase text-sm mb-1 tracking-wider">Student-Centric Aura</h4>
                      <p className="text-sm text-slate-400">Increases student engagement by 50% by tailoring lessons to individual learning styles and interests.</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 border-2 border-primary/20 rounded-xl bg-primary/5 hover:bg-primary/10 hover:border-primary/40 transition-colors">
                  <div className="flex gap-4 items-start">
                    <div className="p-2 bg-primary rounded shadow-[0_0_15px_rgba(244,37,175,0.4)]">
                      <Lightbulb className="text-background-dark w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary uppercase text-sm mb-1 tracking-wider">Innovative Pedagogy</h4>
                      <p className="text-sm text-slate-400">Passively transforms mundane curriculum into interactive 8-bit quests and gamified challenges.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Core Values Section */}
            <section className="flex flex-col gap-6 mb-10">
              <div className="flex items-center gap-3">
                <Gem className="text-primary w-8 h-8" />
                <h2 className="text-slate-100 text-2xl font-bold uppercase tracking-tight">[ Core Values ]</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center text-center p-6 border-2 border-slate-800 rounded-xl hover:border-primary/50 hover:bg-primary/5 transition-all group">
                  <Shield className="w-10 h-10 text-slate-400 group-hover:text-primary mb-4 transition-colors" />
                  <h4 className="font-bold mb-2">Integrity</h4>
                  <p className="text-sm text-slate-500 group-hover:text-slate-400 transition-colors">The unbreakable shield of truth and ethics in every interaction.</p>
                </div>
                <div className="flex flex-col items-center text-center p-6 border-2 border-slate-800 rounded-xl hover:border-primary/50 hover:bg-primary/5 transition-all group">
                  <Users className="w-10 h-10 text-slate-400 group-hover:text-primary mb-4 transition-colors" />
                  <h4 className="font-bold mb-2">Inclusivity</h4>
                  <p className="text-sm text-slate-500 group-hover:text-slate-400 transition-colors">A party where every player, regardless of stats, belongs and thrives.</p>
                </div>
                <div className="flex flex-col items-center text-center p-6 border-2 border-slate-800 rounded-xl hover:border-primary/50 hover:bg-primary/5 transition-all group">
                  <TrendingUp className="w-10 h-10 text-slate-400 group-hover:text-primary mb-4 transition-colors" />
                  <h4 className="font-bold mb-2">Growth</h4>
                  <p className="text-sm text-slate-500 group-hover:text-slate-400 transition-colors">Continuous leveling through reflection, curiosity, and practice.</p>
                </div>
              </div>
            </section>
          </div>
        </main>

        {/* Footer Section */}
        <footer className="mt-auto py-8 border-t-2 border-primary/20 bg-primary/5 text-center">
          <p className="text-slate-500 text-sm uppercase tracking-[0.2em] font-bold">Press START to Collaborate</p>
          <div className="flex justify-center gap-6 mt-4">
            <ChevronDown className="text-primary w-6 h-6 animate-pulse" />
          </div>
        </footer>
      </div>
    </div>
  );
}
