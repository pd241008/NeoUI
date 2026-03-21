"use client";
import React, { useState } from "react";
import { FlipCard } from "@/ui/flipcard/FlipCard";
import { Card } from "@/ui/card/Card";
import { ColorSwitch } from "@/components/docs/color-switch";
import { cn } from "@/lib/utils";

type ColorVariant = "purple" | "cyan" | "green" | "yellow" | "default";

export default function FlipCardPage() {
  const [activeVariant, setActiveVariant] = useState<ColorVariant>("yellow");

  const codeExample = `<Button variant="purple">
  Interact With Me
</Button>`;

  return (
    <div className="space-y-12 pb-20">
      <Card variant={activeVariant === "default" ? "yellow" : activeVariant} className="p-8 md:p-12 transition-colors duration-500">
        <h1 className="text-4xl font-black uppercase tracking-tighter sm:text-7xl mb-4 italic text-black">
          Flip Card
        </h1>
        <p className="text-xl md:text-2xl font-bold opacity-90 max-w-2xl text-black">
          Interactive reveal blocks that flip horizontally to showcase source code, details, or secondary content.
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

          <Card variant={activeVariant === "default" ? "yellow" : activeVariant} className="p-16 md:p-24 flex justify-center items-center h-[600px] transition-colors duration-500">
            {/* STATIC SIZE: Used larger fixed dimensions instead of scale */}
            <div className="w-[600px] h-[450px]">
              <FlipCard code={codeExample}>
                <div className="flex flex-col items-center justify-center h-full space-y-6 text-black text-center p-12">
                  <h3 className="text-5xl font-black uppercase tracking-tighter italic">Tactical Reveal</h3>
                  <p className="font-bold text-xl leading-relaxed">Click the icon to see the underlying architecture and procedural source code.</p>
                </div>
              </FlipCard>
            </div>
          </Card>
        </section>

        <section className="space-y-8">
          <div className="flex items-center space-x-4">
            <div className="h-8 w-2 bg-neo-green" />
            <h2 className="text-3xl font-black uppercase tracking-tight text-left">Installation</h2>
          </div>
          <div className="h-[350px]">
            <FlipCard code={`import { FlipCard } from "@/ui/flipcard/FlipCard";

<FlipCard code={codeString}>
  <div>Your Content</div>
</FlipCard>`}>
              <div className="flex flex-col items-center justify-center h-full space-y-4">
                <div className="bg-neo-green px-6 py-3 neo-border shadow-[8px_8px_0_0_white]">
                  <span className="font-black uppercase text-xl italic text-black">META FLIP</span>
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
