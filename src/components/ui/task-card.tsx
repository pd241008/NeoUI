import * as React from "react"
import { cn } from "@/lib/utils"

const TaskCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-none border-2 border-black bg-white text-black shadow-[8px_8px_0px_black] dark:bg-zinc-950 dark:text-white dark:border-white dark:shadow-[8px_8px_0px_white]",
      className
    )}
    {...props}
  />
))
TaskCard.displayName = "TaskCard"

const TaskCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6 border-b-2 border-black dark:border-white", className)}
    {...props}
  />
))
TaskCardHeader.displayName = "TaskCardHeader"

const TaskCardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-black uppercase tracking-tight leading-none",
      className
    )}
    {...props}
  />
))
TaskCardTitle.displayName = "TaskCardTitle"

const TaskCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm font-medium text-muted-foreground", className)}
    {...props}
  />
))
TaskCardDescription.displayName = "TaskCardDescription"

const TaskCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
TaskCardContent.displayName = "TaskCardContent"

const TaskCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0 mt-6", className)}
    {...props}
  />
))
TaskCardFooter.displayName = "TaskCardFooter"

export { TaskCard, TaskCardHeader, TaskCardFooter, TaskCardTitle, TaskCardDescription, TaskCardContent }
