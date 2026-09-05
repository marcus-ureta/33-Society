import type { ReactNode } from "react";

export interface HomeActivitiesProps {
  children?: ReactNode;
  description: ReactNode;
}

export function HomeActivities({ description, children }: HomeActivitiesProps) {
  return (
    <div className="h-fit w-fit flex items-center flex-col">
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
