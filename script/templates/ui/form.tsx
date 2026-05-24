// @ts-nocheck
"use client";
import React from "react";
import { Button, Input } from "../";
import { cn } from "@/lib/utils";

interface FormProps {
  onSubmit?: (data: Record<string, FormDataEntryValue>) => void;
  title?: string;
  variant?: "default" | "purple" | "cyan" | "green" | "yellow";
  className?: string;
}

export const Form: React.FC<FormProps> = ({
  onSubmit,
  title = " Fill the Form",
  variant = "default",
  className,
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    onSubmit?.(data);
  };

  const variantClasses = {
    default: "bg-background text-foreground",
    purple: "bg-neo-purple text-white shadow-[12px_12px_0px_0px_black] dark:shadow-[12px_12px_0px_0px_white]",
    cyan: "bg-neo-cyan text-black shadow-[12px_12px_0px_0px_black] dark:shadow-[12px_12px_0px_0px_white]",
    green: "bg-neo-green text-black shadow-[12px_12px_0px_0px_black] dark:shadow-[12px_12px_0px_0px_white]",
    yellow: "bg-neo-yellow text-black shadow-[12px_12px_0px_0px_black] dark:shadow-[12px_12px_0px_0px_white]",
  };

  const inputBg = variant === "default" ? "bg-background" : "bg-white text-black";

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "w-full max-w-md mx-auto space-y-6 p-10 neo-border transition-all duration-300",
        variantClasses[variant],
        className
      )}
    >
      <h2 className={cn(
        "text-2xl font-black uppercase tracking-tighter text-center italic mb-4",
        variant === "purple" ? "text-white" : "text-black"
      )}>
        {title}
      </h2>

      <div className="space-y-3">
        <label className="block text-xs font-black uppercase tracking-[0.2em] opacity-80" htmlFor="name">
          Identity / Name
        </label>
        <Input
          id="name"
          name="name"
          placeholder="ENTER IDENTIFIER"
          required
          className={cn("neo-border-thick", inputBg)}
        />
      </div>

      <div className="space-y-3">
        <label className="block text-xs font-black uppercase tracking-[0.2em] opacity-80" htmlFor="email">
          Communication / Email
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="USER@DOMAIN.COM"
          required
          className={cn("neo-border-thick", inputBg)}
        />
      </div>

      <div className="space-y-3">
        <label className="block text-xs font-black uppercase tracking-[0.2em] opacity-80" htmlFor="message">
          Transmission / Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="INPUT MESSAGE DATA..."
          className={cn(
            "w-full px-4 py-3 neo-border-thick shadow-neo font-mono focus:outline-none focus:ring-4 focus:ring-black/20 transition-all placeholder:opacity-50",
            inputBg
          )}
          required
        ></textarea>
      </div>

      <div className="pt-6">
        <Button
          className="w-full py-6 text-lg"
          variant={variant === "purple" ? "yellow" : "purple"}
        >
          EXECUTE SUBMISSION
        </Button>
      </div>
    </form>
  );
};
