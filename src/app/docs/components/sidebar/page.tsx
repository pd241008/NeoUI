"use client";
import React, { useState } from "react";
import { Sidebar } from "@/ui/sidebar/SideBar";
import { Card } from "@/ui/card/Card";
import { FlipCard } from "@/ui/flipcard/FlipCard";
import { ColorSwitch } from "@/components/docs/color-switch";
import { cn } from "@/lib/utils";

type ColorVariant = "purple" | "cyan" | "green" | "yellow" | "default";

export default function SidebarPage() {
  const [activeVariant, setActiveVariant] = useState<ColorVariant>("yellow");

  return (
    <div className="space-y-12 pb-20">
      <Card variant={activeVariant === "default" ? "yellow" : activeVariant} className="p-8 md:p-12 transition-colors duration-500">
        <h1 className="text-4xl font-black uppercase tracking-tighter sm:text-7xl mb-4 italic text-black">
          Sidebar
        </h1>
        <p className="text-xl md:text-2xl font-bold opacity-90 max-w-2xl text-black">
          A persistent, secondary navigation drawer with high-impact borders and tactical section headers.
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
               <h2 className="text-3xl font-black uppercase tracking-tight text-left">Interactive Showcase</h2>
            </div>
            <ColorSwitch value={activeVariant} onChange={setActiveVariant} />
          </div>

          <Card variant={activeVariant === "default" ? "yellow" : activeVariant} className="flex p-0 min-h-[500px] relative overflow-hidden transition-colors duration-500 bg-zinc-950/20">
             <div className="w-64 h-full relative z-10">
                <Sidebar title="📁 PROJECT ROOT" isFixed={false} variant={activeVariant} />
             </div>
             <div className="flex-1 p-12 flex flex-col items-center justify-center relative">
                <div className="p-6 bg-zinc-950 neo-border shadow-neo scale-110">
                   <span className="font-black text-xs uppercase tracking-[0.4em] text-white">CONTEXTUAL WORKSPACE</span>
                </div>
             </div>
          </Card>
        </section>

        <section className="space-y-8">
          <div className="flex items-center space-x-4">
            <div className="h-8 w-2 bg-neo-green" />
            <h2 className="text-3xl font-black uppercase tracking-tight text-left">Installation</h2>
          </div>
          <div className="h-[350px]">
             <FlipCard code={`import { Sidebar } from "@/ui/sidebar/SideBar";

<Sidebar 
  title="Menu" 
  variant="yellow"
  items={[
    { label: "Dashboard", href: "/" },
    { label: "Settings", href: "/settings" }
  ]}
/>`}>
                <div className="flex flex-col items-center justify-center h-full space-y-4">
                   <div className="bg-neo-green px-6 py-3 neo-border shadow-[8px_8px_0px_0px_white]">
                      <span className="font-black uppercase text-xl italic text-black">DRAWER CONTROL</span>
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
