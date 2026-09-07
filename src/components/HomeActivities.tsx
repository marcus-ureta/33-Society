import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export interface HomeActivitiesProps {
  description: ReactNode;
  children: ReactNode;
  className?: string;
}

export function HomeActivities({
  description,
  children,
  className,
}: HomeActivitiesProps) {
  return (
    <div className={cn("h-fit w-fit flex items-center flex-col", className)}>
      <div className="rounded-full p-8 size-36 flex justify-center items-center bg-tristesse-0 mb-4">
        {children}
      </div>

      <p className="font-aileron text-selago-0 mt-0 text-center mb-8">
        {description}
      </p>
    </div>
  );
}

export default HomeActivities;
