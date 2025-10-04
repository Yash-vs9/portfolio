import Link from "next/link";

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
          {title}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-brand-500 to-fuchsia-500 mx-auto rounded-full"></div>
      </div>
      <div className="mt-6">{children}</div>
    </section>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-black/20">
      <div className="mx-auto max-w-6xl px-6">
        <nav className="mt-6 mb-6 glass rounded-2xl px-6 py-4 border border-white/10 shadow-2xl">
          <div className="flex items-center justify-between">
            <Link href="#" className="font-bold text-xl tracking-tight text-white group">
              <span className="bg-gradient-to-r from-brand-400 to-fuchsia-400 bg-clip-text text-transparent">
                Yash
              </span>
              <span className="ml-3 text-xs rounded-full px-3 py-1 bg-gradient-to-r from-brand-500/20 to-fuchsia-500/20 border border-brand-500/30 text-brand-300">
                Portfolio
              </span>
            </Link>
            <div className="hidden sm:flex items-center gap-1">
              {[
                { href: "#about", label: "About" },
                { href: "#experience", label: "Experience" },
                { href: "#achievements", label: "Achievements" },
                { href: "#projects", label: "Projects" }
              ].map(i => (
                <Link
                  key={i.href}
                  href={i.href}
                  className="text-sm text-zinc-300 hover:text-white transition-all duration-300 rounded-xl px-4 py-2 hover:bg-white/5 relative group"
                >
                  {i.label}
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-brand-500 to-fuchsia-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
              <Link
                href="mailto:yash@example.com"
                className="text-sm bg-gradient-to-r from-brand-500 to-fuchsia-500 hover:from-brand-400 hover:to-fuchsia-400 text-white rounded-xl px-6 py-2 shadow-glow transition-all duration-300 transform hover:scale-105"
              >
                Contact
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-16">
      <div className="glass rounded-3xl p-8 sm:p-16 relative overflow-hidden border border-white/10 shadow-2xl">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-brand-500/20 blur-3xl rounded-full pointer-events-none animate-pulse"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-fuchsia-500/20 blur-3xl rounded-full pointer-events-none animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="flex flex-col lg:flex-row lg:items-center gap-12">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-3 text-sm text-zinc-300 bg-zinc-900/60 border border-zinc-800 rounded-full px-4 py-2 backdrop-blur-sm">
              <span className="inline-block w-2 h-2 rounded-full bg-brand-400 animate-pulse"></span>
              Available for freelance & full-time opportunities
            </div>
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
                Building
                <span className="block bg-gradient-to-r from-brand-400 via-fuchsia-400 to-brand-400 bg-clip-text text-transparent">
                  exceptional
                </span>
                digital experiences
              </h1>
              <p className="text-xl text-zinc-300 leading-relaxed max-w-2xl">
                I'm Yash, a passionate software engineer crafting modern, scalable solutions with 
                <span className="text-brand-400 font-semibold"> Next.js</span>, 
                <span className="text-fuchsia-400 font-semibold"> TypeScript</span>
                <span className="text-brand-400 font-semibold"> React</span> and 
                <span className="text-brand-400 font-semibold"> Spring Boot</span>.

              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="#projects" 
                className="group bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-2xl border border-white/10 card-hover transition-all duration-300 flex items-center gap-2"
              >
                <span>View My Work</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link 
                href="#about" 
                className="bg-gradient-to-r from-brand-500 to-fuchsia-500 hover:from-brand-400 hover:to-fuchsia-400 text-white px-8 py-4 rounded-2xl shadow-glow transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                <span>Get to Know Me</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </Link>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

function Experience() {
  const items = [
    {
      role: "Machine Learning Intern",
      company: "EDIC",
      period: "May 2025 - Jun 2025",
      points: [
        "Developed and implemented ML/DL algorithms for data analysis",
        "Collaborated with senior engineers on model optimization",
        "Contributed to research projects in computer vision"
      ],
      icon: "",
      badge: "./edic.jpeg" // 🔗 replace with your badge link
    },
    {
      role: "Frontend Developer",
      company: "Vexelly",
      period: "Jul 2025 - Sep 2025",
      points: [
        "Built responsive web applications using Next.js and React",
        "Implemented modern UI/UX designs with Tailwind CSS",
        "Optimized application performance and user experience"
      ],
      icon: "",
      badge: "./vexel.png" // 🔗 replace with your badge link
    }
  ];
  
  return (
    <div className="relative">
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-500/60 via-fuchsia-500/40 to-transparent"></div>
      <div className="space-y-8">
        {items.map((item, idx) => (
          <div key={idx} className="relative flex items-start gap-6 group">
            <div className="flex-shrink-0 w-16 h-16 rounded-2xl glass border border-white/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
              {item.icon}
            </div>
            <div className="flex-1 glass border border-white/10 rounded-2xl p-6 card-hover">
              <div className="flex flex-wrap items-baseline justify-between gap-3 mb-4">
                <div className="text-xl font-semibold text-white">{item.role}</div>
                <div className="text-brand-400 font-medium">{item.company}</div>
              </div>
              <div className="text-sm text-zinc-400 mb-4 font-medium">{item.period}</div>
              <ul className="space-y-2">
                {item.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-400 mt-2 flex-shrink-0"></span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Badge section */}
              {item.badge && (
                <img src={item.badge} alt={`${item.company} Badge`} className="mt-3 w-18 h-16" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Achievements() {
  const items = [
    { 
      title: "LeetCode Expert", 
      detail: "Solved 100+ algorithmic problems with focus on data structures and algorithms",
      icon: "",
      color: "from-yellow-500/20 to-orange-500/20",
      badge: "https://img.shields.io/badge/LeetCode-Expert-orange?style=flat&logo=leetcode"
    },
    { 
      title: "Hackathon Champion", 
      detail: "Rank 1 Position in Vanilla Web Hackathon - Built innovative web solutions",
      icon: "",
      color: "from-brand-500/20 to-fuchsia-500/20",
      certificate: "https://drive.google.com/file/d/1Oe1nFQq_kCgDSAEcmJk6kvC8fHKMvCGS/view" // 🔗 replace with your actual certificate link
    },
    { 
      title: "Open Source Contributor", 
      detail: "Active contributor to various open source projects and community initiatives",
      icon: "",
      color: "from-green-500/20 to-blue-500/20",
      badge: "https://img.shields.io/badge/Open%20Source-Contributor-brightgreen?style=flat&logo=github"
    }
  ];
  
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((a, i) => (
        <div 
          key={i} 
          className="glass rounded-2xl p-6 border border-white/10 card-hover group relative overflow-hidden"
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${a.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
          <div className="relative z-10">
            <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{a.icon}</div>
            <div className="text-lg font-semibold text-white mb-2">{a.title}</div>
            <div className="text-zinc-400 text-sm leading-relaxed mb-3">{a.detail}</div>

            {/* Extra options */}
            {a.badge && (
              <img src={a.badge} alt={`${a.title} Badge`} className="mt-2" />
            )}
            {a.certificate && (
              <a 
                href={a.certificate} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-3 text-xs px-4 py-2 bg-gradient-to-r from-brand-500 to-fuchsia-500 text-white rounded-lg shadow-glow hover:scale-105 transition-transform duration-300"
              >
                View Certificate
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

function Projects() {
  const items = [
    {
      name: "Consistify",
      desc: "A comprehensive full-stack productivity and consistency tracking platform designed to help users build habits, track progress, and stay accountable with beautiful analytics and goal management.",
      tags: ["Next.js", "TypeScript", "Spring Boot", "Supabase", "Tailwind"],
      link: "https://consistify2.vercel.app/",
      image: "./consistify.png", // 🔗 replace with project image
      status: "Live"
    },
    {
      name: "HealthCare AI",
      desc: "An intelligent healthcare platform where users can chat with AI doctors and discover nearby hospitals within their radius, featuring real-time location services and medical assistance.",
      tags: ["React", "Node.js", "SQL", "AI/ML", "Maps API"],
      link: "https://github.com/Yash-vs9/Code-Seekers_AMUHACKS4.0",
      image: "./health.png",
      status: "GitHub"
    },
    {
      name: "Cyber Guardian",
      desc: "A gamified cybersecurity awareness platform built for hackathon constraints, designed to educate users about cybersecurity through interactive games, simulations, and hands-on learning experiences.",
      tags: ["HTML", "CSS", "JS"],
      link: "https://yash-vs9.github.io/Team-ZAVA-VANILLAWEBHACKS-/html/LandingPage.html",
      image: "./cyber.png",
      status: "Live"
    },
    {
      name: "CLI Tool",
      desc: "An AI-powered developer CLI assistant that simplifies your workflow. It integrates with OpenAI, helps generate commit messages, scans dependencies, tracks active time, analyzes API responses, and more — all directly from your terminal. Written in Python in just 250 Lines.",
      tags: ["Python"],
      link: "https://github.com/Yash-vs9/flowCLI",
      image: "./cli.png",
      status: "GitHub"
    },
    
  ];
  
  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {items.map((p, i) => (
        <a 
          key={i} 
          href={p.link} 
          target="_blank"
          rel="noopener noreferrer"
          className="glass rounded-2xl p-8 border border-white/10 card-hover block group relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 to-fuchsia-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10">
            {/* Image preview */}
            {p.image && (
              <img 
                src={p.image} 
                alt={p.name} 
                className="w-full h-40 object-cover rounded-xl mb-4 border border-white/10 group-hover:scale-105 transition-transform duration-500"
              />
            )}
            
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="text-2xl font-bold text-white group-hover:text-brand-300 transition-colors duration-300">
                {p.name}
              </div>
              <span className={`text-xs px-3 py-1 rounded-full border ${
                p.status === 'Live' 
                  ? 'bg-green-500/20 border-green-500/30 text-green-300' 
                  : 'bg-zinc-500/20 border-zinc-500/30 text-zinc-300'
              }`}>
                {p.status}
              </span>
            </div>
            
            <p className="text-zinc-300 leading-relaxed mb-6">{p.desc}</p>
            <div className="flex flex-wrap gap-2">
              {p.tags.map((tag) => (
                <span key={tag} className="text-xs text-zinc-300 bg-white/5 border border-white/10 rounded-full px-3 py-1 hover:bg-brand-500/20 hover:border-brand-500/30 transition-colors duration-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}

function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-6 py-16 text-sm text-zinc-400">
      <div className="glass rounded-2xl border border-white/10 p-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <div className="text-2xl font-bold mb-2">
              <span className="bg-gradient-to-r from-brand-400 to-fuchsia-400 bg-clip-text text-transparent">
                Yash
              </span>
            </div>
            <div>© {new Date().getFullYear()} All rights reserved. Built with Next.js & Tailwind CSS.</div>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://github.com/Yash-vs9" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300 flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/yash-vardhan-shukla-b0a71331b/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300 flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
            <a href="mailto:lakkyshukla74339@gmail.com" className="hover:text-white transition-colors duration-300 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Page() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-6 pb-20">
        <Hero />

        <div className="mt-24 space-y-24">
          <Section id="about" title="About Me">
            <div className="glass rounded-2xl p-8 border border-white/10 card-hover">
              <div className="max-w-4xl mx-auto text-center">
                <p className="text-xl text-zinc-300 leading-relaxed mb-6">
                  I'm a passionate software engineer who thrives at the intersection of 
                  <span className="text-brand-400 font-semibold"> design</span> and 
                  <span className="text-fuchsia-400 font-semibold"> engineering</span>, 
                  transforming complex problems into elegant, user-centric solutions.
                </p>
                <p className="text-lg text-zinc-400 leading-relaxed">
                  My expertise spans modern web technologies including Next.js, React, Spring Boot
                  and I'm passionate about creating performant, accessible applications that deliver 
                  exceptional user experiences. 
                </p>
              </div>
            </div>
          </Section>

          <Section id="experience" title="Professional Experience">
            <Experience />
          </Section>

          <Section id="achievements" title="Key Achievements">
            <Achievements />
          </Section>

          <Section id="projects" title="Featured Projects">
            <Projects />
          </Section>
        </div>
      </main>
      <Footer />
    </>
  );
}