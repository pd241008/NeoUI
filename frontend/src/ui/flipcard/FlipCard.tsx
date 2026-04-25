'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

interface FlipCardProps {
  children: React.ReactNode;
  code: string;
  className?: string;
}

export const FlipCard = ({ children, code, className }: FlipCardProps) => {
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
          "absolute inset-0 [backface-visibility:hidden] bg-background neo-border p-4 shadow-neo flex flex-col justify-center items-center z-20",
          flipped ? "pointer-events-none" : "pointer-events-auto"
        )}>
          {children}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setFlipped(true);
            }}
            className="absolute top-2 right-2 bg-muted hover:bg-muted/80 text-xs px-2 py-1 neo-border font-bold z-30"
          >
            {'</>'}
          </button>
        </div>

        {/* Back */}
        <div className={cn(
          "absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-zinc-950 text-white neo-border border-blue-400 p-4 shadow-neo flex flex-col",
          flipped ? "pointer-events-auto z-20" : "pointer-events-none"
        )}>
          <div className="flex-1 overflow-auto">
            <pre className="whitespace-pre-wrap text-sm font-mono text-blue-300">
              <code>{code}</code>
            </pre>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setFlipped(false);
            }}
            className="absolute top-2 right-2 bg-white text-black text-xs px-2 py-1 neo-border font-bold hover:bg-gray-200 z-30"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
};
