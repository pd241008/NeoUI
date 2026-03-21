import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { docsConfig } from "@/config/docs"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full neo-border border-t-0 border-x-0 bg-background transition-colors duration-300">
      <div className="container flex h-16 items-center px-4 md:px-8">
        <div className="mr-8 flex items-center space-x-2">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-black text-xl tracking-tighter bg-neo-purple px-2 py-0.5 neo-border shadow-[2px_2px_0px_var(--neo-border)] text-white">
              TASKIEE
            </span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center space-x-6 text-sm font-medium hidden md:flex">
            {docsConfig.mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-neo-purple font-bold uppercase tracking-wider text-foreground/70 hover:text-foreground"
              >
                {item.title}
              </Link>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
             <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
