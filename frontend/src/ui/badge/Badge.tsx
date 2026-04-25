"use client";
import React from "react";
import { cn } from "@/lib/utils";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "success" | "error" | "purple" | "cyan" | "green" | "yellow";
};

export const Badge: React.FC<BadgeProps> = ({
  className,
  children,
  variant = "purple",
  ...props
}) => {
  const variantClasses = {
    default: "bg-neo-purple text-white",
    success: "bg-neo-green text-black",
    error: "bg-red-500 text-white",
    purple: "bg-neo-purple text-white",
    cyan: "bg-neo-cyan text-black",
    green: "bg-neo-green text-black",
    yellow: "bg-neo-yellow text-black",
  };

  return (
    <span
      className={cn(
        "inline-block px-2 py-0.5 text-xs font-black uppercase tracking-wider neo-border rounded-sm",
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
