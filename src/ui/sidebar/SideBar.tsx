"use client";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface SidebarItem {
  label: string;
  href: string;
  isDanger?: boolean;
}

interface SidebarProps {
  items?: SidebarItem[];
  title?: string;
  isFixed?: boolean;
  variant?: "default" | "purple" | "cyan" | "green" | "yellow";
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({
  title = "📁 Menu",
  items = [
    { label: "Dashboard", href: "/" },
    { label: "Form Page", href: "/form" },
    { label: "Settings", href: "/settings" },
    { label: "Logout", href: "/logout", isDanger: true },
  ],
  isFixed = true,
  variant = "default",
  className,
}) => {
  const variantClasses = {
    default: "bg-background text-foreground",
    purple: "bg-neo-purple text-white shadow-[8px_0_0_0_white]",
    cyan: "bg-neo-cyan text-black shadow-[8px_0_0_0_black]",
    green: "bg-neo-green text-black shadow-[8px_0_0_0_black]",
    yellow: "bg-neo-yellow text-black shadow-[8px_0_0_0_black]",
  };

  const dangerClass = variant === "purple" ? "text-neo-yellow" : "text-neo-purple";

  return (
    <aside className={cn(
      "w-64 neo-border border-y-0 border-l-0 p-6 transition-all duration-300",
      variantClasses[variant],
      isFixed ? "fixed top-0 left-0 h-[calc(100vh-64px)] mt-[64px]" : "relative h-full",
      className
    )}>
      <h2 className="text-xl font-black uppercase tracking-tighter italic mb-10 pb-4 border-b-4 border-current">
        {title}
      </h2>
      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={cn(
                "group flex w-full items-center px-2 py-1.5 font-black uppercase tracking-widest text-xs hover:bg-current/10 transition-colors",
                item.isDanger ? dangerClass : ""
              )}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};
