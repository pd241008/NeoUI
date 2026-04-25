import { ComponentShowcase } from "@/components/docs/component-showcase"
import { Button } from "@/components/ui/button"

export default function ButtonPage() {
  const buttonCode = `<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="accent">Accent</Button>
<Button variant="outline">Outline</Button>`

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-4xl font-black uppercase tracking-tight">Button</h1>
        <p className="text-lg text-muted-foreground mt-2">
          A high-contrast Neo-brutalist button component with multiple artistic variants.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-black uppercase underline decoration-neo-purple decoration-4 underline-offset-8">Usage</h2>
        <ComponentShowcase code={buttonCode} title="button.tsx">
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="accent">Accent</Button>
            <Button variant="outline">Outline</Button>
          </div>
        </ComponentShowcase>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-black uppercase underline decoration-neo-cyan decoration-4 underline-offset-8">Sizes</h2>
        <ComponentShowcase 
          code={`<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>`}
        >
          <div className="flex flex-wrap items-center gap-4">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
          </div>
        </ComponentShowcase>
      </section>
    </div>
  )
}
