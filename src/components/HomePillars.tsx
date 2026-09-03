import type { ReactNode } from "react";

export interface HomeValuesProps {
  number: ReactNode;
  name: ReactNode;
  description: ReactNode;
}

export function HomePillars({ number, name, description }: HomeValuesProps) {
  return (
    <div className="h-fit w-fit flex items-center flex-col">
      <div className="rounded-full p-8 size-36 flex justify-center items-center bg-schiava-blue mb-8">
        <h2 className="font-cochin text-selago-50 text-6xl text-center translate-x-0.5 translate-y-0.5 mb-0 mt-0">
          {number}
        </h2>
      </div>

      <h1 className="text-center w-full text-selago-50 font-cochin mb-0">
        {name}
      </h1>

      <p className="font-aileron text-selago-0 mt-4 text-center mb-18">
        {description}
      </p>
    </div>
  );
}

export default HomePillars;
