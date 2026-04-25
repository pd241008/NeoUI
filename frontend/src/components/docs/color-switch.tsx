"use client";
import React from "react";
import { cn } from "@/lib/utils";

type ColorVariant = "purple" | "cyan" | "green" | "yellow" | "default";

interface ColorSwitchProps {
  value: ColorVariant;
  onChange: (value: ColorVariant) => void;
  className?: string;
}

export const ColorSwitch: React.FC<ColorSwitchProps> = ({
  value,
  onChange,
  className,
}) => {
  const options: ColorVariant[] = ["purple", "cyan", "green", "yellow", "default"];
  
  const colors: Record<ColorVariant, string> = {
    purple: "bg-neo-purple",
    cyan: "bg-neo-cyan",
    green: "bg-neo-green",
    yellow: "bg-neo-yellow",
    default: "bg-zinc-300 dark:bg-zinc-700",
  };

  return (
    <div className={cn("flex items-center space-x-3 p-2 bg-zinc-950 neo-border", className)}>
      <span className="text-xs font-black uppercase tracking-widest text-white px-2">Engage:</span>
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => onChange(opt)}
          className={cn(
            "h-6 w-6 neo-border transition-all hover:scale-110 active:scale-95",
            colors[opt],
            value === opt ? "ring-2 ring-white ring-offset-2 ring-offset-black scale-125" : "opacity-60"
          )}
          title={opt}
        />
      ))}
    </div>
  );
};
