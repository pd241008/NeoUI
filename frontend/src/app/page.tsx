import Link from "next/link"
import { ArrowRight, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 flex flex-col items-center text-center px-4">
        <div className="space-y-6 max-w-4xl">
           <div className="inline-block px-3 py-1 rounded-full border-2 border-black bg-neo-cyan text-xs font-black uppercase tracking-widest shadow-[2px_2px_0px_black] text-black">
             v1.0.0 is now live
           </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-tight">
            Build Faster with <br />
            <span className="bg-neo-purple px-4 py-2 neo-border shadow-[8px_8px_0px_black] text-black">
              NEO-BRUTALISM
            </span>
          </h1>
          <p className="mx-auto max-w-[700px] text-lg md:text-xl font-medium text-muted-foreground mt-8">
            A premium UI library for high-contrast, strictly-typed applications. Replicating the shadcn layout with a stark, modern aesthetic.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link 
              href="/docs" 
              className="group h-14 px-8 inline-flex items-center justify-center bg-black text-white dark:bg-white dark:text-black font-black uppercase tracking-widest neo-border shadow-[4px_4px_0px_#A855F7] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="https://github.com" 
              className="h-14 px-8 inline-flex items-center justify-center bg-white text-black dark:bg-zinc-950 dark:text-white font-black uppercase tracking-widest neo-border shadow-[4px_4px_0px_black] dark:shadow-[4px_4px_0px_white] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
            >
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="w-full py-20 bg-muted/50 dark:bg-zinc-900 border-y-2 border-black dark:border-zinc-800">
        <div className="container px-4 md:px-8 mx-auto">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { color: "neo-purple", title: "Modular", icon: "📦" },
              { color: "neo-cyan", title: "Accessible", icon: "♿" },
              { color: "neo-green", title: "Fast", icon: "⚡" },
              { color: "neo-yellow", title: "Typed", icon: "TypeScript" },
            ].map((feature, i) => (
              <div key={i} className={`p-8 neo-border bg-white dark:bg-zinc-950 shadow-[6px_6px_0px_black] dark:shadow-[6px_6px_0px_white] group hover:-translate-y-1 transition-transform`}>
                <div className={`w-12 h-12 mb-6 flex items-center justify-center text-2xl bg-${feature.color} neo-border shadow-[3px_3px_0px_black] text-black`}>
                  {feature.icon.length > 2 ? feature.icon[0] : feature.icon}
                </div>
                <h3 className="text-xl font-black uppercase mb-3">{feature.title}</h3>
                <p className="text-muted-foreground font-medium">
                  Built with strict architectural patterns for performance and scale.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase Preview */}
      <section className="w-full py-32 container px-4 md:px-8 mx-auto">
         <div className="flex flex-col items-center space-y-4 text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black uppercase">The Showcase</h2>
            <p className="text-muted-foreground max-w-[600px] font-medium italic">
              "NEO-BRUTALISM IS NOT JUST A DESIGN CHOICE, IT'S A STATEMENT OF CLARITY."
            </p>
         </div>
         <div className="w-full max-w-5xl mx-auto p-8 md:p-12 neo-border bg-white dark:bg-zinc-950 shadow-[12px_12px_0px_#22D3EE] dark:shadow-[12px_12px_0px_white]">
            <div className="grid gap-8 lg:grid-cols-2">
               <div className="space-y-6">
                  <Card className="shadow-[8px_8px_0px_black] dark:shadow-[8px_8px_0px_#A855F7]">
                     <CardHeader>
                        <div className="flex justify-between items-start">
                           <CardTitle>System Launch</CardTitle>
                           <Badge variant="purple">Critical</Badge>
                        </div>
                        <CardDescription>Awaiting manual confirmation from the terminal.</CardDescription>
                     </CardHeader>
                     <CardContent>
                        <div className="p-4 bg-muted neo-border font-mono text-sm dark:text-black dark:bg-zinc-200">
                           {">"} EXECUTION_MODE: ENABLED<br/>
                           {">"} TARGET_STATION: DELTA_7<br/>
                           {">"} STATUS: READY
                        </div>
                     </CardContent>
                     <CardFooter className="flex justify-end gap-3">
                        <Button variant="outline" size="sm">Abort</Button>
                        <Button variant="primary" size="sm">Confirm</Button>
                     </CardFooter>
                  </Card>
               </div>
               <div className="flex flex-col justify-center space-y-6">
                  <h3 className="text-3xl font-black uppercase leading-tight">
                    Modular by Design. <br/>
                    <span className="text-neo-purple">Strictly Typed.</span>
                  </h3>
                  <p className="text-muted-foreground font-medium">
                    Our components are built to be combined. Every piece of UI follows a strict 2px border and hard shadow policy, ensuring visual consistency across your entire application.
                  </p>
                  <div className="flex gap-4">
                     <Badge variant="cyan">Standardized</Badge>
                     <Badge variant="yellow">Customizable</Badge>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  )
}
