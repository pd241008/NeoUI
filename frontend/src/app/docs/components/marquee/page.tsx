"use client";
import { Marquee } from "@/ui/marquee/Marquee";
import { Card } from "@/ui/card/Card";
import { Badge } from "@/ui/badge/Badge";

export default function MarqueePage() {
  const items = ["FAST", "BOLD", "AGGRESSIVE", "TACTICAL", "IMPACT", "BRUTALIST"];

  return (
    <div className="space-y-12 pb-20">
      <Card variant="purple" className="p-8 md:p-12">
        <h1 className="text-4xl font-black uppercase tracking-tighter sm:text-7xl mb-4 italic text-white">
          Marquee
        </h1>
        <p className="text-xl md:text-2xl font-bold opacity-90 max-w-2xl text-white">
          Infinite horizontal tickers for high-energy information broadcasting.
        </p>
      </Card>

      <div className="grid gap-16">
        <section className="space-y-8">
           <div className="flex items-center space-x-4">
             <div className="h-8 w-2 bg-neo-purple" />
             <h2 className="text-3xl font-black uppercase tracking-tight">Basic Usage</h2>
          </div>
          <Card variant="purple" className="p-16 md:p-24 flex flex-col items-center justify-center overflow-hidden">
            <Marquee speed={15} className="bg-zinc-950 py-8 neo-border border-l-0 border-r-0">
               {items.map((item, i) => (
                 <div key={i} className="flex items-center space-x-6">
                    <span className="text-4xl font-black tracking-tighter text-white">{item}</span>
                    <div className="h-4 w-4 bg-neo-cyan rotate-45" />
                 </div>
               ))}
            </Marquee>
          </Card>
        </section>

        <section className="space-y-8">
           <div className="flex items-center space-x-4">
             <div className="h-8 w-2 bg-neo-cyan" />
             <h2 className="text-3xl font-black uppercase tracking-tight">Component Integration</h2>
          </div>
          <Card className="p-16 md:p-24 bg-zinc-950 shadow-[12px_12px_0px_0px_var(--neo-cyan)] overflow-hidden">
            <Marquee speed={10} className="mb-12">
               {items.map((item, i) => (
                 <Badge key={i} variant={i % 2 === 0 ? "purple" : "cyan"} className="scale-150 mx-4">
                    {item}
                 </Badge>
               ))}
            </Marquee>
          </Card>
        </section>
      </div>
    </div>
  );
}
