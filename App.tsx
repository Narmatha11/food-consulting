
import React, { useState } from 'react';
import { 
  Factory, 
  Settings, 
  ShieldCheck, 
  Users, 
  Activity, 
  Globe, 
  Mail, 
  Phone, 
  ChevronRight, 
  Award,
  Zap,
  Sparkles,
  Package,
  Cpu,
  ArrowRight,
  Target,
  X,
  CheckCircle2
} from 'lucide-react';
import { resumeData } from './data';

const Nav = ({ onHireClick }: { onHireClick: () => void }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Offset for the fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl">
      <div className="glass-card rounded-2xl px-8 py-4 flex justify-between items-center shadow-2xl">
        <div 
          className="font-outfit font-extrabold text-2xl tracking-tighter cursor-pointer select-none group uppercase" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          SAMPATH <span className="text-sky-400 group-hover:text-pink-500 transition-colors">KUMAR</span>
        </div>
        
        <div className="hidden md:flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
          <button onClick={() => scrollToSection('vision')} className="hover:text-white transition-colors cursor-pointer">Vision</button>
          <button onClick={() => scrollToSection('pillars')} className="hover:text-white transition-colors cursor-pointer">Pillars</button>
          <button onClick={() => scrollToSection('journey')} className="hover:text-white transition-colors cursor-pointer">Journey</button>
          <button onClick={() => scrollToSection('matrix')} className="hover:text-white transition-colors cursor-pointer">Matrix</button>
        </div>

        <button 
          onClick={onHireClick}
          className="bg-gradient-to-r from-sky-500 to-indigo-600 text-white px-5 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] hover:scale-105 active:scale-95 transition-all"
        >
          Hire Expert
        </button>
      </div>
    </nav>
  );
};

const FeatureTag = ({ text, color }: { text: string, color: string }) => (
  <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/10 glass-card bg-opacity-10 ${color}`}>
    {text}
  </span>
);

const Modal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-950/80 backdrop-blur-xl animate-in fade-in duration-300">
      <div className="glass-card w-full max-w-2xl rounded-[40px] overflow-hidden border-white/20 relative shadow-3xl">
        <button onClick={onClose} className="absolute top-8 right-8 text-slate-500 hover:text-white transition-colors z-10">
          <X size={24} />
        </button>

        <div className="p-10 md:p-16">
          {!submitted ? (
            <>
              <div className="flex gap-2 mb-8">
                {[1, 2].map((s) => (
                  <div key={s} className={`h-1 flex-1 rounded-full transition-all duration-500 ${step >= s ? 'bg-sky-500' : 'bg-white/10'}`}></div>
                ))}
              </div>

              {step === 1 ? (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <h3 className="text-3xl font-outfit font-extrabold mb-4 uppercase tracking-tighter">Engagement <span className="text-sky-400">Blueprint</span></h3>
                  <p className="text-slate-400 mb-8">Connect with 35+ years of industrial excellence through our verified process.</p>
                  
                  <div className="space-y-4 mb-10">
                    {[
                      { icon: <Target className="text-sky-400" />, title: "01. Situational Analysis", desc: "Identification of bottlenecks and production gaps." },
                      { icon: <Settings className="text-pink-400" />, title: "02. Strategy Mapping", desc: "SOP development and equipment stabilization plans." },
                      { icon: <Zap className="text-amber-400" />, title: "03. Execution Cycle", desc: "Hands-on implementation and team upskilling." }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-6 p-4 rounded-2xl bg-white/5 border border-white/5 group hover:bg-white/10 transition-colors">
                        <div className="flex-shrink-0 group-hover:scale-110 transition-transform">{item.icon}</div>
                        <div>
                          <h4 className="text-sm font-bold uppercase tracking-wider">{item.title}</h4>
                          <p className="text-xs text-slate-500">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button 
                    onClick={() => setStep(2)}
                    className="w-full py-4 bg-white text-slate-950 rounded-2xl font-bold uppercase tracking-widest hover:bg-sky-400 transition-colors flex items-center justify-center gap-2 group"
                  >
                    Proceed to Portal <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="animate-in fade-in slide-in-from-right-4 duration-500">
                  <h3 className="text-3xl font-outfit font-extrabold mb-4 uppercase tracking-tighter">Inquiry <span className="text-pink-400">Terminal</span></h3>
                  <div className="space-y-4">
                    <input required type="text" placeholder="Your Organization" className="w-full p-4 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:border-sky-500 transition-colors" />
                    <input required type="email" placeholder="Professional Email" className="w-full p-4 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:border-sky-500 transition-colors" />
                    <textarea placeholder="Tell us about your facility or R&D requirements..." className="w-full p-4 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:border-sky-500 transition-colors h-32"></textarea>
                    <div className="flex gap-4">
                      <button type="button" onClick={() => setStep(1)} className="px-6 py-4 border border-white/10 rounded-2xl font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors">Back</button>
                      <button type="submit" className="flex-1 py-4 bg-gradient-to-r from-sky-500 to-indigo-600 rounded-2xl font-bold uppercase tracking-widest hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-all">Connect Now</button>
                    </div>
                  </div>
                </form>
              )}
            </>
          ) : (
            <div className="text-center animate-in zoom-in duration-500 py-10">
              <div className="w-24 h-24 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_40px_rgba(16,185,129,0.3)] border border-emerald-500/30">
                <CheckCircle2 size={48} className="text-emerald-500" />
              </div>
              <h3 className="text-4xl font-outfit font-extrabold mb-4 uppercase">Protocol <span className="text-emerald-500">Accepted</span></h3>
              <p className="text-slate-400 max-w-sm mx-auto mb-10">We have received your technical inquiry. Our industrial strategist will contact you shortly.</p>
              <button onClick={onClose} className="px-10 py-4 bg-white/5 border border-white/10 rounded-2xl font-bold uppercase tracking-widest hover:bg-white/10 transition-colors">End Session</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Nav onHireClick={() => setIsModalOpen(true)} />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Hero Section */}
      <section id="vision" className="relative pt-48 pb-32 px-6 overflow-hidden scroll-mt-24">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-sky-500/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-pink-500/10 rounded-full blur-[100px] animate-pulse delay-700"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 mb-8 bg-white/5 border border-white/10 px-4 py-2 rounded-2xl animate-float">
            <Sparkles className="text-amber-400" size={16} />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-sky-400">35 Years of Global Tenure</span>
          </div>
          
          <h1 className="text-6xl md:text-9xl font-outfit font-extrabold tracking-tighter leading-none mb-8">
            REDEFINING <br />
            <span className="text-gradient">INDUSTRIAL</span> <br />
            EXCELLENCE.
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed mb-12">
            A world-class authority in food production infrastructure, stabilizing high-volume greenfield projects across three continents.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <FeatureTag text="Project Lead" color="text-sky-400" />
            <FeatureTag text="R&D Innovator" color="text-pink-400" />
            <FeatureTag text="System Architect" color="text-indigo-400" />
            <FeatureTag text="Team Mentor" color="text-emerald-400" />
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section id="pillars" className="py-24 px-6 relative scroll-mt-32">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <h2 className="text-5xl font-outfit font-extrabold uppercase tracking-tighter">Strategic <br/><span className="text-sky-400">Pillars</span></h2>
            <div className="h-px flex-1 bg-white/5 mx-8 mb-4 hidden md:block"></div>
            <p className="text-slate-500 max-w-xs text-sm font-medium italic">Clinical precision from raw input to finalized dispatch.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resumeData.responsibilities.slice(0, 8).map((resp, idx) => {
              const colors = [
                'from-blue-600/20 to-sky-400/5',
                'from-purple-600/20 to-pink-400/5',
                'from-emerald-600/20 to-teal-400/5',
                'from-orange-600/20 to-amber-400/5'
              ];
              const icons = [<Zap />, <ShieldCheck />, <Target />, <Users />, <Activity />, <Settings />, <Factory />, <Globe />];
              return (
                <div key={idx} className={`glass-card p-8 rounded-3xl bg-gradient-to-br ${colors[idx % colors.length]} flex flex-col justify-between h-72 border-white/5`}>
                   <div className="p-3 bg-white/5 w-fit rounded-2xl text-white/80">
                      {icons[idx % icons.length]}
                   </div>
                   <div>
                     <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-2 block tracking-[0.3em]">Module 0{idx + 1}</span>
                     <p className="text-sm font-semibold leading-relaxed text-slate-200">{resp}</p>
                   </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section id="journey" className="py-24 px-6 bg-slate-950/50 scroll-mt-32">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-24">
             <h2 className="text-5xl font-outfit font-extrabold mb-4 uppercase tracking-tighter">Professional <span className="text-pink-500">Timeline</span></h2>
             <div className="w-24 h-1 bg-gradient-to-r from-sky-500 to-pink-500 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-12">
            {resumeData.experience.map((exp, idx) => (
              <div key={idx} className="group flex gap-8 items-start relative">
                <div className="hidden sm:flex flex-col items-end pt-2 min-w-[120px]">
                  <span className="text-xs font-bold text-slate-500 group-hover:text-sky-400 transition-colors">{exp.period.split(' – ')[0]}</span>
                  <span className="text-[10px] text-slate-600 uppercase tracking-widest font-bold">Start</span>
                </div>
                
                <div className="flex flex-col items-center pt-3">
                  <div className="w-3 h-3 rounded-full bg-slate-700 border-2 border-slate-900 group-hover:bg-pink-500 group-hover:shadow-[0_0_15px_rgba(236,72,153,0.8)] transition-all"></div>
                  <div className="w-px h-full bg-slate-800 min-h-[100px] group-last:hidden"></div>
                </div>

                <div className="glass-card flex-1 p-8 rounded-3xl group-hover:bg-white/5 border-white/5 transition-all">
                   <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                     <div>
                       <h3 className="text-2xl font-outfit font-extrabold text-white group-hover:text-sky-400 transition-colors">{exp.position}</h3>
                       <p className="text-slate-500 font-bold text-[10px] uppercase tracking-widest mt-1">{exp.company} • {exp.location}</p>
                     </div>
                     <div className="text-xs font-mono text-slate-500 bg-white/5 px-3 py-1 rounded-lg">
                       {exp.period}
                     </div>
                   </div>
                   <p className="text-sm text-slate-400 font-light leading-relaxed max-w-2xl">
                     Directing operations and implementation of automated manufacturing systems while maintaining strict compliance with global safety and hygiene standards.
                   </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Matrix Section */}
      <section id="matrix" className="py-24 px-6 overflow-hidden scroll-mt-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-6xl font-outfit font-extrabold leading-[0.85] uppercase mb-12 tracking-tighter">
                TECHNICAL <br/><span className="text-gradient">SPECTRUM.</span>
              </h2>
              <p className="text-slate-400 mb-16 text-lg font-light leading-relaxed">
                Expert-level proficiency in specialized industrial equipment and international product formulations.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {resumeData.products.map((p, i) => (
                  <div key={i} className="glass-card p-6 rounded-2xl group border-white/5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-sky-500/10 text-sky-400 rounded-lg group-hover:bg-sky-500 group-hover:text-white transition-all">
                        <Package size={20} />
                      </div>
                      <h4 className="font-bold text-sm uppercase tracking-wider">{p.category}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                       {p.items.map(item => (
                         <span key={item} className="text-[10px] bg-white/5 px-2 py-0.5 rounded text-slate-400 hover:text-white transition-colors">{item}</span>
                       ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
               <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-pink-600/20 blur-[80px] rounded-full animate-pulse"></div>
               <div className="relative glass-card p-8 rounded-[40px] border-white/10">
                  <h3 className="text-xl font-outfit font-bold mb-8 flex items-center gap-3 uppercase tracking-tight">
                    <Settings className="text-pink-500" /> Infrastructure Mastery
                  </h3>
                  <div className="space-y-3">
                    {resumeData.equipment.slice(0, 10).map((eq, i) => (
                      <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-sky-500/50 transition-all cursor-default group">
                        <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-[10px] font-bold text-slate-500 group-hover:text-sky-400 transition-colors">
                          {i + 1}
                        </div>
                        <p className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">{eq}</p>
                        <ArrowRight size={14} className="ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all text-sky-400" />
                      </div>
                    ))}
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-32 pb-16 px-6 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-500 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <div>
              <h2 className="text-5xl md:text-7xl font-outfit font-extrabold uppercase leading-none mb-8 tracking-tighter">
                OPTIMIZE YOUR <span className="text-gradient">YIELD.</span>
              </h2>
              <p className="text-slate-400 text-xl font-light max-w-md">
                Available for global consulting, plant stabilization audits, and greenfield leadership.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <a href={`mailto:${resumeData.contact.email}`} className="text-2xl md:text-4xl font-outfit font-bold hover:text-sky-400 transition-colors break-all">
                {resumeData.contact.email}
              </a>
              <div className="flex flex-wrap gap-12">
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-600 font-bold uppercase tracking-[0.3em] mb-2">Direct Terminal</span>
                  <span className="font-bold text-slate-300">{resumeData.contact.phone[1]}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-600 font-bold uppercase tracking-[0.3em] mb-2">Skype Secure</span>
                  <span className="font-bold text-slate-300">{resumeData.contact.skype}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-16 border-t border-white/5 gap-8">
             <div className="flex items-center gap-4 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
               <div className="w-10 h-10 bg-sky-500 rounded-xl flex items-center justify-center font-bold text-white group-hover:rotate-12 transition-transform uppercase">SK</div>
               <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-600">Production Systems Expert</span>
             </div>
             <div className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">
               &copy; {new Date().getFullYear()} K. SAMPATH KUMAR // ALL_SYSTEMS_VERIFIED
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
