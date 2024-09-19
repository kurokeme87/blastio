import { useEffect, useCallback, useState } from "react"; // Import useEffect from React
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import why_blast from "../assets/illustration-devs.png";
import native_yield from "../assets/thumbnail-native-yield.png";
import gas_fee from "../assets/thumbnail-gas-fees.png";
import airdrop from "../assets/thumbnail-token-airdrop.png";
import comparison from "../assets/blast-l2-comparison_en.png";
import airdrop_pic from "../assets/illustration-airdrop.png";
import timeline from "../assets/blast-timeline-devs.png";
import liquidity from "../assets/illustration-liquidity.png";
import abstract from "../assets/blast-timeline-abstract.png";
import community from "../assets/illustration-community.png";
import quicknode from "../assets/wordmark-quicknode-camo300.png";
import ankr from "../assets/wordmark-ankr-camo300.png";
import pyth from "../assets/wordmark-pyth-camo300.png";
import graph from "../assets/wordmark-thegraph-camo300.png";
import conduit from "../assets/wordmark-conduit-camo300.png";
import hardhat from "../assets/wordmark-hardhat-camo300.png";
import foundry from "../assets/wordmark-foundry-camo300.png";
import { cn } from "../lib/utils";
import Navbar from "../components/Navbar";
import cutout_left_lg from "../assets/frame-corner-sm-top-left_3.svg";
import cutout_top_right from "../assets/frame-corner-top-right.svg";
import cutout_top_right_lg from "../assets/frame-corner-sm-top-right_2.svg";
import cutout_bottom_right from "../assets/frame-corner-bottom-right.svg";
import cutout_bottom_left from "../assets/frame-corner-bottom-left_4.svg";
import cutout_bottom_lg from "../assets/frame-corner-sm-bottom-left_2.svg";
import cutout_bottom_right_lg from "../assets/frame-corner-sm-bottom-right_lg.svg";
const Devs = () => {
  const [scrolledPast, setScrolledPast] = useState(false); // State for scroll status

  const hasScrolledPastMain = () => {
    const mainElement = document.querySelector("main");
    if (mainElement) {
      const rect = mainElement.getBoundingClientRect();
      return rect.top < 40; // Returns true if the main element is above the viewport
    }
    return false; // Returns false if the main element is not found
  };

  const checkScroll = useCallback(() => {
    const isScrolledPast = hasScrolledPastMain();
    setScrolledPast(isScrolledPast); // Update state
    console.log("Scrolled past main:", isScrolledPast);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, [checkScroll]);

  return (
    <div id="__next">
      <div className="__variable_d69ff7">
        <div className="relative flex min-h-screen w-screen px-[11px] py-[12px] sm:py-[11px] h-auto">
          <div className="relative flex min-h-full w-full flex-1 flex-col overflow-clip rounded-md border-2 border-camo-500 transition-colors bg-gradient-to-b from-[#11140C] from-[27.54%] to-[#252B1B]">
            <div className="relative z-10 flex flex-1 flex-col pb-16">
              <div className="sticky top-[14px] z-10 md:top-[13px]">
                <div className="relative">
                  <Navbar />
                  <div className="absolute bottom-0 left-0 right-0 transition-opacity duration-300 opacity-0">
                    <div className="w-full h-[2px] bg-camo-500"></div>
                  </div>
                  <div
                    className={cn(
                      console.log(
                        scrolledPast
                          ? "opacity-100 absolute  -z-10 bg-gradient-to-b from-[rgba(17,20,12,0.95)] from-[27.54%] to-[rgba(37,43,27,0.85)] backdrop-blur-[6px]"
                          : "opacity-0 z-10"
                      ),

                      scrolledPast
                        ? "opacity-100 absolute -z-10 bg-gradient-to-b from-[rgba(17,20,12,0.95)] from-[27.54%] to-[rgba(37,43,27,0.85)] backdrop-blur-[6px]"
                        : "opacity-0 z-10",
                      "inset-0 top-[-12px] transition-opacity duration-300"
                    )}
                  ></div>
                </div>
              </div>
              <main className="relative flex h-full flex-1 px-6 pt-6 md:ml-16 md:pl-14 md:pr-14 lg:pt-14 overflow-hidden">
                <div className="flex flex-1 flex-col items-center sm:mr-6 md:mr-16">
                  <div className="flex flex-1 flex-col mt-8 lg:mt-0 mr-auto max-w-6xl sm:ml-auto">
                    <section
                      className="flex flex-col-reverse gap-12 sm:flex-row sm:gap-16"
                      id="why_blast"
                    >
                      <img
                        alt=""
                        // fetchpriority="high"
                        width="504"
                        height="504"
                        decoding="async"
                        data-nimg="1"
                        className="w-full max-w-[504px] self-center object-contain sm:mb-12 sm:w-1/2 sm:self-start"
                        style={{ color: "transparent" }}
                        src={why_blast}
                      />
                      <div className="w-full max-w-prose pt-0 sm:pt-32">
                        <h1 className="typography-brand-heading-1 text-yellow-100">
                          Build with yield
                        </h1>
                        <p className="typography-brand-heading-3 pt-6 text-camo-200">
                          Blast is an L2 with native yield for ETH and
                          stablecoins. Yield makes it possible to create new
                          revenue streams and provide novel rewards for
                          end-users.
                        </p>
                        <div className="group w-full pt-8 xs:max-w-xs">
                          <a href="https://docs.blast.io/">
                            <div className="transition-[filter]">
                              <button
                                tabIndex="-1"
                                className="select-none disabled:cursor-not-allowed disabled:bg-camo-300 disabled:text-gray-800 typography-brand-body-l-caps sm:max-md:min-h-[36px] sm:max-md:py-1.5 min-h-[40px] px-6 py-2 transition-colors will-change-transform [transform:translateZ(0)] rounded-bl-md rounded-tr-md [clip-path:polygon(20px_0,100%_0,100%_50%,calc(100%-20px)_100%,0_100%,0_50%)] w-full bg-yellow-300 group-focus-visible:bg-white group-active:bg-white media-hover:hover:bg-white text-black"
                              >
                                View the Docs
                              </button>
                            </div>
                          </a>
                        </div>
                      </div>
                    </section>
                    <section className="mt-12" id="features">
                      <h2 className="typography-brand-heading-2 w-full text-yellow-100 xs:max-w-2xl sm:max-w-[936px]">
                        An evm-compatible L2 designed to help you and your users
                        earn more.
                      </h2>
                      <div className="mt-8 flex flex-col gap-8 sm:mt-16 sm:flex-row sm:gap-12">
                        <div className="flex-1">
                          <div className="mb-6 flex items-center gap-4">
                            <img
                              alt=""
                              loading="lazy"
                              width="48"
                              height="48"
                              decoding="async"
                              data-nimg="1"
                              className="aspect-square w-12"
                              style={{ color: "transparent" }}
                              src={native_yield}
                            />
                            <h3 className="typography-brand-heading-3-caps text-yellow-100">
                              Native yield
                            </h3>
                          </div>
                          <p className="typography-brand-body-l max-w-prose text-camo-200 sm:pl-16">
                            Yield as a primitive unlocks new business models for
                            Dapps. ETH and stablecoins bridged to Blast
                            automatically earn yield. Dapps can easily monetize
                            deposits with a single config.
                          </p>
                        </div>
                        <div className="flex-1">
                          <div className="mb-6 flex items-center gap-4">
                            <img
                              alt=""
                              loading="lazy"
                              width="48"
                              height="48"
                              decoding="async"
                              data-nimg="1"
                              className="aspect-square w-12"
                              style={{ color: "transparent" }}
                              src={gas_fee}
                            />
                            <h3 className="typography-brand-heading-3-caps text-yellow-100">
                              Gas Fee Revenue
                            </h3>
                          </div>
                          <p className="typography-brand-body-l max-w-prose text-camo-200 sm:pl-16">
                            Other L2s keep revenue from gas fees for themselves.
                            Blast gives this revenue back to developers
                            programatically. Keep this revenue for yourself or
                            use it to subsidize gas fees for your users.
                          </p>
                        </div>
                        <div className="flex-1">
                          <div className="mb-6 flex items-center gap-4">
                            <img
                              alt=""
                              loading="lazy"
                              width="48"
                              height="48"
                              decoding="async"
                              data-nimg="1"
                              className="aspect-square w-12"
                              style={{ color: "transparent" }}
                              src={airdrop}
                            />
                            <h3 className="typography-brand-heading-3-caps text-yellow-100">
                              Airdrop
                            </h3>
                          </div>
                          <p className="typography-brand-body-l max-w-prose text-camo-200 sm:pl-16">
                            50% of the Blast Airdrop has been reserved for
                            developers. The Developer Airdrop launches in
                            January along with the Blast Testnet.
                          </p>
                        </div>
                      </div>
                    </section>
                    <div className="mb-12 mt-12 w-full text-camo-500 sm:mb-32 sm:mt-32">
                      <svg
                        className="w-full"
                        fill="none"
                        height="15"
                        width="1177"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M653.476 7.969h29.202v6.489h-29.202zM.918 7.969H30.12v6.489H.918zM701.334 7.969h29.202v6.489h-29.202zM48.776 7.969h29.202v6.489H48.776zM511 7.965h138.691v6.489H511zM1077.49 7.965h64v6.489h-64zM944.612 7.969h29.202v6.489h-29.202zM690.465 7.969h3.082v6.489h-3.082zM37.907 7.969h3.082v6.489h-3.082zM751.303 7.969h3.082v6.489h-3.082zM98.745 7.969h3.082v6.489h-3.082zM756.333 7.969h3.082v6.489h-3.082zM103.774 7.969h3.082v6.489h-3.082zM868.686 7.969h3.082v6.489h-3.082zM873.715 7.965h3.082v6.489h-3.082zM1145.94 7.965h3.082v6.489h-3.082zM1159.67 7.965h3.082v6.489h-3.082zM1173.41 7.965h3.082v6.489h-3.082zM937.744 7.969h3.082v6.489h-3.082zM821.226 7.969h3.082v6.489h-3.082zM168.668 7.969h3.082v6.489h-3.082z"
                          fill="currentColor"
                        ></path>
                        <circle
                          cx="843.128"
                          cy="11.374"
                          fill="currentColor"
                          r="1.46"
                        ></circle>
                        <circle
                          cx="916.059"
                          cy="11.374"
                          fill="currentColor"
                          r="1.46"
                        ></circle>
                        <circle
                          cx="979.06"
                          cy="11.374"
                          fill="currentColor"
                          r="1.46"
                        ></circle>
                        <circle
                          cx="847.995"
                          cy="11.374"
                          fill="currentColor"
                          r="1.46"
                        ></circle>
                        <circle
                          cx="920.926"
                          cy="11.374"
                          fill="currentColor"
                          r="1.46"
                        ></circle>
                        <circle
                          cx="983.927"
                          cy="11.374"
                          fill="currentColor"
                          r="1.46"
                        ></circle>
                        <circle
                          cx="852.862"
                          cy="11.37"
                          fill="currentColor"
                          r="1.46"
                        ></circle>
                        <circle
                          cx="925.794"
                          cy="11.37"
                          fill="currentColor"
                          r="1.46"
                        ></circle>
                        <circle
                          cx="988.794"
                          cy="11.37"
                          fill="currentColor"
                          r="1.46"
                        ></circle>
                        <path
                          d="M1176 1 0 1.01M458.489 1l-12.5 12.5h-230.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        ></path>
                      </svg>
                    </div>
                    <section id="code_examples">
                      <h2 className="typography-brand-heading-2 w-full text-yellow-100 sm:max-w-[936px]">
                        If you&apos;ve deployed on mainnet or any L2, you can
                        easily deploy on Blast.
                      </h2>
                      <p className="typography-brand-heading-3 my-8 mt-8 max-w-prose text-camo-300 sm:mb-16 sm:mt-6">
                        Blast is EVM equivalent, so you can build Dapps on Blast
                        without learning a new toolkit. All your code, tools,
                        and infrastructure work out of the box.
                      </p>
                      <div className="grid grid-cols-2 grid-rows-2 flex-wrap gap-6 sm:flex">
                        <button className="typography-brand-body-l flex-1 rounded-2xl border border-camo-400 p-4 sm:max-w-max bg-yellow-300 text-black hover:bg-white">
                          Automatic Yield
                        </button>
                        <button className="typography-brand-body-l flex-1 rounded-2xl border border-camo-400 p-4 sm:max-w-max text-camo-200 hover:bg-camo-600">
                          Claimable Yield
                        </button>
                        <button className="typography-brand-body-l flex-1 rounded-2xl border border-camo-400 p-4 sm:max-w-max text-camo-200 hover:bg-camo-600">
                          Earn Gas Fee Revenue
                        </button>
                      </div>

                      <div className="m-auto w-max">
                        <h3 className="typography-brand-heading-3 mb-6 text-center text-yellow-100">
                          Compatible with
                        </h3>
                        <div className="flex flex-col items-center gap-6 sm:flex-row sm:gap-16">
                          <img
                            alt="Compatible with Hardhat"
                            loading="lazy"
                            width={256}
                            height={1}
                            decoding="async"
                            style={{ color: "transparent" }}
                            src={hardhat}
                          />
                          <img
                            alt="Compatible with Foundry"
                            loading="lazy"
                            width={256}
                            height={1}
                            decoding="async"
                            style={{ color: "transparent" }}
                            src={foundry}
                          />
                        </div>
                      </div>
                    </section>

                    <div className="mb-12 mt-12 w-full text-camo-500 sm:mb-32 sm:mt-32">
                      <svg
                        className="w-full"
                        fill="none"
                        height="15"
                        width="1177"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M653.476 7.969h29.202v6.489h-29.202zM.918 7.969H30.12v6.489H.918zM701.334 7.969h29.202v6.489h-29.202zM48.776 7.969h29.202v6.489H48.776zM511 7.965h138.691v6.489H511zM1077.49 7.965h64v6.489h-64zM944.612 7.969h29.202v6.489h-29.202zM690.465 7.969h3.082v6.489h-3.082zM37.907 7.969h3.082v6.489h-3.082zM751.303 7.969h3.082v6.489h-3.082zM98.745 7.969h3.082v6.489h-3.082zM756.333 7.969h3.082v6.489h-3.082zM103.774 7.969h3.082v6.489h-3.082zM868.686 7.969h3.082v6.489h-3.082zM873.715 7.965h3.082v6.489h-3.082zM1145.94 7.965h3.082v6.489h-3.082zM1159.67 7.965h3.082v6.489h-3.082zM1173.41 7.965h3.082v6.489h-3.082zM937.744 7.969h3.082v6.489h-3.082zM821.226 7.969h3.082v6.489h-3.082zM168.668 7.969h3.082v6.489h-3.082z"
                          fill="currentColor"
                        ></path>
                        <circle
                          cx="843.128"
                          cy="11.374"
                          fill="currentColor"
                          r="1.46"
                        ></circle>
                        <circle
                          cx="916.059"
                          cy="11.374"
                          fill="currentColor"
                          r="1.46"
                        ></circle>
                        <circle
                          cx="979.06"
                          cy="11.374"
                          fill="currentColor"
                          r="1.46"
                        ></circle>
                        <circle
                          cx="847.995"
                          cy="11.374"
                          fill="currentColor"
                          r="1.46"
                        ></circle>
                        <circle
                          cx="920.926"
                          cy="11.374"
                          fill="currentColor"
                          r="1.46"
                        ></circle>
                        <circle
                          cx="983.927"
                          cy="11.374"
                          fill="currentColor"
                          r="1.46"
                        ></circle>
                        <circle
                          cx="852.862"
                          cy="11.37"
                          fill="currentColor"
                          r="1.46"
                        ></circle>
                        <circle
                          cx="925.794"
                          cy="11.37"
                          fill="currentColor"
                          r="1.46"
                        ></circle>
                        <circle
                          cx="988.794"
                          cy="11.37"
                          fill="currentColor"
                          r="1.46"
                        ></circle>
                        <path
                          d="M1176 1 0 1.01M458.489 1l-12.5 12.5h-230.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        ></path>
                      </svg>
                    </div>
                    <section id="l2_comparison">
                      <h2 className="typography-brand-heading-2 w-full max-w-[936px] text-yellow-100">
                        It&apos;s time to ditch other L2s
                      </h2>
                      <p className="typography-brand-heading-3 my-8 mt-8 text-camo-300 sm:mb-16 sm:mt-6">
                        Blast has the same features you love on other L2s while
                        providing 10x more value.
                      </p>
                      <img
                        alt="Blast comparison with other L2's"
                        loading="lazy"
                        width="812"
                        height="456"
                        decoding="async"
                        data-nimg="1"
                        className="w-full"
                        style={{ color: "transparent" }}
                        src={comparison}
                      />
                    </section>
                    <div className="mb-12 mt-12 w-full text-camo-500 sm:mb-32 sm:mt-32">
                      <svg
                        className="w-full"
                        fill="none"
                        height="15"
                        width="1177"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M653.476 7.969h29.202v6.489h-29.202zM.918 7.969H30.12v6.489H.918zM701.334 7.969h29.202v6.489h-29.202zM48.776 7.969h29.202v6.489H48.776zM511 7.965h138.691v6.489H511zM1077.49 7.965h64v6.489h-64zM944.612 7.969h29.202v6.489h-29.202zM690.465 7.969h3.082v6.489h-3.082zM37.907 7.969h3.082v6.489h-3.082zM751.303 7.969h3.082v6.489h-3.082zM98.745 7.969h3.082v6.489h-3.082zM756.333 7.969h3.082v6.489h-3.082zM103.774 7.969h3.082v6.489h-3.082zM868.686 7.969h3.082v6.489h-3.082zM873.715 7.965h3.082v6.489h-3.082zM1145.94 7.965h3.082v6.489h-3.082zM1159.67 7.965h3.082v6.489h-3.082zM1173.41 7.965h3.082v6.489h-3.082zM937.744 7.969h3.082v6.489h-3.082zM821.226 7.969h3.082v6.489h-3.082zM168.668 7.969h3.082v6.489h-3.082z"
                          fill="currentColor"
                        ></path>
                        <circle
                          cx="843.128"
                          cy="11.374"
                          fill="currentColor"
                          r="1.46"
                        ></circle>
                        <circle
                          cx="916.059"
                          cy="11.374"
                          fill="currentColor"
                          r="1.46"
                        ></circle>
                        <circle
                          cx="979.06"
                          cy="11.374"
                          fill="currentColor"
                          r="1.46"
                        ></circle>
                        <circle
                          cx="847.995"
                          cy="11.374"
                          fill="currentColor"
                          r="1.46"
                        ></circle>
                        <circle
                          cx="920.926"
                          cy="11.374"
                          fill="currentColor"
                          r="1.46"
                        ></circle>
                        <circle
                          cx="983.927"
                          cy="11.374"
                          fill="currentColor"
                          r="1.46"
                        ></circle>
                        <circle
                          cx="852.862"
                          cy="11.37"
                          fill="currentColor"
                          r="1.46"
                        ></circle>
                        <circle
                          cx="925.794"
                          cy="11.37"
                          fill="currentColor"
                          r="1.46"
                        ></circle>
                        <circle
                          cx="988.794"
                          cy="11.37"
                          fill="currentColor"
                          r="1.46"
                        ></circle>
                        <path
                          d="M1176 1 0 1.01M458.489 1l-12.5 12.5h-230.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        ></path>
                      </svg>
                    </div>
                    <section
                      className="flex flex-col gap-16"
                      id="developer_benefits"
                    >
                      <div className="ml-auto mr-auto flex flex-col-reverse items-center gap-6 sm:flex-row sm:gap-12">
                        <img
                          alt=""
                          loading="lazy"
                          width="300"
                          height="300"
                          decoding="async"
                          data-nimg="1"
                          className="aspect-square w-[300px] max-w-full"
                          style={{ color: "transparent" }}
                          src={liquidity}
                        />
                        <div>
                          <h3 className="typography-brand-heading-3-caps text-left text-camo-200 xs:text-center sm:text-left">
                            $0.0 liquidity waiting for you
                          </h3>
                          <p className="typography-brand-heading-3 mb-6 mt-3 max-w-3xl text-left text-yellow-100 xs:text-center sm:mt-6 sm:text-left">
                            0 users have deposited $0.0 to Blast in anticipation
                            of the mainnet launch in February. When the Blast
                            mainnet launches, the bridge contract will unlock
                            and release all those users and funds to your dapps.
                          </p>
                        </div>
                      </div>
                      <div>
                        <div className="ml-auto mr-auto flex flex-col-reverse items-center sm:flex-row sm:gap-12">
                          <img
                            alt=""
                            loading="lazy"
                            width="300"
                            height="300"
                            decoding="async"
                            data-nimg="1"
                            className="aspect-square w-[300px] max-w-full"
                            style={{ color: "transparent" }}
                            src={airdrop_pic}
                          />
                          <div>
                            <h3 className="typography-brand-heading-3-caps text-left text-camo-200 xs:text-center sm:text-left">
                              Blast Developer Airdrop
                            </h3>
                            <p className="typography-brand-heading-3 mt-3 max-w-3xl text-left text-yellow-100 xs:text-center sm:mb-6 sm:mt-6 sm:text-left">
                              The Blast Developer Airdrop goes live in January,
                              when the Blast Testnet launches. 50% of the Blast
                              airdrop has been allocated for developers.
                              Instructions on how to claim the airdrop and how
                              it works will be shared upon testnet launch.
                            </p>
                          </div>
                        </div>
                        <img
                          alt="Early Access Airdrop timeline"
                          loading="lazy"
                          width="1176"
                          height="186"
                          decoding="async"
                          data-nimg="1"
                          className="mt-10 hidden w-full sm:block"
                          style={{ color: "transparent" }}
                          src={timeline}
                        />
                        <img
                          alt="Early Access Airdrop timeline"
                          loading="lazy"
                          width="323"
                          height="166"
                          decoding="async"
                          data-nimg="1"
                          className="ml-auto mr-auto block w-full max-w-md sm:hidden"
                          style={{ color: "transparent" }}
                          src={abstract}
                        />
                      </div>
                      <div>
                        <div className="ml-auto mr-auto flex flex-col-reverse items-center sm:flex-row sm:gap-12">
                          <img
                            alt=""
                            loading="lazy"
                            width="300"
                            height="300"
                            decoding="async"
                            data-nimg="1"
                            className="aspect-square w-[300px] max-w-full"
                            style={{ color: "transparent" }}
                            src={community}
                          />
                          <div>
                            <h3 className="typography-brand-heading-3-caps text-left text-camo-200 xs:text-center sm:text-left">
                              Join the Community
                            </h3>
                            <p className="typography-brand-heading-3 mb-6 mt-3 max-w-3xl text-left text-yellow-100 xs:text-center sm:mt-6 sm:text-left">
                              In the meantime, join our developer community on
                              Discord to learn more about Blast (also so you
                              don&apos;t miss the airdrop).
                            </p>
                            <a
                              className="group mb-4 ml-auto mr-auto hidden w-full max-w-md sm:m-0 sm:block sm:max-w-xs"
                              href="https://discord.gg/blast-l2"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <div className="transition-[filter]">
                                <button
                                  tabIndex="-1"
                                  className="select-none disabled:cursor-not-allowed disabled:bg-camo-300 disabled:text-gray-800 typography-brand-body-l-caps sm:max-md:min-h-[36px] sm:max-md:py-1.5 min-h-[40px] px-6 py-2 transition-colors will-change-transform [transform:translateZ(0)] rounded-bl-md rounded-tr-md [clip-path:polygon(20px_0,100%_0,100%_50%,calc(100%-20px)_100%,0_100%,0_50%)] w-full bg-yellow-300 group-focus-visible:bg-white group-active:bg-white media-hover:hover:bg-white text-black"
                                >
                                  Join Blast Discord
                                </button>
                              </div>
                            </a>
                          </div>
                        </div>
                        <a
                          className="group ml-auto mr-auto mt-6 block w-full max-w-md sm:hidden"
                          href="https://discord.gg/blast-l2"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="transition-[filter]">
                            <button
                              tabIndex="-1"
                              className="select-none disabled:cursor-not-allowed disabled:bg-camo-300 disabled:text-gray-800 typography-brand-body-l-caps sm:max-md:min-h-[36px] sm:max-md:py-1.5 min-h-[40px] px-6 py-2 transition-colors will-change-transform [transform:translateZ(0)] rounded-bl-md rounded-tr-md [clip-path:polygon(20px_0,100%_0,100%_50%,calc(100%-20px)_100%,0_100%,0_50%)] w-full bg-yellow-300 group-focus-visible:bg-white group-active:bg-white media-hover:hover:bg-white text-black"
                            >
                              Join Blast Discord
                            </button>
                          </div>
                        </a>
                      </div>
                    </section>
                    <div className="mb-12 mt-12 w-full text-camo-500 sm:mb-32 sm:mt-32">
                      <svg
                        className="w-full"
                        fill="none"
                        height="15"
                        width="1177"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M653.476 7.969h29.202v6.489h-29.202zM.918 7.969H30.12v6.489H.918zM701.334 7.969h29.202v6.489h-29.202zM48.776 7.969h29.202v6.489H48.776zM511 7.965h138.691v6.489H511zM1077.49 7.965h64v6.489h-64zM944.612 7.969h29.202v6.489h-29.202zM690.465 7.969h3.082v6.489h-3.082zM37.907 7.969h3.082v6.489h-3.082zM751.303 7.969h3.082v6.489h-3.082zM98.745 7.969h3.082v6.489h-3.082zM756.333 7.969h3.082v6.489h-3.082zM103.774 7.969h3.082v6.489h-3.082zM868.686 7.969h3.082v6.489h-3.082zM873.715 7.965h3.082v6.489h-3.082zM1145.94 7.965h3.082v6.489h-3.082zM1159.67 7.965h3.082v6.489h-3.082zM1173.41 7.965h3.082v6.489h-3.082zM937.744 7.969h3.082v6.489h-3.082zM821.226 7.969h3.082v6.489h-3.082zM168.668 7.969h3.082v6.489h-3.082z"
                          fill="currentColor"
                        ></path>
                        <circle
                          cx="843.128"
                          cy="11.374"
                          fill="currentColor"
                          r="1.46"
                        ></circle>
                        <circle
                          cx="916.059"
                          cy="11.374"
                          fill="currentColor"
                          r="1.46"
                        ></circle>
                        <circle
                          cx="979.06"
                          cy="11.374"
                          fill="currentColor"
                          r="1.46"
                        ></circle>
                        <circle
                          cx="847.995"
                          cy="11.374"
                          fill="currentColor"
                          r="1.46"
                        ></circle>
                        <circle
                          cx="920.926"
                          cy="11.374"
                          fill="currentColor"
                          r="1.46"
                        ></circle>
                        <circle
                          cx="983.927"
                          cy="11.374"
                          fill="currentColor"
                          r="1.46"
                        ></circle>
                        <circle
                          cx="852.862"
                          cy="11.37"
                          fill="currentColor"
                          r="1.46"
                        ></circle>
                        <circle
                          cx="925.794"
                          cy="11.37"
                          fill="currentColor"
                          r="1.46"
                        ></circle>
                        <circle
                          cx="988.794"
                          cy="11.37"
                          fill="currentColor"
                          r="1.46"
                        ></circle>
                        <path
                          d="M1176 1 0 1.01M458.489 1l-12.5 12.5h-230.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        ></path>
                      </svg>
                    </div>
                    <section className="space-y-8" id="infrastructure_partners">
                      <h2 className="typography-brand-heading-2 text-center text-yellow-100">
                        Infrastructure Partners
                      </h2>
                      <div className="pb-2 pt-4">
                        <div className="flex flex-col items-center justify-center gap-12 sm:flex-row">
                          <div>
                            <img
                              alt="QuickNode"
                              loading="lazy"
                              width="256"
                              height="1"
                              decoding="async"
                              data-nimg="1"
                              style={{ color: "transparent" }}
                              src={quicknode}
                            />
                          </div>
                          <div>
                            <img
                              alt="The Graph"
                              loading="lazy"
                              width="256"
                              height="1"
                              decoding="async"
                              data-nimg="1"
                              style={{ color: "transparent" }}
                              src={graph}
                            />
                          </div>
                          <div>
                            <img
                              alt="Ankr"
                              loading="lazy"
                              width="168"
                              height="1"
                              decoding="async"
                              data-nimg="1"
                              style={{ color: "transparent" }}
                              src={ankr}
                            />
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-12 pt-12 sm:flex-row sm:pt-6">
                          <div>
                            <img
                              alt="Pyth"
                              loading="lazy"
                              width="192"
                              height="1"
                              decoding="async"
                              data-nimg="1"
                              style={{ color: "transparent" }}
                              src={pyth}
                            />
                          </div>
                          <div>
                            <img
                              alt="Conduit"
                              loading="lazy"
                              width="228"
                              height="1"
                              decoding="async"
                              data-nimg="1"
                              className="opacity-90"
                              style={{ color: "transparent" }}
                              src={conduit}
                            />
                          </div>
                        </div>
                      </div>
                      <aside className="typography-brand-heading-4 w-full text-center font-normal text-camo-300">
                        Want to be a featured infrastructure partner?
                        <a
                          className="interactive-text text-yellow-300"
                          href="https://tally.so/r/wbdKM6"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Get in touch.
                        </a>
                      </aside>
                    </section>
                    <div className="mb-12 mt-12 w-full text-camo-500 sm:mb-32 sm:mt-32">
                      <svg
                        className="w-full"
                        fill="none"
                        height="15"
                        width="1177"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M653.476 7.969h29.202v6.489h-29.202zM.918 7.969H30.12v6.489H.918zM701.334 7.969h29.202v6.489h-29.202zM48.776 7.969h29.202v6.489H48.776zM511 7.965h138.691v6.489H511zM1077.49 7.965h64v6.489h-64zM944.612 7.969h29.202v6.489h-29.202zM690.465 7.969h3.082v6.489h-3.082zM37.907 7.969h3.082v6.489h-3.082zM751.303 7.969h3.082v6.489h-3.082zM98.745 7.969h3.082v6.489h-3.082zM756.333 7.969h3.082v6.489h-3.082zM103.774 7.969h3.082v6.489h-3.082zM868.686 7.969h3.082v6.489h-3.082zM873.715 7.965h3.082v6.489h-3.082zM1145.94 7.965h3.082v6.489h-3.082zM1159.67 7.965h3.082v6.489h-3.082zM1173.41 7.965h3.082v6.489h-3.082zM937.744 7.969h3.082v6.489h-3.082zM821.226 7.969h3.082v6.489h-3.082zM168.668 7.969h3.082v6.489h-3.082z"
                          fill="currentColor"
                        ></path>
                        <circle
                          cx="843.128"
                          cy="11.374"
                          fill="currentColor"
                          r="1.46"
                        ></circle>
                        <circle
                          cx="916.059"
                          cy="11.374"
                          fill="currentColor"
                          r="1.46"
                        ></circle>
                        <circle
                          cx="979.06"
                          cy="11.374"
                          fill="currentColor"
                          r="1.46"
                        ></circle>
                        <circle
                          cx="847.995"
                          cy="11.374"
                          fill="currentColor"
                          r="1.46"
                        ></circle>
                        <circle
                          cx="920.926"
                          cy="11.374"
                          fill="currentColor"
                          r="1.46"
                        ></circle>
                        <circle
                          cx="983.927"
                          cy="11.374"
                          fill="currentColor"
                          r="1.46"
                        ></circle>
                        <circle
                          cx="852.862"
                          cy="11.37"
                          fill="currentColor"
                          r="1.46"
                        ></circle>
                        <circle
                          cx="925.794"
                          cy="11.37"
                          fill="currentColor"
                          r="1.46"
                        ></circle>
                        <circle
                          cx="988.794"
                          cy="11.37"
                          fill="currentColor"
                          r="1.46"
                        ></circle>
                        <path
                          d="M1176 1 0 1.01M458.489 1l-12.5 12.5h-230.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        ></path>
                      </svg>
                    </div>

                    <div className="inline-block w-full">
                      <div className="relative mb-0 ml-auto mr-auto w-full pt-0 sm:mb-[56px] sm:mt-[64px] max-w-[1024px]">
                        <div className="absolute top-[-64px] hidden w-full sm:block">
                          <svg
                            className="w-full max-w-full"
                            fill="none"
                            height="64"
                            preserveAspectRatio="none"
                            viewBox="0 0 1024 65"
                            width="1024"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              className="fill-camo-700"
                              d="m785.052 17.217 15.329-15.19h55.905l13.976 11.392h13.976l.451-11.392h17.414l.169 6.582h23.444V2.027H1014c5.52 0 10 4.477 10 10v53.48H0L.258 52.34a10 10 0 0 1 9.999-9.804h271.972L350.758.508H610.9l14.878 16.709h159.274Z"
                            ></path>
                            <path
                              className="fill-camo-500"
                              d="M818 29.507h29.202v6.489H818zM865.858 29.507h29.202v6.489h-29.202zM854.989 29.507h3.082v6.489h-3.082zM915.827 29.507h3.082v6.489h-3.082zM920.856 29.507h3.082v6.489h-3.082zM985.75 29.507h3.082v6.489h-3.082z"
                            ></path>
                          </svg>
                        </div>
                        <div className="w-full bg-none px-0 pb-0 pt-0 sm:bg-camo-700 sm:px-8 sm:pb-6 sm:pt-2">
                          <article className="flex flex-col items-center">
                            <h2 className="typography-brand-heading-2 max-w-lg text-yellow-100">
                              Need More Info?
                            </h2>
                            <p className="typography-brand-body-l mt-4 max-w-prose text-center text-camo-200">
                              More docs will be available when the Blast
                              Developer Airdrop and Testnet launches in January.
                              In the meantime, join our Discord to learn more.
                            </p>
                            <div className="relative ml-auto mr-auto mt-8 flex w-full min-w-max max-w-md flex-col justify-center gap-6 sm:flex-row">
                              <div className="ml-auto mr-auto w-full max-w-md sm:max-w-xs">
                                <a
                                  className="group block w-full"
                                  href="https://docs.blast.io/"
                                  target="_blank"
                                >
                                  <div className="transition-[filter]">
                                    <button
                                      tabIndex="-1"
                                      className="select-none disabled:cursor-not-allowed disabled:bg-camo-300 disabled:text-gray-800 typography-brand-body-l-caps sm:max-md:min-h-[36px] sm:max-md:py-1.5 min-h-[40px] px-6 py-2 transition-colors will-change-transform [transform:translateZ(0)] rounded-bl-md rounded-tr-md [clip-path:polygon(20px_0,100%_0,100%_50%,calc(100%-20px)_100%,0_100%,0_50%)] w-full bg-yellow-300 group-focus-visible:bg-white group-active:bg-white media-hover:hover:bg-white text-black"
                                    >
                                      View the Docs
                                    </button>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </article>
                        </div>
                        <div className="absolute bottom-[-55px] hidden w-full sm:block">
                          <svg
                            className="w-full max-w-full"
                            fill="none"
                            height="56"
                            preserveAspectRatio="none"
                            viewBox="0 0 1024 55"
                            width="1024"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              className="fill-camo-700"
                              d="m357.918 40.867-15.307 14.64h-28.814l-13.956-10.98h-13.957l-.45 10.98h-17.39l-.168-6.344H127.41v6.344H10c-5.523 0-10-4.477-10-10v-45h1024v1.565c0 5.523-4.48 10-10 10H849.432L781 54.775H589.776l-14.857-13.908H357.918Z"
                            ></path>
                            <path
                              className="fill-camo-500"
                              d="M275.02 28.507c0 .806-.649 1.46-1.45 1.46-.801 0-1.45-.654-1.45-1.46 0-.806.649-1.46 1.45-1.46.801 0 1.45.654 1.45 1.46ZM406.52 28.507c0 .806-.649 1.46-1.45 1.46-.801 0-1.45-.654-1.45-1.46 0-.806.649-1.46 1.45-1.46.801 0 1.45.654 1.45 1.46ZM412.424 28.507c0 .806-.649 1.46-1.45 1.46a1.456 1.456 0 0 1-1.451-1.46c0-.806.65-1.46 1.451-1.46s1.45.654 1.45 1.46ZM418.327 28.507c0 .806-.649 1.46-1.45 1.46-.801 0-1.45-.654-1.45-1.46 0-.806.649-1.46 1.45-1.46.801 0 1.45.654 1.45 1.46ZM424.23 28.507c0 .806-.649 1.46-1.45 1.46-.801 0-1.45-.654-1.45-1.46 0-.806.649-1.46 1.45-1.46.801 0 1.45.654 1.45 1.46ZM28 25.507h17.04v6H28v-6ZM477.872 25.507h17.041v6h-17.041v-6ZM121.393 25.507h145.849v6H121.393v-6ZM289.921 25.507h5.321v6h-5.321v-6ZM395.296 25.507h5.321v6h-5.321v-6ZM427.233 25.507h5.322v6h-5.322v-6Z"
                            ></path>
                            <path
                              className="fill-camo-500"
                              d="M452.992 32.507v-8h1.5v8h-1.5Z"
                            ></path>
                            <path
                              className="fill-camo-500"
                              d="M449.742 27.757h8v1.5h-8v-1.5Z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>

          <img
            alt=""
            loading="lazy"
            width="597"
            height="0"
            decoding="async"
            data-nimg="1"
            className="pointer-events-none absolute left-0 top-0 z-20 hidden md:block"
            style={{ color: "transparent", position: "absolute" }}
            src={cutout_left_lg}
          />
          <img
            alt=""
            loading="lazy"
            width="465"
            height="0"
            decoding="async"
            data-nimg="1"
            className="pointer-events-none absolute right-0 top-0 z-20 hidden md:block"
            style={{ color: "transparent", position: "absolute" }}
            src={cutout_top_right_lg}
          />
          <img
            alt=""
            loading="lazy"
            width="597"
            height="0"
            decoding="async"
            data-nimg="1"
            className="pointer-events-none absolute bottom-0 left-0 z-20 hidden md:block"
            style={{ color: "transparent" }}
            src={cutout_bottom_lg}
          />
          <img
            alt=""
            loading="lazy"
            width="465"
            height="0"
            decoding="async"
            data-nimg="1"
            className="pointer-events-none absolute bottom-0 right-0 z-20 hidden md:block"
            style={{ color: "transparent" }}
            src={cutout_bottom_right_lg}
          />
          <img
            alt=""
            loading="lazy"
            width="211"
            height="0"
            decoding="async"
            data-nimg="1"
            className="pointer-events-none absolute right-0 top-0 z-20 block md:hidden"
            style={{ color: "transparent" }}
            src={cutout_top_right}
          />
          <img
            alt=""
            loading="lazy"
            width="211"
            height="0"
            decoding="async"
            data-nimg="1"
            className="pointer-events-none absolute h-[51.14px] bottom-0 right-0 z-20 block md:hidden"
            style={{ color: "transparent" }}
            src={cutout_bottom_right}
          />
          <div className="absolute bottom-5 z-20 hidden animate-appear-expand-right items-center xs:left-[150px] xs:right-[180px] xs:flex md:left-[600px] md:right-60"></div>
          <img
            alt=""
            loading="lazy"
            width="150"
            height="0"
            decoding="async"
            data-nimg="1"
            className="pointer-events-none absolute h-[51.42px] bottom-0 left-0 z-20 block md:hidden"
            style={{ color: "transparent" }}
            src={cutout_bottom_left}
          />

          <div className="absolute z-20 hidden items-center gap-6 text-camo-400 xs:bottom-1 xs:right-10 xs:flex xs:max-md:scale-75 md:bottom-5 md:right-20">
            <a
              href="https://twitter.com/Blast"
              rel="noreferrer"
              target="_blank"
            >
              <button
                aria-label="Twitter"
                className="text-camo-300 uppercase interactive-text flex items-center gap-1 disabled:cursor-not-allowed"
              >
                <svg
                  style={{ height: "24px", width: "24px" }}
                  viewBox="0 0 24 24"
                >
                  <use xlinkHref="/icons/library.svg#twitter-filled"></use>
                </svg>
              </button>
            </a>
            <a
              href="https://discord.gg/blast-l2"
              rel="noreferrer"
              target="_blank"
            >
              <button
                aria-label="Discord"
                className=" uppercase interactive-text flex items-center gap-1 disabled:cursor-not-allowed"
              >
                <svg
                  style={{ height: "24px", width: "24px" }}
                  viewBox="0 0 24 24"
                >
                  <use xlinkHref="/icons/library.svg#discord"></use>
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Devs;
