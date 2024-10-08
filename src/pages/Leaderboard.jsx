import { useEffect, useCallback, useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";
import Navbar from "../components/Navbar";
import cutout_left_lg from "../assets/frame-corner-sm-top-left_3.svg";
import cutout_top_right from "../assets/frame-corner-top-right.svg";
import cutout_top_right_lg from "../assets/frame-corner-sm-top-right_2.svg";
import cutout_bottom_right from "../assets/frame-corner-bottom-right.svg";
import cutout_bottom_left from "../assets/frame-corner-bottom-left_4.svg";
import cutout_bottom_lg from "../assets/frame-corner-sm-bottom-left_2.svg";
import cutout_bottom_right_lg from "../assets/frame-corner-sm-bottom-right_lg.svg";
import discord from "../assets/icons8-discord-50.png";
import twitter from "../assets/icons8-twitter-50.png";
const Leaderboard = () => {
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
        <div className="relative flex min-h-screen w-screen px-[11px] py-[12px] sm:py-[11px] h-auto sm:h-screen">
          <div className="relative flex min-h-full w-full flex-1 flex-col overflow-clip rounded-md border-2 border-camo-500 transition-colors bg-gradient-to-b from-[#11140C] from-[27.54%] to-[#252B1B]">
            <div className="relative z-10 flex flex-1 flex-col pb-16 h-auto sm:h-full">
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
                <div className="flex flex-1 flex-col mt-0 w-full xs:mt-8 lg:mt-0">
                  <div className="h-full w-full animate-enter-fade sm:w-auto">
                    <div className="flex h-full animate-appear-slide-up flex-col-reverse gap-8 sm:flex-row">
                      <div className="flex flex-1 flex-col">
                        <div className="mr-0 flex min-h-0 flex-1 flex-col sm:flex-[1px]">
                          <div className="flex flex-col justify-between gap-y-2 xs:flex-row xs:items-center">
                            <div className="flex items-center gap-4">
                              <h1 className="typography-brand-heading-2 text-yellow-100">
                                Leaderboard
                              </h1>
                            </div>
                            <aside className="typography-brand-body-l text-camo-200">
                              Bridge, use Dapps, &amp; invite friends to rank
                              up.
                            </aside>
                          </div>
                          <div className="relative mt-8 max-h-[70vh] overflow-auto border-t border-camo-400 xs:max-h-max"></div>
                        </div>
                      </div>
                      <div className="bg-camo-400 h-full w-[1px] hidden sm:block"></div>
                      <div className="relative flex min-h-0 w-full flex-col sm:h-full sm:w-60 md:w-72">
                        <h2 className="typography-brand-heading-2 sm:typography-brand-heading-3 text-yellow-100 sm:mb-[22px] sm:mt-2 sm:h-[45px] md:h-[50px] lg:h-[54px]">
                          Recent Joins
                        </h2>
                        <div className="bg-camo-400 h-[1px] w-full hidden sm:block"></div>
                        <div className="flex flex-1 flex-row gap-4 overflow-auto py-6 sm:flex-col"></div>
                        <div className="absolute bottom-0 left-0 right-0 hidden h-16 bg-gradient-to-b from-transparent to-[#252B1B] to-80% sm:block"></div>
                        <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-16 bg-gradient-to-r from-transparent to-[#0f140c] to-80% sm:hidden"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
            <div className="bg-black duration-[0ms] opacity-0 pointer-events-none absolute inset-0 z-0 h-full w-full transition-opacity"></div>
            <div className="duration-[0ms] opacity-0 pointer-events-none absolute inset-0 z-0 h-full w-full bg-[#1c1718] transition-opacity"></div>
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
          <div className="absolute bottom-5 z-20 hidden animate-appear-expand-right items-center xs:left-[150px] xs:right-[180px] xs:flex md:left-[600px] md:right-60">
            <div className="typography-brand-body flex w-full animate-appear-expand-right items-center gap-2.5 uppercase leading-[160%] text-camo-400">
              <div className="flex h-[8.64px] flex-1 items-stretch justify-end gap-1 overflow-x-hidden text-camo-400 opacity-50 [&amp;>*]:min-w-max">
                <svg fill="none" viewBox="0 0 524 8">
                  <path
                    d="M.195.99h29.202v6.489H.195zM48.054.99h29.202v6.489H48.054zM324.254.989h138.691v6.489H324.254zM37.185.99h3.082v6.489h-3.082zM98.022.99h3.082v6.489h-3.082zM103.052.99h3.082v6.489h-3.082zM215.405.99h3.082v6.489h-3.082zM220.435.989h3.082v6.489h-3.082zM492.654.989h3.082v6.489h-3.082zM506.39.989h3.082v6.489h-3.082zM520.125.989h3.082v6.489h-3.082zM284.464.99h3.082v6.489h-3.082zM167.946.99h3.082v6.489h-3.082z"
                    fill="currentColor"
                  ></path>
                  <circle
                    cx="189.847"
                    cy="4.397"
                    fill="currentColor"
                    r="1.46"
                  ></circle>
                  <circle
                    cx="194.714"
                    cy="4.397"
                    fill="currentColor"
                    r="1.46"
                  ></circle>
                  <circle
                    cx="199.581"
                    cy="4.396"
                    fill="currentColor"
                    r="1.46"
                  ></circle>
                  <circle
                    cx="279.219"
                    cy="4.396"
                    fill="currentColor"
                    r="1.46"
                  ></circle>
                </svg>
                <svg fill="none" viewBox="0 0 524 8">
                  <path
                    d="M.195.99h29.202v6.489H.195zM48.054.99h29.202v6.489H48.054zM324.254.989h138.691v6.489H324.254zM37.185.99h3.082v6.489h-3.082zM98.022.99h3.082v6.489h-3.082zM103.052.99h3.082v6.489h-3.082zM215.405.99h3.082v6.489h-3.082zM220.435.989h3.082v6.489h-3.082zM492.654.989h3.082v6.489h-3.082zM506.39.989h3.082v6.489h-3.082zM520.125.989h3.082v6.489h-3.082zM284.464.99h3.082v6.489h-3.082zM167.946.99h3.082v6.489h-3.082z"
                    fill="currentColor"
                  ></path>
                  <circle
                    cx="189.847"
                    cy="4.397"
                    fill="currentColor"
                    r="1.46"
                  ></circle>
                  <circle
                    cx="194.714"
                    cy="4.397"
                    fill="currentColor"
                    r="1.46"
                  ></circle>
                  <circle
                    cx="199.581"
                    cy="4.396"
                    fill="currentColor"
                    r="1.46"
                  ></circle>
                  <circle
                    cx="279.219"
                    cy="4.396"
                    fill="currentColor"
                    r="1.46"
                  ></circle>
                </svg>
                <svg fill="none" viewBox="0 0 524 8">
                  <path
                    d="M.195.99h29.202v6.489H.195zM48.054.99h29.202v6.489H48.054zM324.254.989h138.691v6.489H324.254zM37.185.99h3.082v6.489h-3.082zM98.022.99h3.082v6.489h-3.082zM103.052.99h3.082v6.489h-3.082zM215.405.99h3.082v6.489h-3.082zM220.435.989h3.082v6.489h-3.082zM492.654.989h3.082v6.489h-3.082zM506.39.989h3.082v6.489h-3.082zM520.125.989h3.082v6.489h-3.082zM284.464.99h3.082v6.489h-3.082zM167.946.99h3.082v6.489h-3.082z"
                    fill="currentColor"
                  ></path>
                  <circle
                    cx="189.847"
                    cy="4.397"
                    fill="currentColor"
                    r="1.46"
                  ></circle>
                  <circle
                    cx="194.714"
                    cy="4.397"
                    fill="currentColor"
                    r="1.46"
                  ></circle>
                  <circle
                    cx="199.581"
                    cy="4.396"
                    fill="currentColor"
                    r="1.46"
                  ></circle>
                  <circle
                    cx="279.219"
                    cy="4.396"
                    fill="currentColor"
                    r="1.46"
                  ></circle>
                </svg>
              </div>
              <div>TVL / $1,209,300,898</div>
              <div className="hidden gap-1 opacity-50 min-[1260px]:flex">
                <div className="h-[7px] w-[3px] bg-camo-400"></div>
                <div className="h-[7px] w-[3px] bg-camo-400"></div>
                <div className="h-[7px] w-[21px] bg-camo-400"></div>
              </div>
              <div className="hidden min-[1260px]:block">
                Total Users / 1,842,161
              </div>
              <div className="hidden gap-1 opacity-50 min-[1440px]:flex">
                <div className="h-[7px] w-[14px] bg-camo-400"></div>
                <div className="h-[7px] w-[3px] bg-camo-400"></div>
              </div>
              <div className="hidden min-[1440px]:block">Airdrop Live</div>
            </div>
          </div>{" "}
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
          <div className="absolute z-20 hidden items-center justify-center gap-6 text-camo-400 xs:bottom-1 xs:right-10 xs:flex xs:max-md:scale-75 md:bottom-5 md:right-20">
            <a
              href="https://twitter.com/Blast"
              rel="noreferrer"
              target="_blank"
            >
              <button
                aria-label="Twitter"
                className="text-camo-300 uppercase interactive-text justify-center flex items-center gap-1 disabled:cursor-not-allowed"
              >
                <img className="h-6 w-6  mt-2" src={twitter} />
              </button>
            </a>
            <a
              href="https://discord.gg/blast-l2"
              rel="noreferrer"
              target="_blank"
            >
              <button
                aria-label="Discord"
                className=" uppercase  interactive-text flex items-center gap-1 disabled:cursor-not-allowed"
              >
                <img className="h-8 w-8" src={discord} />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
