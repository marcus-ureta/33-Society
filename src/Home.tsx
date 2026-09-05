import { LineDivider } from "./components/LineDivider";
import { HomePillars } from "./components/HomePillars";
import { Logo } from "./components/logos";
import "./index.css";

import Navbar from "./Navbar";

import { Button } from "@base-ui/react/button";

import HomeActivities from "./components/HomeActivities";

import FastMarquee from "react-fast-marquee";

import { Facebook, Instagram, Whatsapp } from "flowbite-react-icons/solid";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

  const invertedArcSvg = `data:image/svg+xml;utf8,<svg viewBox="0 0 1000 200" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"><path d="M 0,0 A 725 725 0 0 0 1000,0 L 1000,200 L 0,200 Z" fill="white"/></svg>`;
  const arcSvg = `data:image/svg+xml;utf8,<svg viewBox="0 0 1000 200" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"><path d="M 0,0 A 725 725 0 0 0 1000,0 Z" fill="white"/></svg>`;

  const faqItems = [
    {
      value: "goal",
      trigger: "What is the goal of Society 33?",
      content:
        "Society 33 exists to bring together the next generation of ambitious individuals across Asia and create a circle where meaningful relationships can lead to personal growth, business opportunities, and lasting connections.",
    },
    {
      value: "invitation",
      trigger: "Can I invite someone to join the circle?",
      content:
        "Yes. Members may refer individuals they genuinely believe would be a strong addition to the Society. Every referral remains subject to review and approval to ensure the community maintains its standards.",
    },
    {
      value: "yacht",
      trigger: "What should I know about the yacht event?",
      content:
        "Our first Society 33 experience is a private yacht gathering featuring a closed-door mastermind session, curated conversations, networking, and an opportunity to connect with selected members of the Society. Full event details are provided to confirmed participants.",
    },
    {
      value: "slot",
      trigger: "Is my slot transferable?",
      content:
        "To maintain the quality and exclusivity of the Society, event slots are generally non-transferable. Any exception must be reviewed and approved by the Society 33 team",
    },
  ];

  return (
    <>
      {/* <Navbar /> */}
      <div className="w-full h-fit flex justify-center bg-tristesse-0 min-w-80 *:wrap-break-word ">
        <div className="max-w-384 flex flex-col w-full min-w-80 h-fit">
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
              <h1 className="font-cochin text-selago-50 mb-4 text-center">
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

          <div className="bg-tristesse-0 h-fit w-full -mt-[15%] flex pt-24 flex-col items-center p-8 prose prose-lg max-w-none pb-24">
            <div className="h-fit w-fit flex items-center flex-col">
              <h1 className="font-cochin text-selago-50 text-center">
                OUR PILLARS
              </h1>

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

            <LineDivider fillName="davys-grey-0" className="mb-18 w-full" />

            <div className="prose prose-lg h-fit w-full flex items-center flex-col @container">
              <h1 className="text-center font-cochin text-selago-50 mb-0">
                GUEST SPEAKERS
              </h1>
              <p className="text-center text-selago-0 font-aileron mb-16  ">
                Toffee chocolate cake macaroon jujubes cotton candy sweet sesame
                snaps gummi bears dragée.
              </p>
              <Marquee
                autoFill={true}
                className="w-screen!"
                pauseOnHover
                speed={75}
              >
                <div className="h-144 w-72 border border-davys-grey-0 mr-8 rounded-2xl flex flex-col">
                  <img
                    className="aspect-4/5 w-full h-auto mb-0 mt-0 rounded-t-2xl"
                    src="https://s.yimg.com/lo/mysterio/api/f31f4df8d5b30a5537d3ade836d06d67c72de4375cb7bc16fafe22a85e2833a5/lightyear_networkapi/resizefill_w480_h348%3Bquality_80%3Bformat_webp/https%3A%2F%2Fmedia.zenfs.com%2Fen%2Fknow_your_meme_909%2Fc3f13e3aa7742e8034894c82237bea06"
                  ></img>
                  <div className="p-4 flex flex-col gap-4">
                    <h2 className="font-cochin text-selago-50 mb-0 mt-0 leading-none text-4xl">
                      Floyd Escuadra
                    </h2>
                    <p className="font-aileron text-selago-0 text-base">
                      Chocolate fruitcake bonbon powder danish pastry.
                    </p>
                  </div>
                </div>
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
              WHAT TO EXPECT INSIDE THE YACHT
            </h1>
            <HomeActivities description="Tart chocolate danish candy shortbread chupa chups chocolate pastry."></HomeActivities>
            <HomeActivities description="Cupcake tiramisu pastry croissant chocolate bar danish gummies."></HomeActivities>
            <HomeActivities description="Candy canes cotton candy powder jelly-o gummi bears toffee."></HomeActivities>
            <HomeActivities description="Toffee cake carrot cake wafer jujubes marshmallow icing pudding."></HomeActivities>
            <HomeActivities description="Ice cream chupa chups cake sesame snaps toffee danish marshmallow."></HomeActivities>
            <iframe
              className="w-[90vw] h-auto aspect-video mt-8"
              src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?si=ugKjYpsBKxPG9So0"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

          <div className="bg-tristesse-0 h-270 w-full flex flex-col items-center p-8 prose prose-lg max-w-none -mt-8 pt-24">
            <h1 className="font-cochin text-selago-50 mb-0 text-center">
              EVENT DETAILS
            </h1>
          </div>

          <div
            className="h-fit bg-schiava-blue w-full flex flex-col prose prose-lg max-w-none mt-[-15%]"
            style={{
              maskImage: `url('/svg/BOTTOM_CROWN_ROTATED.svg'), linear-gradient(black, black)`,
              WebkitMaskImage: `url('/svg/BOTTOM_CROWN_ROTATED.svg'), linear-gradient(black, black)`,

              maskRepeat: "no-repeat, no-repeat",
              WebkitMaskRepeat: "no-repeat, no-repeat",

              maskSize: `100% auto, 100% 100%`,
              WebkitMaskSize: `100% auto, 100% 100%`,

              maskPosition: `0 0, 0 calc(100cqw * ${CROWN_TOP_HEIGHT_MULTIPLIER})`,
              WebkitMaskPosition: `0 0, 0 calc(100cqw * ${CROWN_TOP_HEIGHT_MULTIPLIER})`,
            }}
          >
            <div className="h-fit w-full flex flex-col items-center p-8 pt-24">
              <h1 className="font-cochin text-selago-100 mb-8 text-center">
                BEFORE YOU ENTER
              </h1>
              <p className="font-aileron text-selago-50 mt-0 mb-16 text-center">
                Everything you need to know about the Society
              </p>
              <div className="w-screen h-fit bg-tristesse-0 rounded-2xl p-4">
                <Accordion multiple>
                  {faqItems.map((item) => (
                    <AccordionItem
                      key={item.value}
                      value={item.value}
                      className={"*:mt-0 *:mb-0"}
                    >
                      <AccordionTrigger
                        className={
                          "font-aileron text-selago-50 text-xl font-bold"
                        }
                      >
                        {item.trigger}
                      </AccordionTrigger>
                      <AccordionContent
                        className={"font-aileron text-selago-0 text-lg"}
                      >
                        {item.content}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>

            <div className="rounded-t-4xl h-fit w-full bg-tristesse-0 flex flex-col">
              <div className="w-full h-fit p-8 gap-8 flex flex-col mb-8">
                <div className="flex flex-col w-fit h-fit items-start">
                  <Logo
                    variant="horizontal"
                    className="text-selago-50 h-8 w-auto"
                  ></Logo>
                  <p className="text-selago-0 mt-2 mb-0 font-cochin">
                    A Circle Beyond Ordinary.
                  </p>
                </div>
                <div className="w-full h-fit flex flex-col gap-2">
                  <p className="font-aileron text-selago-0 mb-0 mt-0">Link</p>
                  <p className="font-aileron text-selago-0 mb-0 mt-0">Link</p>
                  <p className="font-aileron text-selago-0 mb-0 mt-0">Link</p>
                  <p className="font-aileron text-selago-0 mb-0 mt-0">Link</p>
                </div>
                <div className="w-full h-fit flex flex-row gap-3 -translate-x-2">
                  <Facebook className="text-selago-0 size-8 -translate-y-px translate-x-1" />
                  <Instagram className="text-selago-0 size-8" />
                  <Whatsapp className="text-selago-0 size-8" />
                  <svg
                    className="fill-selago-0 size-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M23.1117 4.49449C23.4296 2.94472 21.9074 1.65683 20.4317 2.227L2.3425 9.21601C0.694517 9.85273 0.621087 12.1572 2.22518 12.8975L6.1645 14.7157L8.03849 21.2746C8.13583 21.6153 8.40618 21.8791 8.74917 21.968C9.09216 22.0568 9.45658 21.9576 9.70712 21.707L12.5938 18.8203L16.6375 21.8531C17.8113 22.7334 19.5019 22.0922 19.7967 20.6549L23.1117 4.49449ZM3.0633 11.0816L21.1525 4.0926L17.8375 20.2531L13.1 16.6999C12.7019 16.4013 12.1448 16.4409 11.7929 16.7928L10.5565 18.0292L10.928 15.9861L18.2071 8.70703C18.5614 8.35278 18.5988 7.79106 18.2947 7.39293C17.9906 6.99479 17.4389 6.88312 17.0039 7.13168L6.95124 12.876L3.0633 11.0816ZM8.17695 14.4791L8.78333 16.6015L9.01614 15.321C9.05253 15.1209 9.14908 14.9366 9.29291 14.7928L11.5128 12.573L8.17695 14.4791Z"
                      ></path>
                    </g>
                  </svg>
                </div>
              </div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                style={{
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 2,
                }}
                className="fill-selago-0"
                viewBox="0 0 838 182"
              >
                <path
                  d="m546.49 163.64-44.14-22.04-48.39 23.89c-118.27 58.27-258.52 50.11-369.23-21.64l-3.53-2.28v181.5h837.55v-181.5c-111.37 73.01-253.08 81.4-372.28 22.07h.02ZM144.08 270.89l-14.07 20.91-14.14-20.91-14.6-20.11 14.6-20.18 14.14-20.84 14.07 20.84 14.6 20.18-14.6 20.11Zm375.07-7.5-19.18 28.41-19.18-28.41-19.85-27.41 19.85-27.41 19.18-28.41 19.18 28.41L539 235.98l-19.85 27.41Zm364.91 7.5-14.07 20.91-14.14-20.91-14.6-20.11 14.6-20.18 14.14-20.84 14.07 20.84 14.6 20.18-14.6 20.11Z"
                  style={{
                    fillRule: "nonzero",
                  }}
                  transform="translate(-81.2 -141.57)"
                />
              </svg>

              <div className="w-full h-fit bg-schiava-blue -mt-1 px-8 py-4 flex flex-col gap-4 items-center">
                <p className="font-aileron mb-0 mt-0 text-base text-selago-0 text-center">
                  <span className="font-bold mr-4">© 2026 SOCIETY 33</span> All
                  rights reserved.
                </p>
                <div className="flex gap-4 flex-row">
                  <p className="font-aileron mb-0 mt-0 text-base text-selago-0">
                    Terms of Service
                  </p>
                  <p className="font-aileron mb-0 mt-0 text-base text-selago-0">
                    Privacy Policy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
