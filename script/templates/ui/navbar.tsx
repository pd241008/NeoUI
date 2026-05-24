// @ts-nocheck
"use client";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
}

interface NavbarProps {
  title?: string;
  navItems?: NavItem[];
  isFixed?: boolean;
  variant?: "default" | "purple" | "cyan" | "green" | "yellow";
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  title = " MyApp",
  navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  isFixed = true,
  variant = "default",
  className,
}) => {
  const variantClasses = {
    default: "bg-background text-foreground",
    purple: "bg-neo-purple text-white shadow-[0_8px_0_0_black] dark:shadow-[0_8px_0_0_white]",
    cyan: "bg-neo-cyan text-black shadow-[0_8px_0_0_black] dark:shadow-[0_8px_0_0_white]",
    green: "bg-neo-green text-black shadow-[0_8px_0_0_black] dark:shadow-[0_8px_0_0_white]",
    yellow: "bg-neo-yellow text-black shadow-[0_8px_0_0_black] dark:shadow-[0_8px_0_0_white]",
  };

  return (
    <header className={cn(
      "w-full z-50 neo-border border-t-0 border-x-0 px-8 py-4 transition-all duration-300",
      variantClasses[variant],
      isFixed ? "fixed top-0 left-0" : "relative",
      className
    )}>
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <h1 className="font-black text-2xl uppercase tracking-tighter italic">{title}</h1>
        <nav className="flex items-center space-x-8 font-black uppercase tracking-widest text-xs">
          {navItems.map((item) => (
            <Link 
              key={item.href} 
              href={item.href} 
              className="hover:underline underline-offset-8 decoration-4"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};
