"use client";
import React, { useState } from "react";
import { Card } from "@/ui/card/Card";
import { Badge } from "@/ui/badge/Badge";
import { FlipCard } from "@/ui/flipcard/FlipCard";
import { ColorSwitch } from "@/components/docs/color-switch";
import { cn } from "@/lib/utils";

type ColorVariant = "purple" | "cyan" | "green" | "yellow" | "default";

export default function CardPage() {
  const [activeVariant, setActiveVariant] = useState<ColorVariant>("yellow");

  return (
    <div className="space-y-12 pb-20">
      <Card variant={activeVariant === "default" ? "yellow" : activeVariant} className="p-8 md:p-12 transition-colors duration-500">
        <h1 className="text-4xl font-black uppercase tracking-tighter sm:text-7xl mb-4 italic text-black">
          Card
        </h1>
        <p className="text-xl md:text-2xl font-bold opacity-90 max-w-2xl text-black">
          Stark content containers designed to isolate information with aggressive borders and depth.
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

          <Card variant={activeVariant === "default" ? "yellow" : activeVariant} className="p-16 md:p-32 flex flex-col justify-center items-center transition-colors duration-500 gap-16">
             <Card variant={activeVariant} className="w-full max-w-lg p-12 scale-110 shadow-[20px_20px_0_0_black] bg-white text-black">
                <div className="flex justify-between items-start mb-6">
                   <h3 className="text-3xl font-black uppercase italic tracking-tighter">Package-01</h3>
                   <Badge variant="purple" className="scale-125">PREMIUM</Badge>
                </div>
                <p className="font-bold text-lg leading-relaxed opacity-80">
                   This container utilizes 4px tactical borders and a variable-offset hard shadow to create depth without using gradients or blurs.
                </p>
                <div className="mt-8 pt-6 border-t-4 border-black/10 flex gap-4">
                   <div className="h-4 w-4 bg-black rounded-full" />
                   <div className="h-4 w-4 bg-black/40 rounded-full" />
                   <div className="h-4 w-4 bg-black/10 rounded-full" />
                </div>
             </Card>
          </Card>
        </section>

        <section className="space-y-8">
          <div className="flex items-center space-x-4">
            <div className="h-8 w-2 bg-neo-yellow" />
            <h2 className="text-3xl font-black uppercase tracking-tight text-left">Vibrant Variants</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <Card variant="purple" className="p-8">
                <h4 className="font-black">PURPLE CORE</h4>
             </Card>
             <Card variant="cyan" className="p-8">
                <h4 className="font-black">CYAN IMPACT</h4>
             </Card>
             <Card variant="green" className="p-8">
                <h4 className="font-black">GREEN SYSTEM</h4>
             </Card>
             <Card variant="yellow" className="p-8">
                <h4 className="font-black">YELLOW ALERT</h4>
             </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
