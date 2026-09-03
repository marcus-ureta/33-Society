import { LineDivider } from "./components/LineDivider";
import { HomePillars } from "./components/HomePillars";
import { Logo } from "./components/logos";
import "./index.css";

import Navbar from "./Navbar";

import { Button } from "@base-ui/react/button";

function App() {
  const CROWN_TOP_WIDTH = 837.5;
  const CROWN_TOP_HEIGHT = 181.5;

  // This calculates the aspect ratio (e.g., 200 / 1200 = 0.1666)
  const CROWN_TOP_HEIGHT_MULTIPLIER = CROWN_TOP_HEIGHT / CROWN_TOP_WIDTH;

  const CROWN_BOTTOM_WIDTH = 1000;
  const CROWN_BOTTOM_HEIGHT = 281.2;

  const CROWN_BOTTOM_HEIGHT_MULTIPLIER =
    CROWN_BOTTOM_HEIGHT / CROWN_BOTTOM_WIDTH;

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

          {/* -mt-36  pushes crown page cut upwards*/}
          <div className="relative w-full @container h-fit p-8 flex flex-col items-center justify-center">
            <div
              className="absolute inset-0 bg-schiava-blue bg-no-repeat bg-size-[100%_100%]"
              style={{
                maskImage: `url('/svg/CROWN_CROPPED.svg'), linear-gradient(black, black), url('/svg/BOTTOM_CROWN.svg')`,
                WebkitMaskImage: `url('/svg/CROWN_CROPPED.svg'), linear-gradient(black, black), url('/svg/BOTTOM_CROWN.svg')`,

                maskRepeat: "no-repeat, no-repeat, no-repeat",
                WebkitMaskRepeat: "no-repeat, no-repeat, no-repeat",

                // Layer 1: Scale width to 100% and explicitly match the top crown aspect ratio height.
                // Layer 2: Fill 100% height minus top crown and bottom crown (with 4px overlap for seams).
                // Layer 3: Scale width to 100% and explicitly match the bottom crown aspect ratio height.
                maskSize: `100% auto, 100% calc(100% - (100cqw * ${CROWN_TOP_HEIGHT_MULTIPLIER}) - (100cqw * ${CROWN_BOTTOM_HEIGHT_MULTIPLIER}) + 4px), 100% auto`,
                WebkitMaskSize: `100% auto, 100% calc(100% - (100cqw * ${CROWN_TOP_HEIGHT_MULTIPLIER}) - (100cqw * ${CROWN_BOTTOM_HEIGHT_MULTIPLIER}) + 4px), 100% auto`,

                // Layer 1: Pin to top left.
                // Layer 2: Push down to where the top crown ends (minus 2px to prevent a seam).
                // Layer 3: Pin to bottom.
                maskPosition: `0 0, 0 calc((100cqw * ${CROWN_TOP_HEIGHT_MULTIPLIER}) - 2px), 0 bottom`,
                WebkitMaskPosition: `0 0, 0 calc((100cqw * ${CROWN_TOP_HEIGHT_MULTIPLIER}) - 2px), 0 bottom`,
              }}
            />

            <div
              className="w-full h-full z-1 relative flex flex-col items-center prose prose-lg"
              style={{
                paddingTop: `calc(((100cqw * ${CROWN_TOP_HEIGHT_MULTIPLIER}) - 2px) + 32px)`,
                paddingBottom: `calc(100cqw * ${CROWN_BOTTOM_HEIGHT_MULTIPLIER})`,
              }}
            >
              <h1 className="font-cochin text-selago-50 mb-0 text-3xl text-center">
                ABOUT
              </h1>
              <Logo variant="mark" className="text-selago-50 size-36"></Logo>
              <p className="text-center text-selago-0 font-aileron">
                Oat cake cheesecake caramels shortbread toffee wafer. Tiramisu
                sweet bonbon tart lemon drops. Muffin cake sugar plum chocolate
                bar cotton candy sweet jujubes danish. Croissant icing chupa
                chups jelly beans fruitcake.
              </p>
            </div>
          </div>

          <div className="bg-tristesse-0 h-fit w-full -mt-[15%] flex pt-48 flex-col items-center p-8 prose prose-lg ">
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
