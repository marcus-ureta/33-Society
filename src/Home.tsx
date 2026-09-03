import "./index.css";

import Navbar from "./Navbar";

import { Button } from "@base-ui/react/button";

function App() {
  const SVG_WIDTH = 837.5;
  const SVG_HEIGHT = 181.5;

  // This calculates the aspect ratio (e.g., 200 / 1200 = 0.1666)
  const HEIGHT_MULTIPLIER = SVG_HEIGHT / SVG_WIDTH;

  return (
    <>
      {/* <Navbar /> */}
      <div className="w-full h-fit flex justify-center bg-tristesse-0 min-w-80 *:wrap-break-word ">
        <div className="max-w-480 flex flex-col w-full min-w-80">
          <div className=" w-full h-fit flex flex-col items-center pt-32 p-8">
            <div className="prose prose-lg max-w-none w-full flex flex-col items-center">
              <h1 className="font-cochin font-bold text-selago-100 text-7xl w-full max-w-[20ch] text-center mb-2">
              Sweet topping shortbread jelly beans
            </h1>
            <p className="font-aileron text-selago-0 mb-0 text-center">
              Cheesecake sugar plum marshmallow muffin chocolate cheesecake
              sweet danish sesame snaps.
            </p>
            {/* Hero CTA */}
              <div className="mt-12 border-2 border-schiava-blue p-4 rounded-[42px] flex flex-col items-center gap-4">
              <Button
                className={
                    "text-selago-0 bg-schiava-blue font-aileron rounded-full text-base px-10 py-4"
                }
              >
                Purchase a Ticket
              </Button>
              <p className="leading-0 px-6 text-selago-0">Book a Meeting</p>
            </div>
          </div>
            <div className="flex justify-center h-72 w-full"></div>
          </div>

          <div className="relative w-full @container h-[750px] -mt-36">
            <div
              className="absolute inset-0 bg-[url(/sample.png)] bg-no-repeat bg-size-[100%_100%]"
              className="absolute inset-0 bg-schiava-blue bg-no-repeat bg-size-[100%_100%]"
              style={{
                maskImage: `url('/svg/CROWN_CROPPED.svg'), linear-gradient(black, black)`,
                WebkitMaskImage: `url('/svg/CROWN_CROPPED.svg'), linear-gradient(black, black)`,

                maskRepeat: "no-repeat, no-repeat",
                WebkitMaskRepeat: "no-repeat, no-repeat",

                // Layer 1: Scale width to 100% and let height adapt naturally.
                // Layer 2: Fill 100% of the width and height of the container.
                maskSize: "100% auto, 100% 100%",
                WebkitMaskSize: "100% auto, 100% 100%",

                // Layer 1: Pin to top left.
                // Layer 2: Push it down exactly to where the scaled SVG height ends using Container Query Width (cqw).
                maskPosition: `0 0, 0 calc((100cqw * ${HEIGHT_MULTIPLIER}) - 2px)`,
                WebkitMaskPosition: `0 0, 0 calc((100cqw * ${HEIGHT_MULTIPLIER}) - 2px)`,
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
