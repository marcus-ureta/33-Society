import type { HTMLProps } from "react";
import { LineCap } from "./LineCap";

import { cn } from "@/lib/utils";

export interface LineDividerProps extends HTMLProps<HTMLDivElement> {
  fillName?: string;
}

export function LineDivider({
  fillName = "selago-0",
  className,
  ...props
}: LineDividerProps) {
  const textFill = `text-${fillName}`;
  const bgFill = `bg-${fillName}`;

  return (
    <div
      className={cn(
        "w-full h-fit flex flex-row justify-center items-center",
        className,
      )}
      {...props}
    >
      <LineCap className={cn("translate-x-1", textFill)} />
      <div className={cn("h-0.5 flex-1", bgFill)}></div>
      <LineCap className={cn("-translate-x-1 rotate-180", textFill)} />
    </div>
  );
}
