"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./buttonVariants";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "ghost" | "purple" | "cyan" | "green" | "yellow";
};

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = "purple",
  ...props
}) => {
  return (
    <button
      className={cn(
        "px-4 py-2 font-black uppercase tracking-wider text-sm transition-all neo-border neo-shadow neo-shadow-hover",
        buttonVariants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
