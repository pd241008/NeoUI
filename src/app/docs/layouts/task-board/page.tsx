import { TaskCard, TaskCardHeader, TaskCardTitle, TaskCardContent } from "@/components/ui/task-card"
import { TaskBadge } from "@/components/ui/task-badge"
import { TaskButton } from "@/components/ui/task-button"
import { Plus } from "lucide-react"
import { cn } from "@/lib/utils"

export default function TaskBoardPage() {
  const columns = [
    { title: "To Do", color: "neo-purple", tasks: ["Design System", "Auth Flow"] },
    { title: "In Progress", color: "neo-cyan", tasks: ["API Integration"] },
    { title: "Review", color: "neo-yellow", tasks: ["Landing Page"] },
    { title: "Done", color: "neo-green", tasks: ["Initial Setup"] },
  ]

  return (
    <div className="space-y-10">
      <div className="flex justify-between items-center">
        <div>
           <h1 className="text-4xl font-black uppercase tracking-tight">Task Board</h1>
           <p className="text-lg text-muted-foreground mt-2">Kanban-style management with Neo-brutalist aesthetics.</p>
        </div>
        <TaskButton variant="primary" size="sm">
           <Plus className="mr-2 h-4 w-4" /> New Task
        </TaskButton>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {columns.map((col) => (
          <div key={col.title} className="space-y-4">
            <div className={cn(
              "px-3 py-2 neo-border text-black shadow-[4px_4px_0px_black] font-black uppercase text-sm flex justify-between items-center",
              col.color === "neo-purple" && "bg-neo-purple",
              col.color === "neo-cyan" && "bg-neo-cyan",
              col.color === "neo-yellow" && "bg-neo-yellow",
              col.color === "neo-green" && "bg-neo-green"
            )}>
               {col.title}
               <span className="bg-white px-1.5 neo-border text-xs leading-none py-0.5">{col.tasks.length}</span>
            </div>
            {col.tasks.map((task, i) => (
              <TaskCard key={i} className="shadow-[4px_4px_0px_black] hover:shadow-[6px_6px_0px_black] transition-all cursor-pointer">
                <TaskCardHeader className="p-4 border-b-2">
                  <TaskCardTitle className="text-base">{task}</TaskCardTitle>
                </TaskCardHeader>
                <TaskCardContent className="p-4 pt-4">
                   <div className="flex gap-2">
                       <TaskBadge variant={col.color.replace('neo-', '') as any}>v1.0</TaskBadge>
                       <TaskBadge variant="outline">Docs</TaskBadge>
                   </div>
                </TaskCardContent>
              </TaskCard>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
