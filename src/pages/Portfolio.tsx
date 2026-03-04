import { Gamepad2, User, Settings, GraduationCap, ClipboardList, LayoutGrid, Save, Terminal, Mic, Zap, Download, BookOpen, Medal, Award, BadgeCheck, Lock, Book, Eye, Code } from 'lucide-react';

export default function Portfolio() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-dark overflow-x-hidden">


      <div className="flex flex-1 flex-col lg:flex-row relative z-10">
        {/* Sidebar Menu */}
        <aside className="w-full lg:w-64 border-r border-primary/10 bg-primary/5 p-6 flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="bg-primary/20 border-2 border-primary rounded-full size-12 flex items-center justify-center overflow-hidden">
              <img 
                className="w-full h-full object-cover" 
                alt="8-bit style pixel art portrait of a teacher" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNzxPuKUlfF2bKeOiGVURk3aCXrhX4gXqSG9Le59xEf1smLAW4TbH6OZ5OymlnyevcDAKz7FGRcwJZq4fehnZdtx0nFNZ2plaYDlkB1qjIj2nTo2Cl_OAKzdERvNibzXW1rXuZv-u2np_jHVJ_mR26OmuE36K0jGrfqh0ZEAmLhRr0fJEfs_6YcLVveL1pCKhx7kuaXFw9CCvkkumGQE3sctR_KtlwMn5CC1xrCG-Rwg8fy45R6n-AldjG5Un_QBot_KUf5fzBQIIz"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-slate-100 text-base font-bold uppercase">Prof. Pixel</h1>
              <p className="text-primary text-xs font-bold">LVL 99 MASTER</p>
            </div>
          </div>
          <nav className="flex flex-col gap-2">
            <div className="flex items-center gap-3 px-4 py-3 rounded bg-primary text-white shadow-md cursor-pointer">
              <GraduationCap className="w-5 h-5" />
              <p className="text-sm font-bold uppercase tracking-wider">Achievements</p>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 rounded hover:bg-primary/10 text-slate-300 transition-colors cursor-pointer">
              <ClipboardList className="w-5 h-5" />
              <p className="text-sm font-bold uppercase tracking-wider">Mission Logs</p>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 rounded hover:bg-primary/10 text-slate-300 transition-colors cursor-pointer">
              <LayoutGrid className="w-5 h-5" />
              <p className="text-sm font-bold uppercase tracking-wider">Skill Tree</p>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 rounded hover:bg-primary/10 text-slate-300 transition-colors cursor-pointer">
              <Save className="w-5 h-5" />
              <p className="text-sm font-bold uppercase tracking-wider">Export PDF</p>
            </div>
          </nav>
          <div className="mt-auto pt-6 border-t border-primary/10">
            <p className="text-primary/60 text-[10px] uppercase font-bold tracking-widest mb-2">Current Buffs</p>
            <div className="flex gap-2">
              <div className="size-8 bg-primary/20 rounded flex items-center justify-center" title="Digital Native">
                <Terminal className="w-4 h-4 text-primary" />
              </div>
              <div className="size-8 bg-primary/20 rounded flex items-center justify-center" title="Empathetic Listener">
                <Mic className="w-4 h-4 text-primary" />
              </div>
              <div className="size-8 bg-primary/20 rounded flex items-center justify-center" title="Quick Grader">
                <Zap className="w-4 h-4 text-primary" />
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-6 md:p-10 flex flex-col gap-8">
          {/* Hero Section */}
          <section className="relative overflow-hidden rounded-xl border-2 border-primary bg-gradient-to-br from-primary/20 to-transparent p-8">
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <h2 className="text-slate-100 text-3xl font-bold uppercase tracking-tighter mb-2">Player Profile: Curriculum Architect</h2>
                <p className="text-slate-400 max-w-2xl font-medium">Specializing in Gamified Learning Environments and Digital Pedagogy. Over 10+ years of active duty in K-12 and Higher Ed sectors.</p>
              </div>
              <button className="bg-primary text-white px-6 py-3 rounded-lg font-bold uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] active:translate-y-1 active:shadow-none transition-all flex items-center gap-2">
                <Download className="w-5 h-5" /> Download Resume.exe
              </button>
            </div>
            <div className="absolute -right-16 -bottom-16 opacity-10">
              <BookOpen className="w-[200px] h-[200px]" />
            </div>
          </section>

          {/* Stats Grid */}
          <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="border border-primary/30 bg-primary/5 p-4 flex flex-col items-center justify-center text-center rounded">
              <span className="text-primary text-3xl font-bold">12</span>
              <span className="text-slate-500 text-xs uppercase font-bold tracking-widest">Years XP</span>
            </div>
            <div className="border border-primary/30 bg-primary/5 p-4 flex flex-col items-center justify-center text-center rounded">
              <span className="text-primary text-3xl font-bold">4.8k</span>
              <span className="text-slate-500 text-xs uppercase font-bold tracking-widest">Students Led</span>
            </div>
            <div className="border border-primary/30 bg-primary/5 p-4 flex flex-col items-center justify-center text-center rounded">
              <span className="text-primary text-3xl font-bold">15</span>
              <span className="text-slate-500 text-xs uppercase font-bold tracking-widest">Badges Earned</span>
            </div>
            <div className="border border-primary/30 bg-primary/5 p-4 flex flex-col items-center justify-center text-center rounded">
              <span className="text-primary text-3xl font-bold">98%</span>
              <span className="text-slate-500 text-xs uppercase font-bold tracking-widest">Success Rate</span>
            </div>
          </section>

          {/* Achievements / Qualifications */}
          <section>
            <div className="flex items-center gap-4 mb-6">
              <h3 className="text-primary text-xl font-bold uppercase tracking-widest flex items-center gap-2">
                <Medal className="w-6 h-6" /> Achievements Unlocked
              </h3>
              <div className="h-px flex-1 bg-primary/20"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Achievement 1 */}
              <div className="border-2 border-primary shadow-[4px_4px_0px_0px_#f425af] p-5 bg-background-dark hover:scale-[1.02] transition-transform">
                <div className="flex items-start gap-4">
                  <div className="size-14 bg-primary rounded flex items-center justify-center text-white shrink-0">
                    <Award className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-slate-100 font-bold uppercase text-sm leading-tight">Master of Education</h4>
                    <p className="text-primary text-xs font-bold mb-2">Digital Learning & Design</p>
                    <p className="text-slate-500 text-xs leading-relaxed italic">Unlocked at: University of Tech Excellence (2018)</p>
                  </div>
                </div>
              </div>
              {/* Achievement 2 */}
              <div className="border-2 border-primary shadow-[4px_4px_0px_0px_#f425af] p-5 bg-background-dark hover:scale-[1.02] transition-transform">
                <div className="flex items-start gap-4">
                  <div className="size-14 bg-primary/20 border-2 border-primary rounded flex items-center justify-center text-primary shrink-0">
                    <BadgeCheck className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-slate-100 font-bold uppercase text-sm leading-tight">Certified Gamification Prof</h4>
                    <p className="text-primary text-xs font-bold mb-2">International Game-Based Inst.</p>
                    <p className="text-slate-500 text-xs leading-relaxed italic">Unlocked at: Global Summit (2021)</p>
                  </div>
                </div>
              </div>
              {/* Achievement 3 */}
              <div className="border-2 border-primary shadow-[4px_4px_0px_0px_#f425af] p-5 bg-background-dark hover:scale-[1.02] transition-transform opacity-60">
                <div className="flex items-start gap-4">
                  <div className="size-14 bg-slate-800 border-2 border-slate-600 rounded flex items-center justify-center text-slate-400 shrink-0">
                    <Lock className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-slate-100 font-bold uppercase text-sm leading-tight">Doctorate of Pedagogy</h4>
                    <p className="text-slate-500 text-xs font-bold mb-2">In Progress...</p>
                    <p className="text-slate-500 text-xs leading-relaxed italic">Estimated Unlock: 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Mission Logs / Portfolio */}
          <section>
            <div className="flex items-center gap-4 mb-6">
              <h3 className="text-primary text-xl font-bold uppercase tracking-widest flex items-center gap-2">
                <Book className="w-6 h-6" /> Mission Logs
              </h3>
              <div className="h-px flex-1 bg-primary/20"></div>
            </div>
            <div className="space-y-6">
              {/* Log Item 1 */}
              <div className="flex gap-6 p-6 rounded-lg bg-primary/5 border border-primary/20 hover:border-primary/50 transition-colors">
                <div className="hidden md:block shrink-0 w-48 h-32 rounded bg-slate-700 overflow-hidden border-2 border-primary/30">
                  <img 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all" 
                    alt="Screenshot of a digital classroom game interface" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVCxLSMnlph_h_TIDA5mxuAWzaTyC8h9_U0sEEbTaGunsho5H3RtdaV2thEkn9RK3yLRCcC-qcG5BXGvGI9u25Bx2QAK1U-MIt9mPJzSTdW2lixwzSegc05QG_aUWReQdolLs39dEfhyttE6N43sz2gZ3sBtRjM7aoVZcRwN_RHLw6ggONf9rW4eMn6CJrPK76QqhDP8iQ8M7r3ABX3Ydxy0Ilwp9bC7ME1ck8QPTQfzS2wuAVCXL18LljiuGemYjmTXeNjTkRi-rO"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-bold text-slate-100 uppercase tracking-tight">Mission: The Digital Frontier</h4>
                    <span className="text-primary text-[10px] font-bold uppercase bg-primary/10 px-2 py-1 rounded">Project Documentation</span>
                  </div>
                  <p className="text-sm text-slate-400 mb-4">Developed a full-semester curriculum delivered entirely through a custom-built RPG interface. Increased student engagement metrics by 40% over traditional methods.</p>
                  <div className="flex gap-4">
                    <button className="text-primary text-xs font-bold uppercase flex items-center gap-1 hover:underline">
                      <Eye className="w-4 h-4" /> View Artifacts
                    </button>
                    <button className="text-primary text-xs font-bold uppercase flex items-center gap-1 hover:underline">
                      <Code className="w-4 h-4" /> Source Code
                    </button>
                  </div>
                </div>
              </div>
              {/* Log Item 2 */}
              <div className="flex gap-6 p-6 rounded-lg bg-primary/5 border border-primary/20 hover:border-primary/50 transition-colors">
                <div className="hidden md:block shrink-0 w-48 h-32 rounded bg-slate-700 overflow-hidden border-2 border-primary/30">
                  <img 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all" 
                    alt="Illustration of a collaborative student workshop" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnNAZ-uUmtqiuRDx9jkcXzrYzYm5yye8lndA3y4NKeMVnZ3x6wsMTX74HUudxKegRenop6F9StVa-AF1MlSGxXVZcNFj-356QaEFtT8LsHehegA_uyAmNrk_f6oyBtJSa2Px-UuwsQTjtSXSmL6bwJgQqGlUBRx7DI35EgxxLms01GHqUOg_pk9q6LPimR85FexSnMWnf6hflL0JgJuBlRN0pJ7sRGGctCg_mn4Y8XiF0ock9E8XmHZQk1FHh4L-TSD_BzIYebNa6n"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-bold text-slate-100 uppercase tracking-tight">Mission: Collaborative Questing</h4>
                    <span className="text-primary text-[10px] font-bold uppercase bg-primary/10 px-2 py-1 rounded">Peer Review</span>
                  </div>
                  <p className="text-sm text-slate-400 mb-4">Redesigned group projects into 'Guild Quests' with clear roles (Healer, Tank, DPS) to ensure equitable distribution of labor and accountability.</p>
                  <div className="flex gap-4">
                    <button className="text-primary text-xs font-bold uppercase flex items-center gap-1 hover:underline">
                      <Eye className="w-4 h-4" /> View Artifacts
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* Footer Status Bar */}
      <footer className="border-t border-primary/20 bg-background-dark px-6 py-3 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-[2px] relative z-10">
        <div className="flex items-center gap-4 mb-2 md:mb-0">
          <span className="text-primary">Status: Active Educator</span>
          <span className="text-slate-400">|</span>
          <span className="text-slate-500">Location: Virtual Campus 01</span>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-slate-500">HP:</span>
            <div className="w-24 h-2 bg-slate-800 rounded-full overflow-hidden">
              <div className="w-[85%] h-full bg-primary shadow-[0_0_10px_rgba(244,37,175,0.8)]"></div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-slate-500">MP:</span>
            <div className="w-24 h-2 bg-slate-800 rounded-full overflow-hidden">
              <div className="w-[92%] h-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>
            </div>
          </div>
          <span className="text-primary animate-pulse">Waiting for Input...</span>
        </div>
      </footer>
    </div>
  );
}
