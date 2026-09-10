import "./index.css";

import { Button } from "@/components/ui/button";

import { Logo } from "@/components/logos";

import { Bars } from "flowbite-react-icons/outline";
import { Close } from "flowbite-react-icons/outline";

import {
  Sheet,
  SheetClose,
  SheetContent,
  //SheetDescription,
  SheetFooter,
  //SheetHeader,
  //SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function Navbar() {
  return (
    <>
      <div className="fixed w-9/10 max-w-270 left-1/2 -translate-x-1/2 h-16 top-12 bg-selago-0 rounded-full grid grid-cols-[auto_1fr_auto] grid-rows-1 items-center px-6 z-50">
        <Logo variant="horizontal" className="h-6 w-auto text-schiava-blue" />

        {/* LARGE TABLET AND UP ONLY LINKS */}
        <div className="hidden w-full lg:flex flex-row gap-10 px-8 *:font-aileron *:text-schiava-blue *:text-base">
          {/* NAVBAR LINKS 
              TODO: react router links (scrollable ids) and single source array
          */}
          <p>About</p>
          <p>Members</p>
          <p>Event Details</p>
        </div>

        <div className="hidden md:flex flex-row gap-4 md:w-full lg:w-fit justify-end">
          <Button
            variant="outline"
            className={
              "text-schiava-blue px-5 py-2 font-aileron text-sm rounded-full h-full border-schiava-blue transition-all duration-300 hover:border-schiava-blue-dark hover:bg-schiava-blue-dark hover:text-selago-0 active:scale-90"
            }
          >
            Book a Meeting
          </Button>

          <Button
            variant="default"
            className={
              "text-selago-0 bg-schiava-blue px-5 py-2 font-aileron text-sm rounded-full h-full -ml-2 transition-all duration-300 hover:bg-tristesse-0 hover:text-selago-0 active:scale-90"
            }
          >
            Purchase a Ticket
          </Button>
        </div>

        {/* SMALL TABLET AND BELOW NAVBAR MENU */}
        <Sheet>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon-lg"
                className={"lg:hidden justify-self-end"}
              >
                <Bars className="size-6 text-schiava-blue" />
              </Button>
            }
          >
            Open
          </SheetTrigger>

          <SheetContent
            side={"top"}
            className={"bg-schiava-blue/90 border-0! h-dvh! p-8"}
            showCloseButton={false}
          >
            <div className="w-full h-fit flex flex-row justify-center mb-8">
              <SheetClose
                render={
                  <Button
                    variant="outline"
                    className={"rounded-full p-6 border-davys-grey-50"}
                    size="icon-lg"
                  >
                    <Close className="size-6 text-selago-0" />
                  </Button>
                }
              ></SheetClose>
            </div>

            <div className="flex flex-col items-center w-full h-fit gap-8 prose prose-lg max-w-none">
              <p className="font-aileron text-selago-0 mb-0 mt-0 text-center">
                Link
              </p>
              <p className="font-aileron text-selago-0 mb-0 mt-0 text-center">
                Link
              </p>
              <p className="font-aileron text-selago-0 mb-0 mt-0 text-center">
                Link
              </p>
              <p className="font-aileron text-selago-0 mb-0 mt-0 text-center">
                Link
              </p>
            </div>

            <SheetFooter>
              <div className="w-full h-fit flex flex-row justify-center">
                <Logo
                  variant="primary"
                  className="fill-selago-0 size-12"
                ></Logo>
              </div>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}

export default Navbar;
