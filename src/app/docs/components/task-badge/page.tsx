import { ComponentShowcase } from "@/components/docs/component-showcase"
import { TaskBadge } from "@/components/ui/task-badge"

export default function TaskBadgePage() {
  const badgeCode = `<TaskBadge variant="purple">Purple</TaskBadge>
<TaskBadge variant="cyan">Cyan</TaskBadge>
<TaskBadge variant="green">Green</TaskBadge>
<TaskBadge variant="yellow">Yellow</TaskBadge>
<TaskBadge variant="outline">Outline</TaskBadge>`

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-4xl font-black uppercase tracking-tight">TaskBadge</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Modular status indicators with high-contrast background colors.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-black uppercase underline decoration-neo-green decoration-4 underline-offset-8">Variants</h2>
        <ComponentShowcase code={badgeCode} title="task-badge.tsx">
          <div className="flex flex-wrap gap-4">
            <TaskBadge variant="purple">Purple</TaskBadge>
            <TaskBadge variant="cyan">Cyan</TaskBadge>
            <TaskBadge variant="green">Green</TaskBadge>
            <TaskBadge variant="yellow">Yellow</TaskBadge>
            <TaskBadge variant="outline">Outline</TaskBadge>
          </div>
        </ComponentShowcase>
      </section>
    </div>
  )
}
