import React from "react";
import { motion } from "motion/react";
import { 
  ArrowRight, 
  Target, 
  TrendingUp, 
  Search, 
  Linkedin, 
  Twitter, 
  Globe,
  Download,
  FileText,
  X
} from "lucide-react";

interface CaseStudy {
  id: string;
  tag: string;
  title: string;
  desc: string;
  image: string;
  details: {
    challenge: string;
    solution: string;
    results: string[];
  };
}

const SectionHeader = ({ label, title }: { label: string; title: string }) => (
  <div className="mb-8">
    <div className="flex items-center gap-2 mb-3">
      <div className="w-1 h-4 bg-accent" />
      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent/80">{label}</span>
    </div>
    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-navy leading-tight">{title}</h2>
  </div>
);

export default function App() {
  const [selectedStudy, setSelectedStudy] = React.useState<CaseStudy | null>(null);

  React.useEffect(() => {
    if (selectedStudy) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedStudy]);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 96; // h-24 = 96px
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen selection:bg-accent/30">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-paper/80 backdrop-blur-md border-b border-line">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold tracking-tighter leading-none">
              SAHISHNAVI <br /> NANUBALA
            </h1>
            <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-accent mt-1">
              Strategic Product Marketing Manager
            </span>
          </div>
          
          <nav className="hidden md:flex items-center gap-12">
            {['EXECUTIVE SUMMARY', 'CASE STUDIES', 'PROFESSIONAL CREDENTIALS', 'CONTACT'].map((item) => {
              const id = item.toLowerCase().replace(/\s+/g, '-');
              return (
                <a 
                  key={item} 
                  href={`#${id}`}
                  onClick={(e) => handleScroll(e, id)}
                  className="text-[11px] font-bold tracking-widest hover:text-accent transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
                </a>
              );
            })}
          </nav>

          <button className="bg-navy text-white px-6 py-3 text-[11px] font-bold tracking-widest hover:bg-navy/90 transition-all uppercase">
            Request Consultation
          </button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative border-b border-line overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 min-h-[60vh]">
            <div className="lg:col-span-8 py-12 lg:py-20 flex flex-col justify-center border-r border-line pr-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-2 mb-8">
                  <div className="w-1 h-4 bg-accent" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent/80">Market Strategy Report 2024</span>
                </div>
                <h2 className="text-6xl md:text-8xl font-bold leading-[0.95] tracking-tight mb-8">
                  Scaling <span className="italic text-accent font-normal">High-Growth</span> <br />
                  Technology through <br />
                  Precision Strategy.
                </h2>
              </motion.div>
            </div>
            
            <div className="lg:col-span-4 py-12 lg:py-20 flex flex-col justify-center pl-12">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <p className="text-xl font-serif italic text-navy/70 leading-relaxed mb-12">
                  "Specializing in GTM strategy, sales enablement, and market intelligence for Fintech and Cybersecurity sectors."
                </p>
                
                <div className="flex flex-col gap-4">
                  <button className="w-full border border-navy px-8 py-4 text-[11px] font-bold tracking-widest uppercase hover:bg-navy hover:text-white transition-all flex items-center justify-between group">
                    Portfolio Review
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="w-full border border-navy/20 px-8 py-4 text-[11px] font-bold tracking-widest uppercase hover:border-navy transition-all flex items-center justify-between group">
                    Download Curriculum Vitae
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="executive-summary" className="border-b border-line bg-white/50">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-5 py-12 border-r border-line pr-12">
              <div className="relative aspect-[4/5] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                <img 
                  src="https://picsum.photos/seed/sahishnavi-nanubala/800/1000" 
                  alt="Sahishnavi Nanubala"
                  className="object-cover w-full h-full"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-navy/80 to-transparent text-white">
                   <p className="text-[10px] font-bold uppercase tracking-widest mb-1 opacity-70">Subject Profile</p>
                   <h3 className="text-2xl font-bold">Sahishnavi Nanubala</h3>
                   <p className="text-[11px] opacity-70 mt-1">ISB Certified Professional | Strategic Narrative Designer</p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-7 py-12 pl-12 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-1 h-4 bg-accent" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent/80">Origin Story</span>
              </div>
              <h2 className="text-5xl font-bold leading-tight mb-8">
                The Bridge Between <br />
                <span className="italic text-accent font-normal">Technical Engineering</span> <br />
                and Market Success.
              </h2>
              
              <div className="space-y-6 text-navy/70 leading-relaxed max-w-xl">
                <p>
                  With over <span className="font-bold text-navy">4+ years of specialized experience</span> in the Cybersecurity and IT sectors, I bridge the gap between complex technical solutions and high-impact market narratives.
                </p>
                <p>
                  As an ISB certified professional, I focus on driving revenue through strategic narrative design and enterprise market penetration. My approach combines data-driven market intelligence with the art of storytelling to ensure technical products achieve their full commercial potential.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-px bg-line mt-8 border border-line">
                <div className="bg-paper p-8 text-center">
                  <div className="text-4xl font-bold mb-1">4+</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest opacity-50">Years Experience</div>
                </div>
                <div className="bg-paper p-8 text-center">
                  <div className="text-4xl font-bold mb-1">ISB</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest opacity-50">Certified</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section id="case-studies" className="py-16 border-b border-line">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <SectionHeader label="Performance Portfolio" title="Strategic Impact Metrics" />
              <p className="text-[11px] font-medium opacity-50 max-w-[240px] leading-relaxed italic">
                A formal review of high-growth initiatives across cybersecurity and fintech.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {[
                {
                  id: "01",
                  tag: "GTM STRATEGY",
                  title: "BluSapphire: AI-Driven GTM & Narrative Strategy",
                  desc: "Developing market positioning for AI-powered cybersecurity frameworks to penetrate global enterprise accounts.",
                  image: "https://picsum.photos/seed/cyber-security-ai/800/500",
                  details: {
                    challenge: "BluSapphire needed to differentiate its AI-driven cybersecurity platform in a crowded market dominated by legacy players. The technical complexity of their 'Agentless' approach was difficult for non-technical buyers to grasp.",
                    solution: "I redesigned the strategic narrative to focus on 'Operational Resilience' rather than just technical specs. Developed a tiered GTM strategy targeting C-suite executives with a value-based messaging framework.",
                    results: [
                      "35% increase in qualified enterprise leads within 6 months.",
                      "Successfully penetrated 3 new global markets (EMEA, APAC).",
                      "Reduced sales cycle by 20% through optimized sales enablement tools."
                    ]
                  }
                },
                {
                  id: "02",
                  tag: "REVENUE EXPANSION",
                  title: "Infobell IT: Enterprise Market Penetration",
                  desc: "Driving revenue through strategic enterprise sales enablement and optimized product narrative alignment.",
                  image: "https://picsum.photos/seed/enterprise-data/800/500",
                  details: {
                    challenge: "Infobell IT had strong technical capabilities but struggled to move upmarket into large enterprise accounts. Their sales team lacked the collateral to compete against Tier-1 consulting firms.",
                    solution: "Implemented a comprehensive Sales Enablement program including competitive battlecards, industry-specific case studies, and a refined enterprise pitch deck. Aligned product roadmap with high-value enterprise needs.",
                    results: [
                      "Closed 2 multi-million dollar enterprise contracts in the first year.",
                      "Achieved 50% year-over-year revenue growth in the enterprise segment.",
                      "Standardized the sales process, improving win rates by 15%."
                    ]
                  }
                }
              ].map((study: CaseStudy) => (
                <motion.div 
                  key={study.id}
                  whileHover={{ y: -10 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedStudy(study)}
                >
                  <div className="aspect-video overflow-hidden mb-8 border border-line">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-accent">Case Study {study.id}: {study.tag}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">{study.title}</h3>
                  <p className="text-navy/60 text-sm leading-relaxed mb-6">{study.desc}</p>
                  <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest group-hover:gap-4 transition-all">
                    Read More <ArrowRight className="w-3 h-3" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Modal */}
        {selectedStudy && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 sm:p-12">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedStudy(null)}
              className="absolute inset-0 bg-navy/90 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="relative bg-paper w-full max-w-4xl max-h-[90vh] overflow-y-auto border border-line shadow-2xl"
            >
              <div className="sticky top-0 z-10 bg-paper/80 backdrop-blur-md border-b border-line p-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-1 h-4 bg-accent" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent/80">Case Study {selectedStudy.id}</span>
                </div>
                <button 
                  onClick={() => setSelectedStudy(null)}
                  className="p-2 hover:bg-line transition-colors rounded-full"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-8 sm:p-12">
                <div className="aspect-video overflow-hidden mb-12 border border-line">
                  <img 
                    src={selectedStudy.image} 
                    alt={selectedStudy.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <h2 className="text-4xl font-bold mb-8 tracking-tight">{selectedStudy.title}</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                  <div className="md:col-span-8 space-y-12">
                    <div>
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-accent mb-4">The Challenge</h4>
                      <p className="text-navy/70 leading-relaxed">{selectedStudy.details.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-accent mb-4">The Strategic Solution</h4>
                      <p className="text-navy/70 leading-relaxed">{selectedStudy.details.solution}</p>
                    </div>
                  </div>
                  
                  <div className="md:col-span-4">
                    <div className="bg-white p-8 border border-line">
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-accent mb-6">Key Results</h4>
                      <ul className="space-y-4">
                        {selectedStudy.details.results.map((result, i) => (
                          <li key={i} className="flex gap-3 text-sm leading-relaxed text-navy/80">
                            <div className="w-1.5 h-1.5 bg-accent mt-1.5 shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 border-t border-line bg-paper/50 flex justify-end">
                <button 
                  onClick={() => setSelectedStudy(null)}
                  className="bg-navy text-white px-8 py-4 text-[11px] font-bold tracking-widest uppercase hover:bg-accent transition-all"
                >
                  Close Case Study
                </button>
              </div>
            </motion.div>
          </div>
        )}

        {/* Featured Case Study (Dark) */}
        <section className="relative bg-navy py-16 text-white overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20">
            <img 
              src="https://picsum.photos/seed/bakery-strategy/1920/600" 
              alt="Background" 
              className="w-full h-full object-cover grayscale"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-navy/60" />
          </div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="max-w-2xl">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-6 block">Full Cycle Ownership</span>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                  House of Cake: Strategic Product Ownership
                </h2>
                <p className="text-white/60 font-serif italic text-lg leading-relaxed">
                  End-to-end product strategy and execution for a boutique digital platform, demonstrating versatile leadership.
                </p>
              </div>
              <button className="bg-white text-navy px-10 py-5 text-[11px] font-bold tracking-widest uppercase hover:bg-accent hover:text-white transition-all">
                View Detailed Report
              </button>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section id="professional-credentials" className="border-b border-line">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3">
            {[
              {
                icon: <Target className="w-6 h-6" />,
                title: "GTM Strategy",
                desc: "Defining target markets, identifying buyer personas, and crafting launch strategies that resonate in hyper-competitive spaces."
              },
              {
                icon: <FileText className="w-6 h-6" />,
                title: "Sales Enablement",
                desc: "Equipping sales teams with powerful narratives, decks, and competitive battlecards that close high-ticket enterprise deals."
              },
              {
                icon: <TrendingUp className="w-6 h-6" />,
                title: "Market Intelligence",
                desc: "Diving deep into competitor analysis and market trends to find the unique winning angle and defend market share."
              }
            ].map((skill, idx) => (
              <div key={idx} className={`p-12 flex flex-col items-start ${idx !== 2 ? 'border-r border-line' : ''}`}>
                <div className="text-accent mb-8">{skill.icon}</div>
                <h3 className="text-xl font-bold uppercase tracking-widest mb-6">{skill.title}</h3>
                <p className="text-navy/60 text-sm leading-relaxed">{skill.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 border-b border-line bg-white/30">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <SectionHeader label="Get in Touch" title="Let's Strategize Your Next Move." />
              <p className="text-navy/60 leading-relaxed mb-8">
                Whether you're looking to scale your GTM efforts, refine your product narrative, or need expert market intelligence, I'm here to help technical products reach their full potential.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full border border-line flex items-center justify-center text-accent">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest opacity-50">Location</p>
                    <p className="text-sm font-medium">Global / Remote</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-widest opacity-50">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="Enter your name"
                    className="bg-paper border border-line p-4 text-sm focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-widest opacity-50">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="Enter your email"
                    className="bg-paper border border-line p-4 text-sm focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-widest opacity-50">Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    placeholder="How can I help you?"
                    className="bg-paper border border-line p-4 text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                  ></textarea>
                </div>
                <div className="md:col-span-2">
                  <button className="w-full bg-navy text-white py-5 text-[11px] font-bold tracking-widest uppercase hover:bg-accent transition-all flex items-center justify-center gap-3 group">
                    Send Message
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-16 bg-paper">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-6">
              <h2 className="text-3xl font-bold tracking-tighter mb-4">S. NANUBALA</h2>
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-40 leading-relaxed">
                Strategic Product Marketing Portfolio © 2024. <br />
                All Rights Reserved. Professional Documentation.
              </p>
            </div>
            
            <div className="lg:col-span-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-6 block">Correspondence</span>
              <a href="mailto:contact@sahishnavi.com" className="text-lg font-serif italic hover:text-accent transition-colors border-b border-line pb-1">
                contact@sahishnavi.com
              </a>
            </div>
            
            <div className="lg:col-span-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-6 block">Connect</span>
              <div className="flex gap-8">
                {[
                  { name: 'LINKEDIN', icon: <Linkedin className="w-4 h-4" /> },
                  { name: 'TWITTER', icon: <Twitter className="w-4 h-4" /> },
                  { name: 'MEDIUM', icon: <Globe className="w-4 h-4" /> }
                ].map((social) => (
                  <a key={social.name} href="#" className="text-[10px] font-bold tracking-widest hover:text-accent transition-colors">
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-line pt-12 flex justify-center">
            <div className="flex gap-12 text-[10px] font-bold tracking-[0.4em] opacity-30 uppercase">
              <span>Trust</span>
              <span>Stability</span>
              <span>Strategy</span>
              <span>Precision</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
