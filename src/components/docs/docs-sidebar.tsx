"use client"

import React, { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { docsConfig } from "@/config/docs"
import { cn } from "@/lib/utils"

export function DocsSidebar() {
  const pathname = usePathname()
  const [search, setSearch] = useState("")

  const filteredNav = docsConfig.sidebarNav.map(section => ({
    ...section,
    items: section.items?.filter(item => 
      item.title.toLowerCase().includes(search.toLowerCase())
    )
  })).filter(section => section.items && section.items.length > 0)

  return (
    <aside className="fixed top-16 z-30 -ml-2 hidden h-[calc(100vh-4rem)] w-full shrink-0 md:sticky md:block md:w-64 neo-border border-y-0 border-l-0 bg-background overflow-y-auto no-scrollbar transition-colors duration-300">
      <div className="h-full py-6 pr-6 pl-8 lg:py-8 text-left flex flex-col">
        <div className="mb-6">
           <input 
             type="text" 
             placeholder="SEARCH..." 
             value={search}
             onChange={(e) => setSearch(e.target.value)}
             className="w-full bg-neo-bg-secondary neo-border px-3 py-2 text-xs font-black uppercase tracking-widest focus:bg-neo-cyan transition-colors outline-none placeholder:text-muted-foreground/50 shadow-[2px_2px_0px_var(--neo-border)]"
           />
        </div>
        <div className="w-full flex-1">
          {filteredNav.map((item, index) => (
            <div key={index} className="pb-8">
              <h4 className="mb-3 rounded-none px-2 py-1 text-sm font-black uppercase tracking-widest bg-neo-yellow neo-border inline-block shadow-[2px_2px_0px_var(--neo-border)] text-black">
                {item.title}
              </h4>
              {item.items?.length && (
                <div className="grid grid-flow-row auto-rows-max text-sm gap-1 mt-2">
                  {item.items.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      href={subItem.href || "#"}
                      className={cn(
                        "group flex w-full items-center rounded-none border-2 border-transparent px-2 py-1.5 font-bold uppercase tracking-tight hover:border-border hover:bg-neo-cyan hover:shadow-[2px_2px_0px_var(--neo-border)] transition-all dark:hover:text-black",
                        pathname === subItem.href
                          ? "bg-neo-cyan neo-border shadow-[2px_2px_0px_var(--neo-border)] text-black"
                          : "text-muted-foreground"
                      )}
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </aside>
  )
}
