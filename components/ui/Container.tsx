import { ReactNode } from "react";
import { cn } from "./utils";

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("max-w-4xl mx-auto px-6 w-full", className)}>
      {children}
    </div>
  );
}