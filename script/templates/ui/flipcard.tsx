// @ts-nocheck
'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

interface FlipCardProps {
  children: React.ReactNode;
  code?: string;
  backContent?: React.ReactNode;
  className?: string;
  naked?: boolean;
}

export const FlipCard = ({ children, code, backContent, className, naked = false }: FlipCardProps) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={cn('relative w-full h-full [perspective:1000px]', className)}>
      <div
        className={cn(
          'relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d]',
          flipped ? '[transform:rotateY(180deg)]' : ''
        )}
      >
        {/* Front */}
        <div className={cn(
          "relative w-full h-full [backface-visibility:hidden] flex flex-col justify-center items-center z-20 text-black",
          !naked && "bg-white dark:bg-zinc-100 neo-border p-4 shadow-neo",
          flipped ? "pointer-events-none" : "pointer-events-auto"
        )}>
          {children}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setFlipped(true);
            }}
            className={cn(
              "absolute bg-muted hover:bg-muted/80 text-xs px-2 py-1 neo-border font-bold z-30",
              naked ? "-top-10 right-0" : "top-2 right-2"
            )}
          >
            {code ? '</>' : '⟳'}
          </button>
        </div>

        {/* Back */}
        <div className={cn(
          "absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col",
          !naked && "p-4 shadow-neo neo-border",
          code && !naked ? "bg-zinc-950 text-white border-blue-400" : !naked ? "bg-white dark:bg-zinc-100 text-black" : "",
          flipped ? "pointer-events-auto z-20" : "pointer-events-none"
        )}>
          <div className="flex-1 overflow-auto flex flex-col justify-center items-center h-full w-full">
            {code ? (
              <pre className="whitespace-pre-wrap text-sm font-mono text-blue-300 text-left w-full">
                <code>{code}</code>
              </pre>
            ) : backContent}
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setFlipped(false);
            }}
            className={cn(
              "absolute bg-white text-black text-xs px-2 py-1 neo-border font-bold hover:bg-gray-200 z-30",
              naked ? "-top-10 right-0" : "top-2 right-2"
            )}
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
};
