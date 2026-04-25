"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/ui/tabs/Tabs";
import { Card } from "@/ui/card/Card";
import { FlipCard } from "@/ui/flipcard/FlipCard";
import { ColorSwitch } from "@/components/docs/color-switch";
import { cn } from "@/lib/utils";

type ColorVariant = "purple" | "cyan" | "green" | "yellow" | "default";

export default function TabsPage() {
  const [activeVariant, setActiveVariant] = useState<ColorVariant>("purple");

  return (
    <div className="space-y-12 pb-20">
      <Card variant={activeVariant === "default" ? "purple" : activeVariant} className="p-8 md:p-12 transition-colors duration-500">
        <h1 className="text-4xl font-black uppercase tracking-tighter sm:text-7xl mb-4 italic text-black">
          Tabs
        </h1>
        <p className="text-xl md:text-2xl font-bold opacity-90 max-w-2xl text-black">
          Structured layout switches with high-contrast active states and tactical feedback.
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

          {/* STATIC SIZE: Use explicit dimensions instead of scale to prevent layout breakage */}
          <Card variant={activeVariant === "default" ? "purple" : activeVariant} className="p-16 md:p-24 flex justify-center items-center transition-colors duration-500 min-h-[600px]">
            <div className="w-full max-w-4xl h-full flex flex-col items-center">
              <Tabs defaultValue="account" className="w-full">
                <TabsList className="grid w-full grid-cols-2 neo-border-thick bg-white p-3 border-black">
                  <TabsTrigger value="account" className="text-2xl py-6 data-[state=active]:bg-neo-purple data-[state=active]:text-white data-[state=active]:shadow-neo">ACCOUNT DATA</TabsTrigger>
                  <TabsTrigger value="password" className="text-2xl py-6 data-[state=active]:bg-neo-cyan data-[state=active]:text-black data-[state=active]:shadow-neo">SECURITY PROTOCOL</TabsTrigger>
                </TabsList>
                <TabsContent value="account">
                  <Card className="p-12 md:p-20 mt-12 bg-white text-black neo-border-thick shadow-[24px_24px_0_0_black]">
                    <h3 className="text-5xl font-black italic mb-8 tracking-tighter">ACCESS LOGS</h3>
                    <p className="font-bold text-2xl leading-relaxed opacity-80">View and manage your core identity parameters and verified authentication streams in real-time.</p>
                    <div className="mt-12 flex gap-4">
                      <div className="h-6 w-12 bg-neo-purple neo-border" />
                      <div className="h-6 w-24 bg-neo-cyan neo-border" />
                    </div>
                  </Card>
                </TabsContent>
                <TabsContent value="password">
                  <Card className="p-12 md:p-20 mt-12 bg-white text-black neo-border-thick shadow-[24px_24px_0_0_black]">
                    <h3 className="text-5xl font-black italic mb-8 tracking-tighter">ENCRYPTION</h3>
                    <p className="font-bold text-2xl leading-relaxed opacity-80">Rotate security keys and verify deep-level access permissions across the tactical workspace.</p>
                    <div className="mt-12 flex gap-4">
                      <div className="h-6 w-32 bg-neo-yellow neo-border" />
                      <div className="h-6 w-12 bg-neo-green neo-border" />
                    </div>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </Card>
        </section>

        <section className="space-y-8">
          <div className="flex items-center space-x-4">
            <div className="h-8 w-2 bg-neo-purple" />
            <h2 className="text-3xl font-black uppercase tracking-tight text-left">Installation</h2>
          </div>
          <div className="h-[400px]">
            <FlipCard code={`import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/ui/tabs/Tabs";

<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
</Tabs>`}>
              <div className="flex flex-col items-center justify-center h-full space-y-4">
                <div className="bg-neo-purple px-6 py-3 neo-border shadow-neo">
                  <span className="font-black uppercase text-xl italic text-white">LAYOUT SWITCH</span>
                </div>
                <p className="font-bold opacity-70 text-xs uppercase tracking-widest">Double-tap for components</p>
              </div>
            </FlipCard>
          </div>
        </section>
      </div>
    </div>
  );
}
