import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "purple" | "cyan" | "green" | "yellow" | "outline"
}

function TaskBadge({ className, variant = "purple", ...props }: BadgeProps) {
  const variants = {
    purple: "bg-neo-purple text-black",
    cyan: "bg-neo-cyan text-black",
    green: "bg-neo-green text-black",
    yellow: "bg-neo-yellow text-black",
    outline: "text-foreground bg-transparent",
  }

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-none border-2 border-black px-2.5 py-0.5 text-xs font-black uppercase tracking-widest transition-colors shadow-[2px_2px_0px_black] dark:border-white dark:shadow-[2px_2px_0px_white]",
        variants[variant],
        className
      )}
      {...props}
    />
  )
}

export { TaskBadge }
