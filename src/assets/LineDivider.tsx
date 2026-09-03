import type { HTMLProps } from "react";
import { LineCap } from "./LineCap";

import { cn } from "@/lib/utils";

export interface LineDividerProps extends HTMLProps<HTMLDivElement> {
  fillName?: string;
}

export function LineDivider({
  fillName = "selago-0",
  className = "w-full",
  ...props
}: LineDividerProps) {
  const textFill = `text-${fillName}`;
  const bgFill = `bg-${fillName}`;

  return (
    <div
      className={cn(
        className,
        "h-fit flex flex-row justify-center items-center",
      )}
      {...props}
    >
      <LineCap className={cn(textFill, "translate-x-1")} />
      <div className={cn(bgFill, "h-0.5 w-full")}></div>
      <LineCap className={cn(textFill, " -translate-x-1 rotate-180")} />
    </div>
  );
}
