import { Button } from "@base-ui/react/button";
import "./index.css";

import { Logo } from "@/components/logos";

function Navbar() {
  return (
    <>
      <div className="fixed w-9/10 max-w-270 left-1/2 -translate-x-1/2 h-16 top-12 bg-selago-0 rounded-full grid grid-cols-[auto_1fr_auto] grid-rows-1 items-center px-6">
        <Logo variant="horizontal" className="h-12 w-auto text-schiava-blue" />
        <div className="w-full flex flex-row gap-10 px-8 *:font-aileron *:text-schiava-blue *:text-base">
          <p>One Time Event Pass</p>
          <p>About</p>
          <p>Members</p>
          <p>Event Details</p>
        </div>
        <Button
          className={
            "text-selago-0 bg-schiava-blue px-5 py-2 font-aileron text-sm rounded-full"
          }
        >
          Book a Meeting
        </Button>
      </div>
    </>
  );
}

export default Navbar;
