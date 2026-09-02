import type { SVGProps } from "react";

export interface LogoProps extends SVGProps<SVGSVGElement> {
  /**
   * Shorthand size. Sets the height (and width for 1:1 square logos)
   * while preserving the natural aspect ratio.
   * Can be a number (pixels) or string (e.g. "2rem", "100%").
   */
  size?: number | string;
}

export type LogoVariant =
  | "primary"
  | "mark"
  | "wordmark"
  | "horizontal"
  | "stacked";
