"use client";
import React from "react";
import { cn } from "@/lib/utils";

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  header?: React.ReactNode;
  variant?: "default" | "purple" | "cyan" | "green" | "yellow";
};

export const Card: React.FC<CardProps> = ({
  children,
  className,
  header,
  variant = "default",
  ...props
}) => {
  const variantClasses = {
    default: "bg-background text-foreground",
    purple: "bg-neo-purple text-white shadow-[8px_8px_0px_0px_black] dark:shadow-[8px_8px_0px_0px_white]",
    cyan: "bg-neo-cyan text-black shadow-[8px_8px_0px_0px_black] dark:shadow-[8px_8px_0px_0px_white]",
    green: "bg-neo-green text-black shadow-[8px_8px_0px_0px_black] dark:shadow-[8px_8px_0px_0px_white]",
    yellow: "bg-neo-yellow text-black shadow-[8px_8px_0px_0px_black] dark:shadow-[8px_8px_0px_0px_white]",
  };

  return (
    <div
      className={cn(
        "neo-border overflow-hidden",
        variantClasses[variant],
        variant === "default" && "shadow-neo",
        className
      )}
      {...props}
    >
      {header && (
        <div className="bg-neo-yellow border-b-2 border-black px-4 py-2 font-black uppercase tracking-widest text-sm text-black">
          {header}
        </div>
      )}
      <div className="p-6">{children}</div>
    </div>
  );
};
