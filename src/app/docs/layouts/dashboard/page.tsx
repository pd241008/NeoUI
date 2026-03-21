import { TaskCard, TaskCardHeader, TaskCardTitle, TaskCardDescription, TaskCardContent, TaskCardFooter } from "@/components/ui/task-card"
import { TaskButton } from "@/components/ui/task-button"
import { TaskBadge } from "@/components/ui/task-badge"

export default function DashboardShowcase() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-4xl font-black uppercase tracking-tight">Dashboard View</h1>
        <p className="text-lg text-muted-foreground mt-2">
          An example of how Neo-brutalist cards and buttons come together to create a high-impact dashboard.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <TaskCard>
          <TaskCardHeader>
            <TaskCardTitle>Revenue</TaskCardTitle>
            <TaskCardDescription>Monthly recurring revenue</TaskCardDescription>
          </TaskCardHeader>
          <TaskCardContent>
            <div className="text-4xl font-black">$45,231.89</div>
            <p className="text-xs font-bold text-neo-green mt-2">+20.1% from last month</p>
          </TaskCardContent>
        </TaskCard>

        <TaskCard>
          <TaskCardHeader>
            <TaskCardTitle>Active Users</TaskCardTitle>
            <TaskCardDescription>Real-time session count</TaskCardDescription>
          </TaskCardHeader>
          <TaskCardContent>
            <div className="text-4xl font-black">+2350</div>
            <TaskBadge variant="cyan" className="mt-2">+180.1% increase</TaskBadge>
          </TaskCardContent>
        </TaskCard>

        <TaskCard className="bg-neo-purple text-black">
          <TaskCardHeader>
            <TaskCardTitle className="text-black">Critical Tasks</TaskCardTitle>
            <TaskCardDescription className="text-black/70">Urgent items requiring attention</TaskCardDescription>
          </TaskCardHeader>
          <TaskCardContent>
             <div className="space-y-2">
                {[1, 2].map((i) => (
                   <div key={i} className="p-3 bg-white neo-border shadow-[2px_2px_0px_black] text-black text-sm font-bold flex justify-between items-center">
                      Task Request #{i}04
                      <TaskBadge variant="yellow">Urgent</TaskBadge>
                   </div>
                ))}
             </div>
          </TaskCardContent>
          <TaskCardFooter>
             <TaskButton variant="outline" size="sm" className="w-full bg-white text-black hover:bg-zinc-100">View All</TaskButton>
          </TaskCardFooter>
        </TaskCard>
      </div>
    </div>
  )
}
