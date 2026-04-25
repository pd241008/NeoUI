import { ComponentShowcase } from "@/components/docs/component-showcase"
import { Badge } from "@/components/ui/badge"

export default function BadgePage() {
  const badgeCode = `<Badge variant="purple">Purple</Badge>
<Badge variant="cyan">Cyan</Badge>
<Badge variant="green">Green</Badge>
<Badge variant="yellow">Yellow</Badge>
<Badge variant="outline">Outline</Badge>`

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-4xl font-black uppercase tracking-tight">Badge</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Modular status indicators with high-contrast background colors.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-black uppercase underline decoration-neo-green decoration-4 underline-offset-8">Variants</h2>
        <ComponentShowcase code={badgeCode} title="badge.tsx">
          <div className="flex flex-wrap gap-4">
            <Badge variant="purple">Purple</Badge>
            <Badge variant="cyan">Cyan</Badge>
            <Badge variant="green">Green</Badge>
            <Badge variant="yellow">Yellow</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
        </ComponentShowcase>
      </section>
    </div>
  )
}
