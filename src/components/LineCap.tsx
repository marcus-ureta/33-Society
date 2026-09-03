import { cn } from "@/lib/utils";

import type { SVGProps } from "react";

export interface LineCapProps extends SVGProps<SVGSVGElement> {
  /**
   * Shorthand size. Sets the height (and width for 1:1 square logos)
   * while preserving the natural aspect ratio.
   * Can be a number (pixels) or string (e.g. "2rem", "100%").
   */
  size?: number | string;
}

export function LineCap({
  size,
  width,
  height,
  fill = "currentColor",
  className,
  ...props
}: LineCapProps) {
  const resolvedWidth = width ?? (size ? "auto" : undefined);
  const resolvedHeight = height ?? (size ? size : undefined);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        strokeLinejoin: "round",
        strokeMiterlimit: 2,
      }}
      fill={fill}
      width={resolvedWidth}
      height={resolvedHeight}
      className={cn("h-8 w-auto shrink-0", className)}
      viewBox="0 0 654 572"
      {...props}
    >
      <path
        d="M0-.047c-41.985-38.174-82.17-.174-82.17-.174C-39.935 38.174 1.031.891 0-.047"
        transform="matrix(4.16667 0 0 4.16667 342.375 285.817)"
      />
      <path
        d="M0 25.162C-53.54 2.034 23.713-16.2 23.713-16.2c-40.133-19.478-90.077 5.664-67.495 41.362 22.566 35.678 43.782 0 43.782 0"
        transform="matrix(4.16667 0 0 4.16667 487.775 400.816)"
      />
      <path
        d="M0 57.578S-77.253 39.332-23.713 16.22c0 0-21.216-35.683-43.782 0C-90.077 51.902-40.133 77.041 0 57.578"
        transform="matrix(4.16667 0 0 4.16667 586.579 -1.504)"
      />
      <path
        d="M9.576 0H-.189l-10.009 4.45L0 8.896h9.576"
        transform="matrix(4.16667 0 0 4.16667 613.64 267.32)"
      />
    </svg>
  );
}
