"use client";
import React, { useState } from "react";
import { Badge } from "@/ui/badge/Badge";
import { Card } from "@/ui/card/Card";
import { ColorSwitch } from "@/components/docs/color-switch";
import { cn } from "@/lib/utils";

type ColorVariant = "purple" | "cyan" | "green" | "yellow" | "default";

export default function BadgePage() {
  const [activeVariant, setActiveVariant] = useState<ColorVariant>("cyan");

  return (
    <div className="space-y-12 pb-20">
      <Card variant={activeVariant === "default" ? "cyan" : activeVariant} className="p-8 md:p-12 transition-colors duration-500">
        <h1 className="text-4xl font-black uppercase tracking-tighter sm:text-7xl mb-4 italic text-black">
          Badge
        </h1>
        <p className="text-xl md:text-2xl font-bold opacity-90 max-w-2xl text-black">
          High-visibility status indicators for rapid information scanning and impact.
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
          
          {/* STATIC SIZE: Removed scale, used large padding and text size for consistent layout */}
          <Card variant={activeVariant === "default" ? "cyan" : activeVariant} className="p-16 md:p-32 flex flex-col gap-12 justify-center items-center transition-colors duration-500 min-h-[600px]">
            <Badge variant={activeVariant} className="text-6xl py-4 px-10 shadow-[12px_12px_0px_0px_white]">
              {activeVariant.toUpperCase()}
            </Badge>
            <Badge variant={activeVariant} className="text-3xl py-3 px-6 opacity-80">
              STATUS: ACTIVE
            </Badge>
          </Card>
        </section>

        <section className="space-y-8">
           <div className="flex items-center space-x-4">
             <div className="h-8 w-2 bg-neo-purple" />
             <h2 className="text-3xl font-black uppercase tracking-tight">Vibrant Variants</h2>
          </div>
          <Card className="p-16 md:p-24 bg-zinc-950 flex flex-wrap gap-12 lg:gap-16 justify-center items-center shadow-[12px_12px_0px_0px_var(--neo-purple)]">
            <Badge variant="purple" className="px-4 py-1.5">Purple</Badge>
            <Badge variant="cyan" className="px-4 py-1.5">Cyan</Badge>
            <Badge variant="success" className="px-4 py-1.5">Success</Badge>
            <Badge variant="error" className="px-4 py-1.5">Error</Badge>
          </Card>
        </section>
      </div>
    </div>
  );
}
