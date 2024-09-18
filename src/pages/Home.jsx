import background_video from "../assets/home-splash.webm";
import logo from "../assets/logo.png";
import santiago from "../assets/santiago.png";
import andrew_kang from "../assets/andrew-kang.png";
import egirl from "../assets/egirl.png";
import larry_cemark from "../assets/larry-cermak.png";
import paradigm from "../assets/paradigm.png";
import standard_crypto from "../assets/standard-crypto.png";
import video_left from "../assets/Blast.webm";
import video_right from "../assets/Blast_2.webm";
import video_top_right from "../assets/Blast_4.webm";
import cutout_left from "../assets/frame-corner-top-left.svg";
import cutout_top_right from "../assets/frame-corner-top-right.svg";
import cutout_left_sm from "../assets/frame-corner-top-left.svg";
import cutout_bottom_right from "../assets/frame-corner-sm-bottom-right.svg";
import cutout_bottom_left from "../assets/frame-corner-sm-top-right.svg";
import cutout_top_right_sm from "../assets/frame-corner-sm-top-right.svg";
import cutout_bottom_right_sm from "../assets/frame-corner-sm-top-right.svg";
import cutout_bottom_left_sm from "../assets/frame-corner-sm-top-right.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="font-geom">
      <div className="relative flex min-h-screen w-screen px-[11px] py-[12px] sm:py-[11px] h-auto sm:h-screen">
        <div className="relative flex min-h-full w-full flex-1 flex-col overflow-clip rounded-md border-2 border-camo-500 transition-colors bg-gradient-to-b from-[#11140C] from-[27.54%] to-[#252B1B]">
          <div className="relative z-10 flex flex-1 flex-col pb-16 h-auto sm:h-full">
            <div className="flex flex-1 sm:overflow-hidden">
              <div className="flex flex-1 flex-col">
                <div className="sticky top-[14px] z-10 md:top-[13px]">
                  <div className="relative">
                    <header className="relative z-[11] flex h-max justify-between px-6 pb-3 pt-9 md:ml-16 md:mr-14 md:pl-14 md:pr-0 md:pt-10 lg:pt-14 sm:mr-0">
                      <div className="flex w-full items-center justify-between gap-2.5 md:gap-5">
                        <div className="flex items-center justify-between sm:justify-start">
                          <Link
                            className="flex items-center sm:hidden"
                            style={{ height: "32px", width: "136px" }}
                            to="/"
                          >
                            <img
                              alt="Blast Logo"
                              loading="lazy"
                              width="136"
                              height="32"
                              decoding="async"
                              data-nimg="1"
                              // style={{ color: "transparent" }}
                              src={logo}
                            />
                          </Link>
                          <Link
                            className="hidden items-center sm:flex lg:hidden"
                            style={{ height: "40px", width: "170px" }}
                            to="/"
                          >
                            <img
                              alt="Blast Logo"
                              loading="lazy"
                              width="170"
                              height="40"
                              decoding="async"
                              data-nimg="1"
                              style={{ color: "transparent" }}
                              src={logo}
                            />
                          </Link>
                          <Link
                            className="hidden items-center lg:flex"
                            style={{ height: "54px", width: "256px" }}
                            to="/"
                          >
                            <img
                              alt="Blast Logo"
                              loading="lazy"
                              width="256"
                              height="54"
                              decoding="async"
                              data-nimg="1"
                              style={{ color: "transparent" }}
                              src={logo}
                            />
                          </Link>
                          <nav className="ml-2 hidden items-center overflow-x-hidden xs:flex md:ml-6 md:gap-2">
                            <div className="typography-brand-body-l-caps px-2 py-2 md:px-4">
                              <Link
                                className="interactive-text text-camo-300"
                                to="https://blog.blast.io/vision"
                              >
                                Vision
                              </Link>
                            </div>
                            <div className="typography-brand-body-l-caps px-2 py-2 md:px-4">
                              <Link
                                className="interactive-text text-camo-300"
                                to="/airdrop"
                              >
                                Airdrop
                              </Link>
                            </div>
                            <div className="typography-brand-body-l-caps px-2 py-2 md:px-4">
                              <Link
                                className="interactive-text text-camo-300"
                                to="/leaderboard"
                              >
                                Leaderboard
                              </Link>
                            </div>
                            <div className="typography-brand-body-l-caps px-2 py-2 md:px-4">
                              <Link
                                className="interactive-text text-camo-300"
                                to="/devs"
                              >
                                Devs
                              </Link>
                            </div>
                            <div className="typography-brand-body-l-caps px-2 py-2 md:px-4">
                              <Link
                                className="interactive-text text-camo-300"
                                to="/bridge"
                              >
                                Bridge
                              </Link>
                            </div>
                            <div className="typography-brand-body-l-caps px-2 py-2 md:px-4">
                              <Link
                                className="interactive-text shiny-text"
                                to="/bigbang"
                              >
                                Big Bang
                              </Link>
                            </div>
                            <div>
                              <button
                                aria-haspopup="menu"
                                aria-label="Choose your language"
                                className="text-camo-300 uppercase interactive-text flex items-center gap-1 disabled:cursor-not-allowed"
                              >
                                <svg
                                  style={{ height: "24px", width: "24px" }}
                                  viewBox="0 0 24 24"
                                >
                                  <use xlinkHref="/icons/library.svg#globe"></use>
                                </svg>
                              </button>
                            </div>
                          </nav>
                        </div>
                        <div className="block transition-transform duration-500 xs:hidden rotate-0">
                          <button
                            aria-label="Open Navigation menu"
                            className="text-yellow-300 uppercase interactive-text flex items-center gap-1 disabled:cursor-not-allowed"
                          >
                            <svg
                              style={{ height: "24px", width: "24px" }}
                              viewBox="0 0 24 24"
                            >
                              <use xlinkHref="/icons/library.svg#menu-hamburger"></use>
                            </svg>
                          </button>
                        </div>
                        <div className="hidden min-w-0 gap-2 sm:flex md:gap-10"></div>
                      </div>
                    </header>
                    <div className="absolute bottom-0 left-0 right-0 transition-opacity duration-300 opacity-0">
                      <div className="w-full h-[2px] bg-camo-500"></div>
                    </div>
                    <div className="absolute inset-0 top-[-12px] -z-10 transition-opacity duration-300 opacity-0 backdrop-blur-[12px]"></div>
                  </div>
                </div>
                <main className="relative flex h-full flex-1 px-6 pt-6 md:ml-16 md:pl-14 md:pr-14 lg:pt-14 overflow-hidden sm:pr-0">
                  <div className="flex flex-1 flex-col items-center sm:mr-6 md:mr-16 relative animate-enter-fade">
                    <video
                      autoPlay
                      loop
                      muted
                      className="fixed right-5 top-4 hidden sm:block sm:w-12 md:w-24"
                      src={video_top_right}
                    ></video>
                    <video
                      autoPlay
                      loop
                      muted
                      className="absolute left-0 top-0 -z-10 hidden h-full sm:block"
                      src={video_left}
                    ></video>
                    <video
                      autoPlay
                      loop
                      muted
                      className="absolute right-0 top-0 -z-10 hidden h-full sm:block"
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
                                style={{ height: "16px", width: "16px" }}
                                viewBox="0 0 24 24"
                              >
                                <use xlinkHref="/icons/library.svg#usdb"></use>
                              </svg>
                            </div>
                            <div className="flex gap-1">
                              <div className="h-6 w-[3px] animate-loader-camo [animation-delay:0ms]"></div>
                              <div className="h-6 w-[3px] animate-loader-camo [animation-delay:250ms]"></div>
                              <div className="h-6 w-[3px] animate-loader-camo [animation-delay:500ms]"></div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2.5 rounded-full bg-camo-500 px-4 py-1.5">
                            <div className="flex size-6 items-center justify-center rounded-full text-black bg-camo-200">
                              <svg
                                style={{ height: "16px", width: "16px" }}
                                viewBox="0 0 24 24"
                              >
                                <use xlinkHref="/icons/library.svg#eth"></use>
                              </svg>
                            </div>
                            <div className="flex gap-1">
                              <div className="h-6 w-[3px] animate-loader-camo [animation-delay:0ms]"></div>
                              <div className="h-6 w-[3px] animate-loader-camo [animation-delay:250ms]"></div>
                              <div className="h-6 w-[3px] animate-loader-camo [animation-delay:500ms]"></div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-center gap-4 pt-6">
                          <a className="group min-w-[256px]" href="/bridge">
                            <div className="transition-[filter] drop-shadow-glow-sm-yellow-300 hover:drop-shadow-glow-sm-white-300">
                              <button
                                tabIndex="-1"
                                className="select-none disabled:cursor-not-allowed disabled:bg-camo-300 disabled:text-gray-800 typography-brand-body-l-caps sm:max-md:min-h-[36px] sm:max-md:py-1.5 min-h-[40px] px-6 py-2 transition-colors will-change-transform [transform:translateZ(0)] rounded-bl-md rounded-tr-md [clip-path:polygon(20px_0,100%_0,100%_50%,calc(100%-20px)_100%,0_100%,0_50%)] w-full bg-yellow-300 group-focus-visible:bg-white group-active:bg-white media-hover:hover:bg-white text-black"
                              >
                                Bridge & Earn
                              </button>
                            </div>
                          </a>
                          <a
                            className="interactive-text typography-brand-body-l-caps tracking-widest text-yellow-300"
                            href="/about"
                          >
                            Learn More
                          </a>
                        </div>
                      </div>
                      <div className="flex justify-center xs:hidden"></div>
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
          <div className="bg-black duration-[0ms] opacity-0 pointer-events-none absolute inset-0 z-0 h-full w-full transition-opacity"></div>
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
            src="/videos/home-splash-mobile.webm"
            className="pointer-events-none absolute inset-0 z-0 h-full w-full animate-enter-fade transition-opacity duration-1000 xs:hidden"
          ></video>
          <div className="animation-enter-fade absolute inset-0 hidden bg-[radial-gradient(circle,transparent,black)] opacity-75 sm:block"></div>
        </div>
        <div className="absolute left-0 right-0 top-0 z-20 h-[14px] border-b-2 border-camo-500 bg-black sm:h-[13px]"></div>
        <div className="absolute bottom-0 left-0 right-0 z-20 h-[14px] border-t-2 border-camo-500 bg-black sm:h-[13px]"></div>
        {/* <img
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
        /> */}
        {/* <img
          alt=""
          loading="lazy"
          width="150"
          height="0"
          decoding="async"
          data-nimg="1"
          className="pointer-events-none absolute left-0 top-0 z-20 block md:hidden"
          style={{ color: "transparent" }}
          src={cutout_left}
        /> */}
        {/* <img
          alt=""
          loading="lazy"
          width="211"
          height="0"
          decoding="async"
          data-nimg="1"
          className="pointer-events-none absolute right-0 top-0 z-20 block md:hidden"
          style={{ color: "transparent" }}
          src={cutout_top_right}
        /> */}
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
        {/* <img
          alt=""
          loading="lazy"
          width="211"
          height="0"
          decoding="async"
          data-nimg="1"
          className="pointer-events-none absolute bottom-0 right-0 z-20 block md:hidden"
          style={{ color: "transparent" }}
          src={cutout_bottom_right_sm}
        /> */}
        <div className="absolute bottom-5 z-20 hidden animate-appear-expand-right items-center xs:left-[150px] xs:right-[180px] xs:flex md:left-[600px] md:right-60"></div>
        {/* <img
          alt=""
          loading="lazy"
          width="597"
          height="0"
          decoding="async"
          data-nimg="1"
          className="pointer-events-none absolute bottom-0 left-0 z-20 hidden md:block"
          style={{ color: "transparent" }}
          src={cutout_bottom_left}
        /> */}
        {/* <img
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
              className="text-camo-300 uppercase interactive-text flex items-center gap-1 disabled:cursor-not-allowed"
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
