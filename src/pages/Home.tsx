import { Gamepad2, Settings, User, Play, HelpCircle, GraduationCap, Users, Star, ChevronLeft, ChevronRight, Mail, LayoutGrid } from 'lucide-react';
import { useState } from 'react';
import TetrisGame from '../components/TetrisGame';

export default function Home() {
  const [isGameOpen, setIsGameOpen] = useState(false);

  return (
    <div className="flex h-full grow flex-col relative z-10">


      <main className="flex-1 flex flex-col items-center justify-start px-4 py-12 md:py-20 max-w-5xl mx-auto w-full">
        
        {/* Hero Section */}
        <div className="w-full flex flex-col items-center text-center gap-8">
          
          {/* Profile Picture */}
          <div className="relative group mt-4">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-1000"></div>
            <div className="relative bg-background-dark rounded-2xl p-1 border-2 border-primary/50">
              <img 
                src="https://drive.google.com/thumbnail?id=1OSf1mDwI7Xr5aARfVnDO2myx9D16tS7z&sz=w800" 
                alt="Teguh Firmansyah" 
                className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-[0_0_15px_rgba(244,37,175,0.5)] whitespace-nowrap">
              LVL 99 Master Educator
            </div>
          </div>

          {/* Hero Text */}
          <div className="flex flex-col gap-4 max-w-2xl mt-6">
            <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight tracking-tight uppercase">
              Level Up Your <br/><span className="text-primary">Learning!</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl font-medium leading-relaxed mt-2">
              Hi, I'm <span className="text-primary font-bold">Teguh Firmansyah Apriliana</span>. I build immersive, gamified education experiences that turn complex concepts into epic adventures.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-4 w-full max-w-sm mt-4">
            <button 
              onClick={() => setIsGameOpen(true)}
              className="group flex items-center justify-between px-6 py-4 bg-primary text-white rounded-lg font-bold text-lg tracking-widest hover:scale-105 transition-transform shadow-[0_0_20px_rgba(244,37,175,0.4)]"
            >
              <Play className="w-6 h-6 fill-current group-hover:translate-x-1 transition-transform" />
              <span>START GAME</span>
              <span className="w-6"></span>
            </button>
            <button className="group flex items-center justify-between px-6 py-4 bg-primary/5 text-primary border border-primary/30 rounded-lg font-bold text-lg tracking-widest hover:bg-primary/10 transition-all">
              <Settings className="w-6 h-6 group-hover:rotate-45 transition-transform" />
              <span>OPTIONS</span>
              <span className="w-6"></span>
            </button>
            <button className="group flex items-center justify-between px-6 py-4 bg-transparent text-slate-400 rounded-lg font-bold text-sm tracking-widest hover:text-primary transition-all mt-2">
              <HelpCircle className="w-6 h-6" />
              <span>HOW TO PLAY</span>
              <span className="w-6"></span>
            </button>
          </div>
        </div>

        {/* Stats HUD */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-24">
          <div className="flex flex-col gap-4 rounded-xl p-8 bg-primary/5 border border-primary/20 hover:border-primary/50 transition-colors group">
            <div className="flex items-center gap-3">
              <GraduationCap className="text-primary w-6 h-6" />
              <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Courses Taught</p>
            </div>
            <p className="text-white text-5xl font-bold leading-tight tabular-nums group-hover:text-primary transition-colors">85+</p>
            <div className="w-full bg-background-dark border border-primary/20 h-2 rounded-full mt-2 overflow-hidden">
              <div className="bg-primary h-full rounded-full w-[40%] shadow-[0_0_10px_rgba(244,37,175,0.8)]"></div>
            </div>
          </div>
          
          <div className="flex flex-col gap-4 rounded-xl p-8 bg-primary/5 border border-primary/20 hover:border-primary/50 transition-colors group">
            <div className="flex items-center gap-3">
              <Users className="text-primary w-6 h-6" />
              <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Students Reached</p>
            </div>
            <p className="text-white text-5xl font-bold leading-tight tabular-nums group-hover:text-primary transition-colors">12.5k</p>
            <div className="w-full bg-background-dark border border-primary/20 h-2 rounded-full mt-2 overflow-hidden">
              <div className="bg-primary h-full rounded-full w-[70%] shadow-[0_0_10px_rgba(244,37,175,0.8)]"></div>
            </div>
          </div>
          
          <div className="flex flex-col gap-4 rounded-xl p-8 bg-primary/5 border border-primary/20 hover:border-primary/50 transition-colors group">
            <div className="flex items-center gap-3">
              <Star className="text-primary w-6 h-6 fill-primary" />
              <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Success Rate</p>
            </div>
            <p className="text-white text-5xl font-bold leading-tight tabular-nums group-hover:text-primary transition-colors">98%</p>
            <div className="w-full bg-background-dark border border-primary/20 h-2 rounded-full mt-2 overflow-hidden">
              <div className="bg-primary h-full rounded-full w-[98%] shadow-[0_0_10px_rgba(244,37,175,0.8)]"></div>
            </div>
          </div>
        </div>

        {/* Footer/Select Level Label */}
        <div className="w-full mt-24 border-t border-primary/20 pt-12 pb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col gap-2 text-center md:text-left">
              <h2 className="text-white text-2xl font-bold leading-tight tracking-tight uppercase">Select Level</h2>
              <p className="text-slate-400 text-sm">Choose your path to explore my portfolio and achievements.</p>
            </div>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 px-5 py-3 bg-primary/10 hover:bg-primary/20 transition-colors rounded-lg text-primary text-xs font-bold border border-primary/30 tracking-widest">
                <ChevronLeft className="w-4 h-4" />
                PREV
              </button>
              <button className="flex items-center gap-2 px-5 py-3 bg-primary/10 hover:bg-primary/20 transition-colors rounded-lg text-primary text-xs font-bold border border-primary/30 tracking-widest">
                NEXT
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </main>

      {isGameOpen && <TetrisGame onClose={() => setIsGameOpen(false)} />}
    </div>
  );
}
