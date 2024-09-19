import { useState, useEffect, useCallback } from "react";
import background_video from "../assets/home-splash.webm";
import logo from "../assets/logo.png";
import logo_mobile from "../assets/logo-mobile.png";
import santiago from "../assets/santiago.png";
import andrew_kang from "../assets/andrew-kang.png";
import egirl from "../assets/egirl.png";
import larry_cemark from "../assets/larry-cermak.png";
import paradigm from "../assets/paradigm.png";
import standard_crypto from "../assets/standard-crypto.png";
import video_mobile from "../assets/video_mobile.webm";
import video_left from "../assets/Blast.webm";
import video_right from "../assets/Blast_2.webm";
import video_top_right from "../assets/Blast_4.webm";
import video_top_right_mobile from "../assets/Blast_7.webm";
import cutout_left from "../assets/frame-corner-top-left.svg";

import cutout_top_right from "../assets/frame-corner-top-right.svg";
import cutout_left_sm from "../assets/frame-corner-top-left.svg";
import cutout_bottom_right from "../assets/frame-corner-sm-bottom-right.svg";
import cutout_bottom_left from "../assets/frame-corner-sm-top-right.svg";
import cutout_top_right_sm from "../assets/frame-corner-sm-top-right.svg";
import cutout_bottom_right_sm from "../assets/frame-corner-sm-top-right.svg";
import cutout_bottom_left_sm from "../assets/frame-corner-sm-top-right.svg";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";
import Navbar from "../components/Navbar";

const Home = () => {
  const [scrolledPast, setScrolledPast] = useState(false); // State for scroll status
  const [showYield, setShowYield] = useState(false);
  const hasScrolledPastMain = () => {
    const mainElement = document.querySelector("main");
    if (mainElement) {
      const rect = mainElement.getBoundingClientRect();
      return rect.top < 40; // Returns true if the main element is above the viewport
    }
    return false; // Returns false if the main element is not found
  };

  setTimeout(() => {
    setShowYield(true);
  }, 4000);

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
    <div className="font-geom">
      <div className="relative flex min-h-screen w-screen px-[11px] py-[12px] sm:py-[11px] h-auto sm:h-screen">
        <div className="relative flex min-h-full w-full flex-1 flex-col overflow-clip rounded-md border-2 border-camo-500 transition-colors bg-gradient-to-b from-[#11140C] from-[27.54%] to-[#252B1B]">
          <div className="relative z-10 flex flex-1 flex-col pb-16 h-auto sm:h-full">
            <div className="flex flex-1 sm:overflow-hidden">
              <div className="flex flex-1 flex-col">
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
                <main className="relative flex h-full flex-1 px-6 pt-6 md:ml-16 md:pl-14 md:pr-14 lg:pt-14 overflow-hidden sm:pr-0">
                  <div className="flex flex-1 flex-col items-center sm:mr-6 md:mr-16 relative animate-enter-fade">
                    <video
                      autoPlay
                      loop
                      muted
                      className="fixed right-5 top-4 hidden lg:block sm:w-12 md:w-24"
                      src={video_top_right}
                    ></video>
                    <video
                      autoPlay
                      loop
                      muted
                      className="absolute left-0 top-0 -z-10 hidden h-full lg:block"
                      src={video_left}
                    ></video>
                    <video
                      autoPlay
                      loop
                      muted
                      className="absolute right-0 top-0 -z-10 hidden h-full lg:block"
                      src={video_right}
                    ></video>
                    <div className="flex h-full flex-col items-center gap-6">
                      <div className="flex flex-1 animate-appear-slide-up flex-col items-center justify-center gap-7">
                        <div className="flex flex-col items-center gap-4">
                          <h1 className="typography-brand-heading-1 shiny-text max-w-[738px] text-balance text-center lg:max-w-[900px]">
                            The Fullstack Chain
                          </h1>
                          <h3 className="typography-brand-heading-2 max-w-[738px] text-balance text-center font-normal text-camo-200 lg:max-w-[900px]">
                            The only EVM chain with native yield for ETH and
                            stablecoins.
                          </h3>
                        </div>
                        <div className="flex gap-6">
                          <div className="flex items-center gap-2.5 rounded-full bg-camo-500 px-4 py-1.5">
                            <div className="flex size-6 items-center justify-center rounded-full text-black bg-yellow-300">
                              <svg
                                viewBox="0 0 24 24"
                                style={{ height: "16px", width: "16px" }}
                              >
                                <use xlinkHref="/icons/library.svg#usdb"></use>
                              </svg>
                            </div>
                            {!showYield ? (
                              <div className="flex gap-1">
                                <div className="h-6 w-[3px] animate-loader-camo [animation-delay:0ms]"></div>
                                <div className="h-6 w-[3px] animate-loader-camo [animation-delay:250ms]"></div>
                                <div className="h-6 w-[3px] animate-loader-camo [animation-delay:500ms]"></div>
                              </div>
                            ) : (
                              <div className="text-camo-100">USDB 6%</div>
                            )}
                          </div>
                          <div className="flex items-center gap-2.5 rounded-full bg-camo-500 px-4 py-1.5">
                            <div className="flex size-6 items-center justify-center rounded-full text-black bg-camo-200">
                              <svg
                                viewBox="0 0 24 24"
                                style={{ height: "16px", width: "16px" }}
                              >
                                <use xlinkHref="/icons/library.svg#eth"></use>
                              </svg>
                            </div>
                            {!showYield ? (
                              <div className="flex gap-1">
                                <div className="h-6 w-[3px] animate-loader-camo [animation-delay:0ms]"></div>
                                <div className="h-6 w-[3px] animate-loader-camo [animation-delay:250ms]"></div>
                                <div className="h-6 w-[3px] animate-loader-camo [animation-delay:500ms]"></div>
                              </div>
                            ) : (
                              <div className="text-camo-100">ETH 3%</div>
                            )}
                          </div>
                        </div>
                        <div className="flex flex-col items-center gap-4 pt-6">
                          <a className="group min-w-[256px]" href="/en/bridge">
                            <div className="transition-[filter] drop-shadow-glow-sm-yellow-300 hover:drop-shadow-glow-sm-white-300">
                              <button
                                tabIndex="-1"
                                className="select-none disabled:cursor-not-allowed disabled:bg-camo-300 disabled:text-gray-800 typography-brand-body-l-caps sm:max-md:min-h-[36px] sm:max-md:py-1.5 min-h-[40px] px-6 py-2 transition-colors will-change-transform [transform:translateZ(0)] rounded-bl-md rounded-tr-md [clip-path:polygon(20px_0,100%_0,100%_50%,calc(100%-20px)_100%,0_100%,0_50%)] w-full bg-yellow-300 group-focus-visible:bg-white group-active:bg-white media-hover:hover:bg-white text-black"
                              >
                                Bridge &amp; Earn
                              </button>
                            </div>
                          </a>
                          <a
                            className="interactive-text typography-brand-body-l-caps tracking-widest text-yellow-300"
                            href="/en/about"
                          >
                            Learn More
                          </a>
                        </div>
                      </div>
                      <div className="flex justify-center xs:hidden">
                        <div className="flex flex-col items-center gap-2">
                          <div className="typography-brand-body-l-caps text-yellow-100">
                            TVL
                          </div>
                          <div className="typography-brand-heading-2 max-w-[80vw] overflow-hidden text-ellipsis text-camo-200">
                            $1,211,351,657
                          </div>
                        </div>
                      </div>
                      <div className="flex animate-enter-fade flex-col gap-6 xs:max-w-max sm:max-w-full sm:gap-3.5">
                        <div className="flex animate-appear-slide-up flex-col items-center justify-center gap-4 xs:items-start sm:flex-row sm:items-center sm:gap-8">
                          <h4 className="typography-brand-body-l-caps text-center text-yellow-100 xs:text-left sm:text-center sm:text-camo-400">
                            Backed By
                          </h4>
                          <div className="flex flex-col items-center gap-6 sm:flex-row">
                            <img
                              alt="Backed by Paradigm"
                              loading="lazy"
                              width="143"
                              height="34"
                              decoding="async"
                              data-nimg="1"
                              style={{ color: "transparent" }}
                              src={paradigm}
                            />
                            <img
                              alt="Backed by Standard Crypto"
                              loading="lazy"
                              width="226"
                              height="16"
                              decoding="async"
                              data-nimg="1"
                              style={{ color: "transparent" }}
                              src={standard_crypto}
                            />
                          </div>
                        </div>
                        <div className="grid animate-appear-slide-up grid-cols-2 grid-rows-2 place-items-center gap-7 xs:grid-cols-4 xs:grid-rows-1 sm:grid-cols-4 sm:grid-rows-1">
                          <figure className="flex items-center gap-2">
                            <img
                              alt="Backed by eGirl Capital"
                              loading="lazy"
                              width="32"
                              height="32"
                              decoding="async"
                              data-nimg="1"
                              className="size-8 rounded-full"
                              style={{ color: "transparent" }}
                              src={egirl}
                            />
                            <figcaption className="typography-brand-body-l text-camo-100">
                              eGirl Capital
                            </figcaption>
                          </figure>
                          <figure className="flex items-center gap-2">
                            <img
                              alt="Backed by Andrew Kang"
                              loading="lazy"
                              width="32"
                              height="32"
                              decoding="async"
                              data-nimg="1"
                              className="size-8 rounded-full"
                              style={{ color: "transparent" }}
                              src={andrew_kang}
                            />
                            <figcaption className="typography-brand-body-l text-camo-100">
                              Andrew Kang
                            </figcaption>
                          </figure>
                          <figure className="flex items-center gap-2">
                            <img
                              alt="Backed by Santiago"
                              loading="lazy"
                              width="32"
                              height="32"
                              decoding="async"
                              data-nimg="1"
                              className="size-8 rounded-full"
                              style={{ color: "transparent" }}
                              src={santiago}
                            />
                            <figcaption className="typography-brand-body-l text-camo-100">
                              Santiago
                            </figcaption>
                          </figure>
                          <figure className="flex items-center gap-2">
                            <img
                              alt="Backed by Larry Cermak"
                              loading="lazy"
                              width="32"
                              height="32"
                              decoding="async"
                              data-nimg="1"
                              className="size-8 rounded-full"
                              style={{ color: "transparent" }}
                              src={larry_cemark}
                            />
                            <figcaption className="typography-brand-body-l text-camo-100">
                              Larry Cermak
                            </figcaption>
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                </main>
              </div>
            </div>
          </div>
          <div className="duration-[0ms] opacity-0 pointer-events-none absolute inset-0 z-0 h-full w-full transition-opacity"></div>
          <div className="duration-[0ms] opacity-100 pointer-events-none absolute inset-0 z-0 h-full w-full bg-[#1c1718] transition-opacity"></div>
          <video
            autoPlay
            loop
            muted
            src={background_video}
            className="pointer-events-none absolute inset-0 z-0 hidden h-full w-full animate-enter-fade transition-opacity duration-1000 xs:block"
          ></video>
          <video
            autoPlay
            loop
            muted
            src={video_mobile}
            className="pointer-events-none absolute inset-0 z-0 h-full w-full animate-enter-fade transition-opacity duration-1000 xs:hidden"
          ></video>
          <div className="animation-enter-fade absolute inset-0 hidden bg-[radial-gradient(circle,transparent,black)] opacity-75 sm:block"></div>
        </div>
        <div className="absolute left-0 right-0 top-0 z-20 h-[14px] border-b-2 border-camo-500  sm:h-[13px]"></div>
        <div className="absolute bottom-0 left-0 right-0 z-20 h-[14px] border-t-2 border-camo-500 m:h-[13px]">
          {/* <img
            alt=""
            loading="lazy"
            width="465"
            height="0"
            decoding="async"
            data-nimg="1"
            className="pointer-events-none absolute bottom-0 right-0 z-20 hidden md:block"
            style={{ color: "transparent" }}
            src={cutout_bottom_right}
          />
          <img
            alt=""
            loading="lazy"
            width="211"
            height="0"
            decoding="async"
            data-nimg="1"
            className="pointer-events-none absolute bottom-0 right-0 z-20 block md:hidden"
            style={{ color: "transparent" }}
            src={cutout_bottom_right_sm}
          />
          <div className="absolute bottom-5 z-20 hidden animate-appear-expand-right items-center xs:left-[150px] xs:right-[180px] xs:flex md:left-[600px] md:right-60"></div>
          <img
            alt=""
            loading="lazy"
            // width="597"
            height="0"
            decoding="async"
            data-nimg="1"
            className="pointer-events-none w-[579px] absolute bottom-0 left-0 z-20 hidden md:block"
            style={{ color: "transparent" }}
            src={cutout_bottom_left}
          />
          <img
            alt=""
            loading="lazy"
            width="150"
            height="0"
            decoding="async"
            data-nimg="1"
            className="pointer-events-none absolute bottom-0 left-0 z-20 block md:hidden"
            style={{ color: "transparent" }}
            src={cutout_bottom_left_sm}
          /> */}
        </div>
        <img
          alt=""
          loading="lazy"
          height="0"
          decoding="async"
          data-nimg="1"
          className="pointer-events-none  w-16 absolute left-0 top-0 z-20 hidden md:block"
          style={{ color: "transparent" }}
          src={cutout_left}
        />
        <img
          alt=""
          loading="lazy"
          height="0"
          decoding="async"
          data-nimg="1"
          className="pointer-events-none absolute w-16 right-0 top-0 z-20 hidden md:block"
          style={{ color: "transparent" }}
          src={cutout_top_right_sm}
        />
        <img
          alt=""
          loading="lazy"
          width="150"
          height="0"
          decoding="async"
          data-nimg="1"
          className="pointer-events-none absolute left-0 top-0 z-20 block md:hidden"
          style={{ color: "transparent" }}
          src={cutout_left}
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
          width="465"
          height="0"
          decoding="async"
          data-nimg="1"
          className="pointer-events-none absolute bottom-0 right-0 z-20 hidden md:block"
          style={{ color: "transparent" }}
          src={cutout_bottom_right}
        />
        <img
          alt=""
          loading="lazy"
          width="211"
          height="0"
          decoding="async"
          data-nimg="1"
          className="pointer-events-none absolute bottom-0 right-0 z-20 block md:hidden"
          style={{ color: "transparent" }}
          src={cutout_bottom_right_sm}
        />
        <div className="absolute bottom-5 z-20 hidden animate-appear-expand-right items-center xs:left-[150px] xs:right-[180px] xs:flex md:left-[600px] md:right-60"></div>
        <img
          alt=""
          loading="lazy"
          width="597"
          height="0"
          decoding="async"
          data-nimg="1"
          className="pointer-events-none absolute bottom-0 left-0 z-20 hidden md:block"
          style={{ color: "transparent" }}
          src={cutout_bottom_left}
        />
        <img
          alt=""
          loading="lazy"
          width="150"
          height="0"
          decoding="async"
          data-nimg="1"
          className="pointer-events-none absolute bottom-0 left-0 z-20 block md:hidden"
          style={{ color: "transparent" }}
          src={cutout_bottom_left_sm}
        />
        <div className="absolute bottom-5 z-20 hidden animate-appear-expand-right items-center xs:left-[150px] xs:right-[180px] xs:flex md:left-[600px] md:right-60">
          <div className="typography-brand-body flex w-full animate-appear-expand-right items-center gap-2.5 uppercase leading-[160%] text-yellow-100">
            <div className="flex h-[8.64px] flex-1 items-stretch justify-end gap-1 overflow-x-hidden text-camo-400 opacity-50 [&>*]:min-w-max">
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
            <div>TVL / $1,181,584,862</div>
            <div className="hidden gap-1 opacity-50 min-[1260px]:flex">
              <div className="h-[7px] w-[3px] bg-camo-400"></div>
              <div className="h-[7px] w-[3px] bg-camo-400"></div>
              <div className="h-[7px] w-[21px] bg-camo-400"></div>
            </div>
            <div className="hidden min-[1260px]:block">
              Total Users / 1,841,328
            </div>
            <div className="hidden gap-1 opacity-50 min-[1440px]:flex">
              <div className="h-[7px] w-[14px] bg-camo-400"></div>
              <div className="h-[7px] w-[3px] bg-camo-400"></div>
            </div>
            <div className="hidden min-[1440px]:block">Airdrop Live</div>
          </div>
        </div>

        <div className="absolute bottom-6 left-6 top-20 hidden w-1.5 animate-enter-fade flex-col text-camo-400 [animation-delay:0.5s] [animation-fill-mode:both] xs:flex [&amp;>*]:opacity-50">
          <div className="absolute inset-0 bottom-1/4 flex flex-col">
            <div className="flex-0 animate-[flex-grow_20s_ease-in-out_alternate_infinite] [animation-delay:2s]"></div>
            <div className="flex w-full flex-col gap-4">
              <div className="h-1 bg-current"></div>
              <div className="h-1 bg-current"></div>
              <div className="h-1 bg-current"></div>
            </div>
          </div>
          <div className="absolute inset-0 top-16 flex flex-col">
            <div className="flex-0 animate-[flex-grow_14s_ease-in-out_alternate_infinite]"></div>
            <div className="flex w-full flex-col gap-1">
              <div className="h-32 bg-current"></div>
              <div className="h-8 bg-current"></div>
              <div className="h-1 bg-current"></div>
              <div className="h-1 w-1 self-center rounded-full bg-current"></div>
            </div>
          </div>
          <div className="absolute inset-x-0 inset-y-1/4 flex flex-col">
            <div className="flex-0 animate-[flex-grow_10s_ease-in-out_alternate_infinite]"></div>
            <div className="flex w-full flex-col gap-1">
              <div className="h-1 bg-current"></div>
              <div className="h-1 bg-current"></div>
              <div className="h-4"></div>
              <div className="h-1 w-1 self-center rounded-full bg-current"></div>
              <div className="h-1 w-1 self-center rounded-full bg-current"></div>
              <div className="h-1 w-1 self-center rounded-full bg-current"></div>
              <div className="h-4"></div>
              <div className="h-1 bg-current"></div>
            </div>
          </div>
          <div className="absolute inset-0 top-1/3 flex flex-col">
            <div className="flex-0 animate-[flex-grow_10s_ease-in-out_alternate_infinite] [animation-delay:3s]"></div>
            <div className="flex w-full flex-col gap-1">
              <div className="h-1 bg-current"></div>
              <div className="h-1 bg-current"></div>
            </div>
          </div>
          <div className="absolute inset-0 top-1/2 flex flex-col">
            <div className="flex-0 animate-[flex-grow_16s_ease-in-out_alternate_infinite]"></div>
            <div className="flex w-full flex-col gap-1">
              <div className="h-8 bg-current"></div>
              <div className="h-1 bg-current"></div>
              <div className="h-8 bg-current"></div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-20 right-6 top-6 hidden w-1.5 animate-enter-fade flex-col text-camo-400 [animation-delay:0.5s] [animation-fill-mode:both] xs:flex [&amp;>*]:opacity-50">
          <div className="absolute inset-0 bottom-40 flex flex-col justify-end">
            <div className="flex w-full flex-col gap-4">
              <div className="h-1 bg-current"></div>
            </div>
            <div className="flex-0 animate-[flex-grow_20s_ease-in-out_alternate_infinite] [animation-delay:2s]"></div>
          </div>
          <div className="absolute inset-0 bottom-24 top-1/2 flex flex-col justify-end">
            <div className="flex w-full flex-col gap-1">
              <div className="h-1 bg-current"></div>
              <div className="h-1 bg-current"></div>
            </div>
            <div className="flex-0 animate-[flex-grow_10s_ease-in-out_alternate_infinite] [animation-delay:3s]"></div>
          </div>
          <div className="absolute inset-0 top-1/2 flex flex-col justify-end">
            <div className="flex w-full flex-col gap-1">
              <div className="h-8 bg-current"></div>
              <div className="h-1 bg-current"></div>
              <div className="h-8 bg-current"></div>
            </div>
            <div className="flex-0 animate-[flex-grow_16s_ease-in-out_alternate_infinite]"></div>
          </div>
        </div>
        <div className="absolute z-20 hidden items-center gap-6 text-camo-400 xs:bottom-1 xs:right-10 xs:flex xs:max-md:scale-75 md:bottom-5 md:right-20">
          <a href="https://twitter.com/Blast" rel="noreferrer" target="_blank">
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
  );
};

export default Home;
