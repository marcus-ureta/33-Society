import { LineDivider } from "./components/LineDivider";
import { HomePillars } from "./components/HomePillars";
import { Logo } from "./components/logos";
import "./index.css";

import Navbar from "./Navbar";

import { Button } from "@base-ui/react/button";

import FastMarquee from "react-fast-marquee";

// Vite/Rolldown CJS interop workaround for react-fast-marquee
const Marquee =
  (FastMarquee as unknown as { default?: typeof FastMarquee }).default ||
  FastMarquee;

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

          <div className="bg-tristesse-0 h-fit w-full -mt-[15%] flex pt-48 flex-col items-center p-8 prose prose-lg max-w-none pb-24">
            <div className="h-fit w-fit flex items-center flex-col">
              <HomePillars
                number="01"
                name="Value of Group"
                description="Cake candy canes sweet pastry caramels cake icing cheesecake sweet roll cake croissant."
              />
              <HomePillars
                number="02"
                name="Clarity"
                description="Marzipan danish chocolate cake candy brownie shortbread chupa chups tootsie roll ice cream."
              />
              <HomePillars
                number="03"
                name="Lifestyle"
                description="Sesame snaps apple pie ice cream lemon drops gummies sweet roll jelly oat cake candy."
              />
              <HomePillars
                number="04"
                name="Business Opportunity"
                description="Icing halvah ice cream chocolate gingerbread chocolate bar soufflé liquorice jelly beans."
              />
            </div>

            <LineDivider fillName="schiava-blue" className="mb-18 w-full" />

            <div className="prose prose-lg h-fit w-full flex items-center flex-col @container">
              <h1 className="text-center font-cochin text-selago-50 mb-0">
                Guest Speakers
              </h1>
              <p className="text-center text-selago-0 font-aileron">
                Toffee chocolate cake macaroon jujubes cotton candy sweet sesame
                snaps gummi bears dragée.
              </p>
              <Marquee autoFill={true} className="w-screen!">
                <div className="h-96 w-48 bg-white mr-8"></div>
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
