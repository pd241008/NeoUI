"use client";

import { useState, useEffect } from "react";
import { Card } from "@/ui/card/Card";
import { Badge } from "@/ui/badge/Badge";
import { Button } from "@/ui/button/Button";
import { Input } from "@/ui/input/Input";
import { Spinner } from "@/ui/spinner/Spinner";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Marquee } from "@/ui/marquee/Marquee";

export default function DocsPage() {
  const [activeComp, setActiveComp] = useState(0);

  const showcaseComponents = [
    { name: "Button", component: <Button variant="purple" className="px-8 py-4">Action Button</Button> },
    { name: "Badge", component: <Badge variant="purple" className="px-6 py-2">Status Update</Badge> },
    { name: "Input", component: <Input placeholder="Type here..." variant="cyan" className="max-w-[300px] p-4" /> },
    { name: "Spinner", component: <Spinner className="w-24 h-24 border-4" /> },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveComp((prev) => (prev + 1) % showcaseComponents.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);
  const features = [
    "Next.js 15 Ready", "Tailwind 4 Powered", "Strict TypeScript", "Neo-brutalist Design", 
    "High Contrast", "Premium Vibes", "Modular Blocks", "Snappy Transitions",
    "Dark Mode Native", "Zero Bloat", "Workflow Optimized", "Speed Focused"
  ];

  return (
    <div className="space-y-24 pb-32">
      {/* Hero Section - FIXED: Centered text and content */}
      <div className="space-y-10 text-center flex flex-col items-center pt-10">
        <h1 className="text-6xl font-black uppercase tracking-tighter leading-[0.9] sm:text-9xl italic">
          The <span className="text-neo-purple drop-shadow-[8px_8px_0px_white]">Aggressive</span> <br /> UI Framework.
        </h1>
        <p className="text-2xl text-muted-foreground font-bold max-w-3xl leading-relaxed mx-auto">
          TASKIEE is a Neo-brutalist component library built for internal tools, 
          workflow engines, and dashboards that refuse to be boring.
        </p>
        <div className="flex flex-wrap justify-center gap-6 pt-4">
          <Button variant="purple" className="text-2xl px-12 py-8 shadow-[12px_12px_0px_0px_white] hover:shadow-[6px_6px_0px_0px_white]">Get Started</Button>
          <Button variant="outline" className="text-2xl px-12 py-8 border-4">GitHub Star</Button>
        </div>
      </div>

      {/* Infinite Scroll Ticker */}
      <div className="neo-border-thick border-x-0 bg-neo-yellow py-4 -mx-4 md:-mx-8 lg:-mx-12 rotate-[-1deg] shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
        <Marquee speed={30} className="py-2">
           {[...features, ...features].map((feat, i) => (
            <span key={i} className="mx-12 text-3xl font-black uppercase tracking-widest text-black flex items-center italic">
              {feat} <div className="ml-12 h-4 w-4 bg-black rotate-45" />
            </span>
          ))}
        </Marquee>
      </div>

      {/* Philosophy Grid - FIXED: Balanced spacing */}
      <div className="grid gap-12 md:grid-cols-2 max-w-7xl mx-auto">
        <Card className="p-12 bg-neo-cyan text-black space-y-6 shadow-[20px_20px_0px_0px_white]">
          <h2 className="text-5xl font-black uppercase italic tracking-tighter">01. Impact First</h2>
          <p className="font-bold text-xl leading-relaxed opacity-90">
            We don't do subtle. Sharp edges, heavy shadows, and bold typography 
            ensure that your interface commands attention from the first nanosecond.
          </p>
        </Card>
        <Card className="p-12 bg-neo-green text-black space-y-6 shadow-[20px_20px_0px_0px_white]">
          <h2 className="text-5xl font-black uppercase italic tracking-tighter">02. Unapologetically Fast</h2>
          <p className="font-bold text-xl leading-relaxed opacity-90">
            Built on the bleeding edge of Next.js 16 and Tailwind 4. 
            Optimized for maximum developer velocity and zero-latency run-time performance.
          </p>
        </Card>
      </div>

      {/* Rotating Showcase */}
      <section className="space-y-10 max-w-6xl mx-auto">
        <div className="flex items-center space-x-6">
           <div className="h-12 w-3 bg-neo-purple" />
           <h2 className="text-5xl font-black uppercase tracking-tighter italic">Component Sandbox</h2>
        </div>
        <Card className="p-24 min-h-[500px] flex flex-col items-center justify-center bg-zinc-950 relative overflow-hidden neo-border-thick">
          <div className="absolute top-8 left-8 font-black text-neo-purple opacity-20 text-9xl uppercase tracking-tighter italic select-none">
            {showcaseComponents[activeComp].name}
          </div>
          <div className="relative z-10 transition-all duration-700 bg-white p-12 neo-border-thick shadow-[24px_24px_0px_0px_var(--neo-purple)]">
            {showcaseComponents[activeComp].component}
          </div>
        </Card>
      </section>

      {/* Component Spotlight */}
      <div className="space-y-12 max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-end">
           <div className="h-3 w-32 bg-neo-cyan mb-4" />
           <h2 className="text-6xl font-black uppercase tracking-tighter italic text-right">Marketplace</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
           {[
             { name: "Buttons", desc: "Aggressive action triggers.", color: "bg-neo-purple", href: "/docs/components/button" },
             { name: "Cards", desc: "Stark content containers.", color: "bg-neo-yellow", href: "/docs/components/card" },
             { name: "Inputs", desc: "Bold field entries.", color: "bg-neo-cyan", href: "/docs/components/input" },
             { name: "Badges", desc: "High-impact indicators.", color: "bg-neo-green", href: "/docs/components/badge" },
             { name: "Tabs", desc: "Organized layout switches.", color: "bg-neo-purple", href: "/docs/components/tabs" },
             { name: "Marquee", desc: "Infinite horizontal tickers.", color: "bg-neo-yellow", href: "/docs/components/marquee" },
             { name: "FlipCard", desc: "Interactive reveal blocks.", color: "bg-neo-cyan", href: "/docs/components/flipcard" }
           ].map((comp, i) => (
             <Link key={i} href={comp.href}>
                <Card className={`${comp.color} p-10 h-full hover:-translate-y-3 transition-all cursor-pointer group shadow-[16px_16px_0px_0px_white]`}>
                   <h3 className="text-4xl font-black uppercase tracking-tighter text-black italic leading-none mb-4">{comp.name}</h3>
                   <p className="font-bold text-black/90 text-xl leading-snug">{comp.desc}</p>
                   <div className="mt-10 flex justify-end">
                      <div className="bg-black text-white p-4 neo-border shadow-[6px_6px_0px_0px_white] group-hover:bg-white group-hover:text-black transition-colors">
                         <ArrowRight className="w-8 h-8" />
                      </div>
                   </div>
                </Card>
             </Link>
           ))}
        </div>
      </div>
    </div>
  );
}
