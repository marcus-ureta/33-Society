import type { LogoProps, LogoVariant } from "./types";
import { PrimaryLogo } from "./PrimaryLogo";
import { Logomark } from "./Logomark";
import { Wordmark } from "./Wordmark";
import { HorizontalLockup } from "./HorizontalLockup";
import { StackedLockup } from "./StackedLockup";

export interface UnifiedLogoProps extends LogoProps {
  /**
   * The logo variant to render.
   * - "primary": Symbol mark with shield/crest
   * - "mark": Icon mark with circular typography
   * - "wordmark": Full horizontal "SOCIETY" typography with 33 mark
   * - "horizontal": Complete horizontal lockup (default)
   * - "stacked": Stacked icon and typography lockup
   */
  variant?: LogoVariant;
}

export function Logo({ variant = "horizontal", ...props }: UnifiedLogoProps) {
  switch (variant) {
    case "primary":
      return <PrimaryLogo {...props} />;
    case "mark":
      return <Logomark {...props} />;
    case "wordmark":
      return <Wordmark {...props} />;
    case "stacked":
      return <StackedLockup {...props} />;
    case "horizontal":
    default:
      return <HorizontalLockup {...props} />;
  }
}
