import * as React from "react"
import { cn } from "../../../lib/uitls"


export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-full w-full border border-input bg-transparent px-3 py-2 text-lg file:border-0 file:bg-transparent file:text-md placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

const TextArea = React.forwardRef<any, any>(
  ({ className, type,rows,cols, ...props }, ref) => {
    return (
      <textarea
        type={type}
        className={cn(
          "flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        rows={rows}
        cols={cols}
        {...props}
      />
    )
  }
)
TextArea.displayName = "TextArea"

export { Input,TextArea }
