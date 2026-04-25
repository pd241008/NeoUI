import { Card } from "@/ui/card/Card";
import { Badge } from "@/ui/badge/Badge";
import { ThemeToggle } from "@/components/theme-toggle";

export default function ThemingPage() {
  return (
    <div className="space-y-10 pb-20">
      <div className="space-y-4">
        <h1 className="text-4xl font-black uppercase tracking-tighter sm:text-6xl">
          Theming
        </h1>
        <p className="text-xl text-muted-foreground font-medium">
          Learn how the Neo-brutalist theme system works and how to customize it.
        </p>
      </div>

      <div className="grid gap-8">
        <section className="space-y-4">
          <h2 className="text-2xl font-black uppercase tracking-tight">Concept</h2>
          <Card className="p-8">
            <p className="leading-7 font-medium">
              NeoUI uses a high-contrast Neo-brutalist design system. In light mode, it emphasizes 
              <Badge variant="default" className="mx-1">Sharp Black Borders</Badge> and 
              <Badge variant="default" className="mx-1">Heavy Shadows</Badge>. In dark mode, these shift to 
              <Badge variant="default" className="mx-1">White or Vibrant Borders</Badge> to maintain 
              visibility and impact.
            </p>
          </Card>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-black uppercase tracking-tight">Theme Toggle</h2>
          <div className="flex items-center space-x-4 p-6 neo-border bg-neo-bg-secondary neo-shadow">
             <div className="flex-1 space-y-1">
                <p className="font-bold uppercase tracking-tight">Toggle Component</p>
                <p className="text-sm text-muted-foreground">Use this to switch between light and dark modes.</p>
             </div>
             <ThemeToggle />
          </div>
          <pre className="p-4 bg-zinc-950 text-blue-400 neo-border shadow-neo overflow-x-auto">
            <code>{`import { ThemeToggle } from "@/components/theme-toggle";

export default function Navbar() {
  return (
    <nav>
      <ThemeToggle />
    </nav>
  );
}`}</code>
          </pre>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-black uppercase tracking-tight">Customization</h2>
          <p className="text-muted-foreground font-medium">
            You can customize the Neo-brutalist colors by overriding the following CSS variables in your <code className="bg-muted px-1 rounded">globals.css</code>:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <Card className="bg-neo-bg-secondary">
              <h3 className="font-black uppercase mb-4">Light Mode</h3>
              <pre className="text-xs space-y-1">
                <code>{`:root {
  --neo-border: #000000;
  --neo-shadow: 4px 4px 0px 0px #000;
  --neo-shadow-hover: 2px 2px 0px #000;
}`}</code>
              </pre>
            </Card>
            <Card className="bg-neo-bg-secondary">
              <h3 className="font-black uppercase mb-4">Dark Mode</h3>
              <pre className="text-xs space-y-1 text-blue-400">
                <code>{`.dark {
  --neo-border: #fafafa;
  --neo-shadow: 4px 4px 0px 0px #fafafa;
  --neo-shadow-hover: 2px 2px #fafafa;
}`}</code>
              </pre>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
