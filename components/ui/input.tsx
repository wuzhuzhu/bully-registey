import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> { mode: string }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ mode = 'default', className, type, ...props }, ref,) => {
    return (
      <input
        type={type}
        className={cn(
          {
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50": mode === 'default',
            "flex h-10 w-full border-0 bg-m3sysdarksurface-container-high px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium border-transparent focus:border-transparent focus:ring-0 disabled:cursor-not-allowed disabled:opacity-50 text-neutral-300 placeholder:text-neutral-400 text-base font-normal font-['Roboto'] leading-normal tracking-wide ": mode === 'client'
          },
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
