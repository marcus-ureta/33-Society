import { LineDivider } from "./components/LineDivider";
import { HomePillars } from "./components/HomePillars";
import { Logo } from "./components/logos";
import "./index.css";

import Navbar from "./Navbar";

import { Button } from "@base-ui/react/button";

import HomeActivities from "./components/HomeActivities";

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

  const ARC_WIDTH = 1000;
  const ARC_HEIGHT = 32;
  const ARC_HEIGHT_MULTIPLIER = ARC_HEIGHT / ARC_WIDTH;

  const INVERTED_ARC_WIDTH = 1000;
  const INVERTED_ARC_HEIGHT = 32;
  const INVERTED_ARC_HEIGHT_MULTIPLIER =
    INVERTED_ARC_HEIGHT / INVERTED_ARC_WIDTH;

  const invertedArcSvg = `data:image/svg+xml;utf8,<svg viewBox="0 0 1000 200" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"><path d="M 0,0 A 725 725 0 0 0 1000,0 L 1000,200 L 0,200 Z" fill="white"/></svg>`;
  const arcSvg = `data:image/svg+xml;utf8,<svg viewBox="0 0 1000 200" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"><path d="M 0,0 A 725 725 0 0 0 1000,0 Z" fill="white"/></svg>`;

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

          <div
            className="bg-schiava-blue flex flex-col items-center p-8 prose prose-lg w-full h-fit max-w-none pt-24 @container pb-16"
            style={{
              maskImage: `url('${invertedArcSvg}'), linear-gradient(black, black), url('${arcSvg}')`,
              WebkitMaskImage: `url('${invertedArcSvg}'), linear-gradient(black, black), url('${arcSvg}')`,

              maskRepeat: "no-repeat, no-repeat, no-repeat",
              WebkitMaskRepeat: "no-repeat, no-repeat, no-repeat",

              maskSize: `100% 32px, 100% calc(100% - 64px), 100% 32px`,
              WebkitMaskSize: `100% 32px, 100% calc(100% - 64px), 100% 32px`,

              maskPosition: `0 0, 0 32px, 0 bottom`,
              WebkitMaskPosition: `0 0, 0 32px, 0 bottom`,
            }}
          >
            <h1 className="text-center font-cochin text-selago-50 mb-16">
              What to expect inside the <br />
              Yacht
            </h1>
            <HomeActivities description="Tart chocolate danish candy shortbread chupa chups chocolate pastry."></HomeActivities>
            <HomeActivities description="Cupcake tiramisu pastry croissant chocolate bar danish gummies."></HomeActivities>
            <HomeActivities description="Candy canes cotton candy powder jelly-o gummi bears toffee."></HomeActivities>
            <HomeActivities description="Toffee cake carrot cake wafer jujubes marshmallow icing pudding."></HomeActivities>
            <HomeActivities description="Ice cream chupa chups cake sesame snaps toffee danish marshmallow."></HomeActivities>
            <iframe
              className="w-screen h-auto aspect-video mt-8"
              src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?si=ugKjYpsBKxPG9So0"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

          <div className="bg-tristesse-0 h-270 w-full flex flex-col items-center p-8 prose prose-lg max-w-none -mt-8 pt-24">
            <h1 className="font-cochin text-selago-50 mb-0 text-center">
              Event Details
            </h1>
          </div>

          <div
            className="bg-schiava-blue h-270 w-full flex flex-col items-center p-8 prose prose-lg max-w-none mt-[-15%] pt-24"
            style={{
              maskImage: `url('/svg/BOTTOM_CROWN_ROTATED.svg'), linear-gradient(black, black)`,
              WebkitMaskImage: `url('/svg/BOTTOM_CROWN_ROTATED.svg'), linear-gradient(black, black)`,

              maskRepeat: "no-repeat, no-repeat",
              WebkitMaskRepeat: "no-repeat, no-repeat",

              maskSize: `100% auto, 100% calc(100% - (100cqw * ${CROWN_BOTTOM_HEIGHT_MULTIPLIER}) + 4px)`,
              WebkitMaskSize: `100% auto, 100% calc(100% - (100cqw * ${CROWN_BOTTOM_HEIGHT_MULTIPLIER}) + 4px)`,

              maskPosition: `0 0, 0 calc(100cqw * ${CROWN_TOP_HEIGHT_MULTIPLIER})`,
              WebkitMaskPosition: `0 0, 0 calc(100cqw * ${CROWN_TOP_HEIGHT_MULTIPLIER})`,
            }}
          >
            <h1 className="font-cochin text-selago-100 mb-8 text-center">
              BEFORE YOU ENTER
            </h1>
            <h3 className="font-cochin text-selago-50 mt-0 mb-0 text-center">
              Everything you need to know about the Society
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
