import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export interface HomeValuesDesktopProps extends React.HTMLAttributes<HTMLDivElement> {
  number: ReactNode;
  name: ReactNode;
  description: ReactNode;
}

export function HomePillarsDesktop({
  number,
  name,
  description,
  className,
  ...props
}: HomeValuesDesktopProps) {
  return (
    <div
      className={cn("h-fit max-w-125 flex items-center flex-col", className)}
      {...props}
    >
      <div className="rounded-full p-8 size-48 flex justify-center items-center bg-schiava-blue mb-8">
        <h2 className="font-cochin text-selago-50 text-7xl text-center translate-x-0.5 translate-y-0.5 mb-0 mt-0">
          {number}
        </h2>
      </div>

      <h2 className="text-center w-full text-selago-50 text-5xl font-cochin mb-0 mt-0">
        {name}
      </h2>

      <p className="font-aileron text-selago-0 mt-4 text-center mb-18">
        {description}
      </p>
    </div>
  );
}

export default HomePillarsDesktop;
