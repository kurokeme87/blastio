import React from "react";
import { Link } from "react-router-dom";
import "./Bridge.css";
const Bridge = () => {
  return (
    <div id="__next">
      <div className="__variable_d69ff7">
        <div className="relative flex min-h-screen w-screen px-[11px] py-[12px] sm:py-[11px] h-screen overflow-hidden">
          <div className="relative flex min-h-full w-full flex-1 flex-col rounded-md border-2 border-camo-500 transition-colors overflow-hidden bg-gradient-to-b from-[#11140C] from-[27.54%] to-[#252B1B]">
            <div className="relative z-10 flex flex-1 flex-col pb-16 h-screen overflow-hidden">
              <header className="relative z-[11] flex h-max justify-between px-6 pb-3 pt-9 md:ml-16 md:mr-14 md:pl-14 md:pr-0 md:pt-10 lg:pt-14 border-b border-camo-400">
                <div className="flex w-full items-center justify-between gap-2.5 md:gap-5">
                  <div className="flex items-center justify-between sm:justify-start">
                    <Link
                      className="flex items-center sm:hidden"
                      style={{ height: 32, width: 136 }}
                      href="/"
                    >
                      <img
                        alt="Blast Logo"
                        loading="lazy"
                        width={136}
                        height={32}
                        src="/_next/image?url=%2Fimages%2Flogo-glow.png&w=384&q=75"
                      />
                    </Link>
                    <Link
                      className="hidden items-center sm:flex lg:hidden"
                      style={{ height: 40, width: 170 }}
                      href="/en"
                    >
                      <img
                        alt="Blast Logo"
                        loading="lazy"
                        width={170}
                        height={40}
                        src="/_next/image?url=%2Fimages%2Flogo-glow.png&w=384&q=75"
                      />
                    </Link>
                    <Link
                      className="hidden items-center lg:flex"
                      style={{ height: 54, width: 256 }}
                      href="/en"
                    >
                      <img
                        alt="Blast Logo"
                        loading="lazy"
                        width={256}
                        height={54}
                        src="/_next/image?url=%2Fimages%2Flogo-glow.png&w=640&q=75"
                      />
                    </Link>
                    <nav className="ml-2 hidden items-center overflow-x-hidden xs:flex md:ml-6 md:gap-2">
                      <div className="typography-brand-body-l-caps px-2 py-2 md:px-4">
                        <a
                          className="interactive-text text-camo-300"
                          href="https://blog.blast.io/vision"
                        >
                          Vision
                        </a>
                      </div>
                      <div className="typography-brand-body-l-caps px-2 py-2 md:px-4">
                        <Link
                          className="interactive-text text-camo-300"
                          href="/en/airdrop"
                        >
                          Airdrop
                        </Link>
                      </div>
                      <div className="typography-brand-body-l-caps px-2 py-2 md:px-4">
                        <Link
                          className="interactive-text text-camo-300"
                          href="/en/leaderboard"
                        >
                          Leaderboard
                        </Link>
                      </div>
                      <div className="typography-brand-body-l-caps px-2 py-2 md:px-4">
                        <Link
                          className="interactive-text text-camo-300"
                          href="/en/devs"
                        >
                          Devs
                        </Link>
                      </div>
                      <div className="typography-brand-body-l-caps px-2 py-2 md:px-4">
                        <Link
                          className="interactive-text text-yellow-100"
                          href="/en/bridge"
                        >
                          Bridge
                        </Link>
                      </div>
                      <div className="typography-brand-body-l-caps px-2 py-2 md:px-4">
                        <Link
                          className="interactive-text shiny-text"
                          href="/en/bigbang"
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
                            style={{ height: 24, width: 24 }}
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
                        style={{ height: 24, width: 24 }}
                        viewBox="0 0 24 24"
                      >
                        <use xlinkHref="/icons/library.svg#menu-hamburger"></use>
                      </svg>
                    </button>
                  </div>
                  <div className="hidden min-w-0 gap-2 sm:flex md:gap-10"></div>
                </div>
              </header>
              <main className="relative flex h-full flex-1 px-6 pt-6 md:ml-16 md:pl-14 md:pr-14 lg:pt-14 overflow-hidden">
                {/* Main content */}
              </main>
            </div>
            <div className="bg-black duration-[0ms] opacity-0 pointer-events-none absolute inset-0 z-0 h-full w-full transition-opacity"></div>
            <div className="duration-[0ms] opacity-0 pointer-events-none absolute inset-0 z-0 h-full w-full bg-[#1c1718] transition-opacity"></div>
          </div>
          {/* Frame corners and social media links */}
        </div>
      </div>
    </div>
  );
};

export default Bridge;
