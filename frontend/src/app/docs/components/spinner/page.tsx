import { Spinner } from "@/ui/spinner/Spinner";
import { Card } from "@/ui/card/Card";
import { FlipCard } from "@/ui/flipcard/FlipCard";

export default function SpinnerPage() {
  return (
    <div className="space-y-12 pb-20">
      <Card variant="green" className="p-8 md:p-12">
        <h1 className="text-4xl font-black uppercase tracking-tighter sm:text-7xl mb-4 italic text-black">
          Spinner
        </h1>
        <p className="text-xl md:text-2xl font-bold opacity-90 max-w-2xl text-black">
          Persistent, high-impact loading indicators designed to maintain visual tension during async states.
        </p>
      </Card>

      <div className="grid gap-16">
        <section className="space-y-8">
           <div className="flex items-center space-x-4">
             <div className="h-8 w-2 bg-neo-green" />
             <h2 className="text-3xl font-black uppercase tracking-tight">Basic Usage</h2>
          </div>
          <Card variant="green" className="p-16 md:p-32 flex justify-center items-center h-[500px]">
             {/* STATIC SIZE: Used w-48 h-48 instead of scale-[3] */}
             <Spinner className="w-48 h-48 border-8" />
          </Card>
        </section>

        <section className="space-y-8">
          <div className="flex items-center space-x-4">
            <div className="h-8 w-2 bg-neo-purple" />
            <h2 className="text-3xl font-black uppercase tracking-tight text-left">Installation</h2>
          </div>
          <div className="h-[300px]">
            <FlipCard code={`import { Spinner } from "@/ui/spinner/Spinner";

<Spinner />`}>
               <div className="flex flex-col items-center justify-center h-full space-y-4">
                  <Spinner className="w-16 h-16" />
                  <p className="text-xs font-black uppercase opacity-60">Spinning...</p>
               </div>
            </FlipCard>
          </div>
        </section>
      </div>
    </div>
  );
}
