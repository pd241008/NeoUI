import { Button } from "@/ui/button/Button";
import { Card } from "@/ui/card/Card";
import { Badge } from "@/ui/badge/Badge";

export default function LandingPageLayout() {
  return (
    <div className="space-y-10 pb-20">
      <div className="space-y-4">
        <h1 className="text-4xl font-black uppercase tracking-tighter sm:text-6xl">
          Landing Page Layout
        </h1>
        <p className="text-xl text-muted-foreground font-medium text-right">
          A high-impact landing page example using Neo-brutalist blocks.
        </p>
      </div>

      <div className="grid gap-12">
        <section className="space-y-6">
          <Card className="min-h-[500px] flex flex-col items-center justify-center text-center space-y-8 bg-neo-purple p-12 text-white">
             <Badge variant="default" className="bg-white text-black text-lg px-4 py-1">v1.0.0 is live</Badge>
             <h2 className="text-6xl font-black uppercase tracking-tighter max-w-2xl">
                Build Fast. <br /> Built for Impact.
             </h2>
             <p className="text-xl font-bold max-w-xl opacity-90">
                The most aggressive UI library for modern web applications. 
                Neo-brutalism meets Next.js 15.
             </p>
             <div className="flex gap-4">
                <Button variant="yellow" className="text-xl px-8 py-4">Get Started</Button>
                <Button variant="outline" className="text-xl px-8 py-4 border-white text-white hover:bg-white hover:text-black">Star on GitHub</Button>
             </div>
          </Card>
        </section>

        <div className="grid md:grid-cols-2 gap-8">
           <Card header="Real-time Analytics" className="bg-neo-bg-secondary">
              <div className="space-y-4 text-black">
                 <p className="font-bold uppercase tracking-tight">System performance at 99.9% uptime.</p>
                 <div className="h-2 bg-neo-purple neo-border w-3/4 shadow-[2px_2px_0px_black]"></div>
              </div>
           </Card>
           <Card header="User Management" className="bg-neo-bg-secondary">
              <div className="space-y-4 text-black">
                 <p className="font-bold uppercase tracking-tight">Manage your team with ease.</p>
                 <div className="flex gap-2">
                    <Badge variant="purple">Admin</Badge>
                    <Badge variant="cyan">User</Badge>
                 </div>
              </div>
           </Card>
        </div>

        <section className="grid md:grid-cols-3 gap-6">
           <Card className="bg-neo-cyan text-black space-y-4">
              <h3 className="text-2xl font-black uppercase">Modular</h3>
              <p className="font-bold">Every component is a stand-alone powerhouse.</p>
           </Card>
           <Card className="bg-neo-green text-black space-y-4">
              <h3 className="text-2xl font-black uppercase">Typesafe</h3>
              <p className="font-bold">Built with TS for maximum developer velocity.</p>
           </Card>
           <Card className="bg-neo-yellow text-black space-y-4">
              <h3 className="text-2xl font-black uppercase">Premium</h3>
              <p className="font-bold">Designed to wow your users at first glance.</p>
           </Card>
        </section>
      </div>
    </div>
  );
}
