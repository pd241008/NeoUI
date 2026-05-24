"use client";
import React, { useState } from "react";
import { Input } from "@/ui/input/Input";
import { Card } from "@/ui/card/Card";
import { FlipCard } from "@/ui/flipcard/FlipCard";
import { ColorSwitch } from "@/components/docs/color-switch";
import { cn } from "@/lib/utils";

type ColorVariant = "purple" | "cyan" | "green" | "yellow" | "default";

export default function InputPage() {
  const [activeVariant, setActiveVariant] = useState<ColorVariant>("green");

  return (
    <div className="space-y-12 pb-20">
      <Card variant={activeVariant === "default" ? "green" : activeVariant} className="p-8 md:p-12 transition-colors duration-500">
        <h1 className="text-4xl font-black uppercase tracking-tighter sm:text-7xl mb-4 italic text-black">
          Input
        </h1>
        <p className="text-xl md:text-2xl font-bold opacity-90 max-w-2xl text-black">
          Bold data entry fields with heavy borders, tactical shadows, and high-impact focus states.
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

          <Card variant="default" className="p-16 md:p-32 flex flex-col justify-center items-center transition-colors duration-500 gap-16 min-h-[600px] bg-zinc-50 dark:bg-zinc-900/50">
            <FlipCard naked={true} className="w-full max-w-2xl"
              backContent={
                <Input placeholder="SECONDARY INPUT..." variant="default" className="text-3xl p-8" />
              }
            >
              <Input placeholder="ACTIVE INPUT FIELD..." variant={activeVariant === "default" ? "green" : activeVariant} className="text-4xl p-10 shadow-[20px_20px_0_0_black] dark:shadow-[20px_20px_0_0_white]" />
            </FlipCard>
          </Card>
        </section>

        <section className="space-y-8">
          <div className="flex items-center space-x-4">
            <div className="h-8 w-2 bg-neo-purple" />
            <h2 className="text-3xl font-black uppercase tracking-tight text-left">Installation</h2>
          </div>
          <div className="h-[300px]">
            <FlipCard code={`import { Input } from "@/ui/input/Input";

<Input variant="green" placeholder="Enter Data" />`}>
              <div className="flex flex-col items-center justify-center h-full space-y-4">
                <div className="bg-neo-purple px-6 py-3 neo-border shadow-neo">
                  <span className="font-black uppercase text-xl italic text-white">INPUT CORE</span>
                </div>
                <p className="font-bold opacity-70 text-xs uppercase tracking-widest">Flip for options</p>
              </div>
            </FlipCard>
          </div>
        </section>
      </div>
    </div>
  );
}
