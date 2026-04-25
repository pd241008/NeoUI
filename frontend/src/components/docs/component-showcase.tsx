"use client"

import * as React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

interface ComponentShowcaseProps {
  children: React.ReactNode
  code: string
  title?: string
}

export function ComponentShowcase({ children, code, title }: ComponentShowcaseProps) {
  return (
    <div className="group relative my-4 flex flex-col space-y-2">
      <Tabs defaultValue="preview" className="relative mr-auto w-full">
        <div className="flex items-center justify-between pb-3">
          <TabsList className="w-full justify-start rounded-none border-b-2 border-black bg-transparent p-0 dark:border-zinc-800">
            <TabsTrigger
              value="preview"
              className="relative h-9 rounded-none border-b-2 border-transparent bg-transparent px-4 pb-3 pt-2 font-black uppercase tracking-widest text-muted-foreground transition-none data-[state=active]:border-neo-purple data-[state=active]:text-foreground data-[state=active]:shadow-none dark:data-[state=active]:text-white"
            >
              Preview
            </TabsTrigger>
            <TabsTrigger
              value="code"
              className="relative h-9 rounded-none border-b-2 border-transparent bg-transparent px-4 pb-3 pt-2 font-black uppercase tracking-widest text-muted-foreground transition-none data-[state=active]:border-neo-purple data-[state=active]:text-foreground data-[state=active]:shadow-none dark:data-[state=active]:text-white"
            >
              Code
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent
          value="preview"
          className="relative rounded-md neo-border bg-white dark:bg-zinc-950 p-10 flex items-center justify-center min-h-[350px] shadow-[8px_8px_0px_black] dark:shadow-[8px_8px_0px_white]"
        >
          {children}
        </TabsContent>
        <TabsContent value="code">
           <div className="relative overflow-hidden rounded-md border-2 border-black bg-zinc-950 p-0 shadow-[8px_8px_0px_black]">
              <div className="flex items-center justify-between bg-zinc-900 px-4 py-2 border-b-2 border-black">
                <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">{title || "Component"}</span>
                <button className="text-xs font-bold text-zinc-400 hover:text-white uppercase">Copy</button>
              </div>
              <pre className="overflow-x-auto p-4 text-sm text-zinc-300 font-mono">
                <code>{code}</code>
              </pre>
           </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
