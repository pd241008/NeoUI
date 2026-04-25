import Link from "next/link"
import { ArrowLeft, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ShowcasePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-background">
      <div className="max-w-2xl w-full p-12 neo-border bg-white dark:bg-zinc-950 shadow-[12px_12px_0px_#A855F7] dark:shadow-[12px_12px_0px_white] text-center space-y-8">
        <div className="w-20 h-20 bg-neo-purple mx-auto neo-border shadow-[4px_4px_0px_black] flex items-center justify-center">
          <Rocket className="w-10 h-10 text-black" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
          Showcase <br />
          <span className="text-neo-cyan">Coming Soon</span>
        </h1>
        
        <p className="text-xl font-medium text-muted-foreground italic">
          "The brutalist revolution is being staged. Await further instructions."
        </p>
        
        <div className="p-6 border-2 border-dashed border-black dark:border-white font-mono text-sm space-y-2 opacity-70">
          <p>{">"} INITIALIZING_PLAYGROUND...</p>
          <p>{">"} LOADING_NEO_MODELS: 67%</p>
          <p>{">"} BUFFERING_SHADOWS: [||||||....]</p>
        </div>

        <div className="flex justify-center pt-8">
          <Link href="/">
            <Button variant="primary">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Return to Base
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
