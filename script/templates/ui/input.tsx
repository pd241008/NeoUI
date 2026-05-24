// @ts-nocheck
"use client";
import React from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "default" | "purple" | "cyan" | "green" | "yellow";
}

export const Input: React.FC<InputProps> = ({ className, variant = "default", ...props }) => {
  const variantClasses = {
    default: "bg-background text-foreground",
    purple: "bg-neo-purple text-white placeholder:text-white/50",
    cyan: "bg-neo-cyan text-black placeholder:text-black/50",
    green: "bg-neo-green text-black placeholder:text-black/50",
    yellow: "bg-neo-yellow text-black placeholder:text-black/50",
  };

  return (
    <input
      className={cn(
        "w-full px-4 py-3 neo-border-thick shadow-neo font-mono focus:outline-none focus:ring-4 focus:ring-black/10 transition-all",
        variantClasses[variant],
        className
      )}
      {...props}
    />
  );
};
