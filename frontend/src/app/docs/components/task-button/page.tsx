import { ComponentShowcase } from "@/components/docs/component-showcase"
import { TaskButton } from "@/components/ui/task-button"

export default function TaskButtonPage() {
  const buttonCode = `<TaskButton variant="primary">Primary</TaskButton>
<TaskButton variant="secondary">Secondary</TaskButton>
<TaskButton variant="accent">Accent</TaskButton>
<TaskButton variant="outline">Outline</TaskButton>`

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-4xl font-black uppercase tracking-tight">TaskButton</h1>
        <p className="text-lg text-muted-foreground mt-2">
          A high-contrast Neo-brutalist button component with multiple artistic variants.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-black uppercase underline decoration-neo-purple decoration-4 underline-offset-8">Usage</h2>
        <ComponentShowcase code={buttonCode} title="task-button.tsx">
          <div className="flex flex-wrap gap-4">
            <TaskButton variant="primary">Primary</TaskButton>
            <TaskButton variant="secondary">Secondary</TaskButton>
            <TaskButton variant="accent">Accent</TaskButton>
            <TaskButton variant="outline">Outline</TaskButton>
          </div>
        </ComponentShowcase>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-black uppercase underline decoration-neo-cyan decoration-4 underline-offset-8">Sizes</h2>
        <ComponentShowcase 
          code={`<TaskButton size="sm">Small</TaskButton>
<TaskButton size="default">Default</TaskButton>
<TaskButton size="lg">Large</TaskButton>`}
        >
          <div className="flex flex-wrap items-center gap-4">
            <TaskButton size="sm">Small</TaskButton>
            <TaskButton size="default">Default</TaskButton>
            <TaskButton size="lg">Large</TaskButton>
          </div>
        </ComponentShowcase>
      </section>
    </div>
  )
}
