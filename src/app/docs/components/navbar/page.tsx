"use client";
import React, { useState } from "react";
import { Navbar } from "@/ui/navbar/NavBar";
import { Card } from "@/ui/card/Card";
import { FlipCard } from "@/ui/flipcard/FlipCard";
import { ColorSwitch } from "@/components/docs/color-switch";
import { cn } from "@/lib/utils";

type ColorVariant = "purple" | "cyan" | "green" | "yellow" | "default";

export default function NavbarPage() {
  const [activeVariant, setActiveVariant] = useState<ColorVariant>("cyan");

  return (
    <div className="space-y-12 pb-20">
      <Card variant={activeVariant === "default" ? "cyan" : activeVariant} className="p-8 md:p-12 transition-colors duration-500">
        <h1 className="text-4xl font-black uppercase tracking-tighter sm:text-7xl mb-4 italic text-black">
          Navbar
        </h1>
        <p className="text-xl md:text-2xl font-bold opacity-90 max-w-2xl text-black text-left">
          A high-impact, fixed-position navigation system designed for rapid tactical access.
        </p>
      </Card>

      <div className="grid gap-16">
        <section className="space-y-8">
           <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
               <div className={cn("h-8 w-2 transition-colors duration-500", 
                 activeVariant === "purple" ? "bg-neo-purple" : 
                 activeVariant === "cyan" ? "bg-neo-cyan" : 
                 activeVariant === "green" ? "bg-neo-green" : 
                 activeVariant === "yellow" ? "bg-neo-yellow" : "bg-white"
               )} />
               <h2 className="text-3xl font-black uppercase tracking-tight">Interactive Showcase</h2>
            </div>
            <ColorSwitch value={activeVariant} onChange={setActiveVariant} />
          </div>

          <Card variant={activeVariant === "default" ? "cyan" : activeVariant} className="p-16 md:p-24 flex flex-col justify-center items-center relative overflow-hidden h-[400px] transition-colors duration-500">
             <div className="absolute top-0 inset-x-0 w-full">
                <Navbar title="TASKIEE" isFixed={false} variant={activeVariant} />
             </div>
             <div className="mt-20 p-6 bg-zinc-950 neo-border shadow-neo scale-110">
                <span className="font-black text-xs uppercase tracking-[0.3em] text-white">TACTICAL PREVIEW</span>
             </div>
          </Card>
        </section>

        <section className="space-y-8">
          <div className="flex items-center space-x-4">
            <div className="h-8 w-2 bg-neo-purple" />
            <h2 className="text-3xl font-black uppercase tracking-tight text-left">Installation</h2>
          </div>
          <div className="h-[350px]">
             <FlipCard code={`import { Navbar } from "@/ui/navbar/NavBar";

<Navbar 
  title="My App" 
  variant="cyan"
  navItems={[
    { label: "Home", href: "/" },
    { label: "Docs", href: "/docs" }
  ]}
/>`}>
                <div className="flex flex-col items-center justify-center h-full space-y-4 text-center">
                   <div className="bg-neo-purple px-6 py-3 neo-border shadow-[8px_8px_0px_0px_white]">
                      <span className="font-black uppercase text-xl italic text-white">SYSTEM NAV</span>
                   </div>
                   <p className="font-bold opacity-70">FLIP FOR PROPS</p>
                </div>
             </FlipCard>
          </div>
        </section>
      </div>
    </div>
  );
}
