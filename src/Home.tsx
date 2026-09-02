import "./index.css";

import Navbar from "./Navbar";

import { Button } from "@base-ui/react/button";

function App() {
  return (
    <>
      <Navbar />
      <div className="w-full h-fit">
        <div className="bg-tristesse-0 w-full h-dvh grid grid-rows-[65%_35%] grid-cols-1 justify-center">
          <div className="prose prose-lg max-w-none flex flex-col items-center self-end">
            <h1 className="font-cochin font-bold text-selago-100 text-8xl w-full max-w-[20ch] text-center mb-2">
              Sweet topping shortbread jelly beans
            </h1>
            <p className="font-aileron text-selago-0 mb-0 text-center">
              Cheesecake sugar plum marshmallow muffin chocolate cheesecake
              sweet danish sesame snaps.
            </p>
            {/* Hero CTA */}
            <div className="mt-12 border-2 border-schiava-blue p-2 rounded-full flex flex-row">
              <Button
                className={
                  "text-selago-0 bg-schiava-blue font-aileron rounded-full text-base px-8 py-2"
                }
              >
                Purchase a Ticket
              </Button>
              <p className="leading-0 px-6 text-selago-0">Book a Meeting</p>
            </div>
          </div>
          <div className="flex justify-center p-16"></div>
        </div>
      </div>
    </>
  );
}

export default App;
