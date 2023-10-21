import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> { }

const InputClient = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <InputClient
        type={type}
        className={cn(
          "flex h-10 w-full border-0 bg-m3sysdarksurface-container-high px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium border-transparent focus:border-transparent focus:ring-0 disabled:cursor-not-allowed disabled:opacity-50 text-neutral-300 placeholder:text-neutral-400 text-base font-normal font-['Roboto'] leading-normal tracking-wide ",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
InputClient.displayName = "InputClient"

export { InputClient }
