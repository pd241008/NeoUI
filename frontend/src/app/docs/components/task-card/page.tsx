import { ComponentShowcase } from "@/components/docs/component-showcase"
import { TaskCard, TaskCardHeader, TaskCardTitle, TaskCardDescription, TaskCardContent, TaskCardFooter } from "@/components/ui/task-card"
import { TaskButton } from "@/components/ui/task-button"

export default function TaskCardPage() {
  const cardCode = `<TaskCard className="w-[350px]">
  <TaskCardHeader>
    <TaskCardTitle>Create Project</TaskCardTitle>
    <TaskCardDescription>Deploy your new project in one-click.</TaskCardDescription>
  </TaskCardHeader>
  <TaskCardContent>
    <div className="p-4 bg-muted neo-border italic font-medium">
      Card Content goes here with specific Neo-brutalist padding and borders.
    </div>
  </TaskCardContent>
  <TaskCardFooter className="flex justify-between">
    <TaskButton variant="outline">Cancel</TaskButton>
    <TaskButton variant="primary">Deploy</TaskButton>
  </TaskCardFooter>
</TaskCard>`

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-4xl font-black uppercase tracking-tight">TaskCard</h1>
        <p className="text-lg text-muted-foreground mt-2">
          The foundation of the Neo-brutalist layout. Flexible containers with thick borders and hard shadows.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-black uppercase underline decoration-neo-yellow decoration-4 underline-offset-8">Standard Card</h2>
        <ComponentShowcase code={cardCode} title="task-card.tsx">
          <TaskCard className="w-[450px]">
            <TaskCardHeader>
              <TaskCardTitle>Create Project</TaskCardTitle>
              <TaskCardDescription>Deploy your new project in one-click.</TaskCardDescription>
            </TaskCardHeader>
            <TaskCardContent>
              <div className="p-4 bg-muted neo-border italic font-medium dark:text-black dark:bg-zinc-200">
                Neo-brutalism is about honesty in materials and stark geometric clarity.
              </div>
            </TaskCardContent>
            <TaskCardFooter className="flex justify-between">
              <TaskButton variant="outline">Cancel</TaskButton>
              <TaskButton variant="primary">Deploy</TaskButton>
            </TaskCardFooter>
          </TaskCard>
        </ComponentShowcase>
      </section>
    </div>
  )
}
