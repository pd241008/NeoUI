// @ts-nocheck
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  variant?: "primary" | "secondary" | "accent" | "outline" | "ghost"
  size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    const variants: Record<string, string> = {
      primary: "bg-neo-purple text-black shadow-[4px_4px_0px_black] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none",
      secondary: "bg-neo-cyan text-black shadow-[4px_4px_0px_black] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none",
      accent: "bg-neo-yellow text-black shadow-[4px_4px_0px_black] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none",
      outline: "bg-transparent border-2 border-black text-black hover:bg-zinc-100 transition-colors shadow-[2px_2px_0px_black] dark:text-white dark:border-white dark:hover:bg-zinc-900",
      ghost: "bg-transparent hover:bg-zinc-100 text-black transition-colors dark:text-white dark:hover:bg-zinc-900"
    }

    const sizes: Record<string, string> = {
      default: "h-12 px-6 py-2",
      sm: "h-9 px-4 text-xs",
      lg: "h-14 px-10 text-lg",
      icon: "h-10 w-10",
    }

    return (
      <Comp
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-none border-2 border-black font-black uppercase tracking-widest ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 dark:border-white",
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
