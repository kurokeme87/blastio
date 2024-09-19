import { Link } from "react-router-dom";
import "./Bridge.css";
import logo from "../assets/logo.png";
import blast from "../assets/blast-color.svg";
import eth from "../assets/eth-color.svg";
import across from "../assets/across-color.svg";
import { useState } from "react";
import logo_mobile from "../assets/logo-mobile.png";
import {
  useConnect,
  useAccount,
  useDisconnect,
  useEnsAvatar,
  useEnsName,
} from "wagmi";
import { GlobeIcon } from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "../lib/utils";
const Bridge = () => {
  const { connectors, connect } = useConnect();
  console.log(connectors);
  const [showConnect, setShowConnect] = useState(false);
  const { address } = useAccount();
  const { disconnect } = useDisconnect();
  const { data: ensName } = useEnsName({ address });
  const { data: ensAvatar } = useEnsAvatar({
    name: ensName || undefined || address,
  });
  console.log(ensAvatar);
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
                        src={logo_mobile}
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
                        src={logo_mobile}
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
                      <Link className="typography-brand-body-l-caps px-2 py-2 md:px-4">
                        <a
                          className="interactive-text text-camo-300"
                          href="airdrop"
                        >
                          Airdrop
                        </a>
                      </Link>
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
                          to="devs"
                        >
                          Devs
                        </Link>
                      </div>
                      <div className="typography-brand-body-l-caps px-2 py-2 md:px-4">
                        <Link
                          className="interactive-text text-yellow-100"
                          to="/bridge"
                        >
                          Bridge
                        </Link>
                      </div>
                      <div className="typography-brand-body-l-caps px-2 py-2 md:px-4">
                        <Link
                          className="interactive-text shiny-text"
                          to="/en/bigbang"
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
                    ></button>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <div className="hidden min-w-0 gap-2  items-center lg:flex md:gap-4">
                        <img
                          alt="0x87bE26Ab50ecd355d2bEB507cE493E2E209b2885"
                          className="rounded-full h-10 w-10"
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAK5JREFUWEdjXKq46T8DEghwm4TMxWBv2JWHV55U/YyjDhh0IYAewehxSmoaIKQeIw2MOmDQhcB0Ez28+Z6QZOaZS3iVEEwDow4Y8BAYLQeGfwjYhD5AaQ+gZ9qdQikoQoTKdvQQc383B385MOqAAQ+Br+kuKGkAPY6pnQvQzWMcdcCAhwB6o5RQg4RQ/Y8uT6jcINgeINTRIOSgUQeQHAKEgpyQgaTqH+0bDngIAABqzwOU+pd/5AAAAABJRU5ErkJggg=="
                          // style={{ height: "100%", width: "100%" }}
                        />
                        {address && (
                          <div className="flex items-center gap-2">
                            {ensName
                              ? `${ensName} (${address})`
                              : address.substring(0, 12)}
                            <GlobeIcon className="h-6 w-6 " fill="camo-300" />
                          </div>
                        )}

                        {/* <button onClick={() => disconnect()}>Disconnect</button> */}
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>My Account</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Profile</DropdownMenuItem>
                      <DropdownMenuItem>Billing</DropdownMenuItem>
                      <DropdownMenuItem>Team</DropdownMenuItem>
                      <DropdownMenuItem>Subscription</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                {/* <div
                  aria-hidden="true"
                  className="absolute z-20 h-[1px] bg-yellow-100"
                  style={{ bottom: "-1px", left: "578px", width: "88px" }}
                ></div> */}
                <div
                  className={cn(
                    "absolute inset-0 top-[-12px] bg-red-500 -z-10 transition-opacity duration-300",
                    {
                      "opacity-100 z-10": scrollY > 0,
                      "opacity-0": scrollY <= 0,
                      "bg-[linear-gradient(to_bottom,_rgba(17,20,12,0.95)_27.54%,_rgba(37,43,27,0.85))]": true,
                      "backdrop-blur-[6px]": true,
                    }
                  )}
                ></div>
              </header>
              <main className="relative flex h-full flex-1 px-6 pt-6 md:ml-16 md:pl-14 md:pr-14 lg:pt-14 overflow-hidden">
                <div className="relative flex h-full w-full animate-enter-fade">
                  <div className="flex flex-1 flex-col mt-8 lg:mt-0">
                    <div className="mx-auto flex h-full w-full max-w-[1200px] animate-appear-slide-up justify-between gap-x-4">
                      <div className="max-w-[480px] flex-1">
                        <h1 className="typography-brand-heading-2 mb-8 text-yellow-100">
                          Bridge to Earn Yield +
                          <div className="uppercase text-yellow-300">
                            Blast Points
                          </div>
                        </h1>
                        <h2 className="typography-brand-heading-3 mb-10 text-yellow-100">
                          You will earn more Points over time based on how much
                          you bridge.
                        </h2>
                        <h3 className="typography-brand-heading-3 mb-10 text-yellow-100">
                          Blast Points can be redeemed in June.
                        </h3>
                        <div className="mb-14 mt-14 h-24"></div>
                      </div>
                      <div className="relative flex h-fit max-h-full w-[520px]">
                        <fieldset className="absolute left-0 right-0 top-0 flex">
                          <div className="[clip-path:polygon(32px_0%,_100%_0,_100%_100%,_0_100%,_0%_32px)] relative h-[48px] w-1/3 lg:h-[64px] z-10">
                            <input
                              className="peer absolute h-full w-full bg-black opacity-0"
                              id="input-BridgeForm-tab-deposit"
                              name="tab"
                              type="radio"
                              defaultChecked={true}
                              value="deposit"
                            />
                            <label
                              htmlFor="input-BridgeForm-tab-deposit"
                              id="label-BridgeForm-tab-deposit"
                              className="typography-brand-body-l-caps absolute flex h-full w-full cursor-pointer items-center justify-center text-yellow-100 peer-focus-visible:text-white peer-enabled:peer-hover:text-white peer-disabled:cursor-not-allowed"
                            >
                              Deposit
                            </label>
                          </div>
                          <div className="relative h-[48px] w-1/3 lg:h-[64px] bg-camo-500">
                            <input
                              className="peer absolute h-full w-full bg-black opacity-0"
                              id="input-BridgeForm-tab-withdraw"
                              name="tab"
                              type="radio"
                              value="withdraw"
                            />
                            <label
                              htmlFor="input-BridgeForm-tab-withdraw"
                              id="label-BridgeForm-tab-withdraw"
                              className="typography-brand-body-l-caps absolute flex h-full w-full cursor-pointer items-center justify-center text-yellow-100 peer-focus-visible:text-white peer-enabled:peer-hover:text-white peer-disabled:cursor-not-allowed"
                            >
                              Withdraw
                            </label>
                          </div>
                          <div className="rounded-tr-[6px] relative h-[48px] w-1/3 lg:h-[64px] bg-camo-500">
                            <input
                              className="peer absolute h-full w-full bg-black opacity-0"
                              disabled={true}
                              id="input-BridgeForm-tab-history"
                              name="tab"
                              type="radio"
                              value="history"
                            />
                            <label
                              htmlFor="input-BridgeForm-tab-history"
                              id="label-BridgeForm-tab-history"
                              className="typography-brand-body-l-caps absolute flex h-full w-full cursor-pointer items-center justify-center text-yellow-100 peer-focus-visible:text-white peer-enabled:peer-hover:text-white peer-disabled:cursor-not-allowed opacity-50"
                            >
                              History
                            </label>
                          </div>
                        </fieldset>
                        <div className="[clip-path:polygon(calc(33.33%_+_1px)_0px,_calc(33.33%_+_1px)_48px,_100%_48px,_100%_calc(100%_-_56px),_calc(100%_-_56px)_100%,_0_100%,_0_32px,_32px_0px)] lg:[clip-path:polygon(calc(33.33%_+_1px)_0px,_calc(33.33%_+_1px)_64px,_100%_64px,_100%_calc(100%_-_56px),_calc(100%_-_56px)_100%,_0_100%,_0_32px,_32px_0px)] flex max-h-full w-full rounded-[6px] bg-camo-400 p-[1px]">
                          <div className="[clip-path:polygon(33.33%_0px,_33.33%_48px,_100%_48px,_100%_calc(100%_-_56px),_calc(100%_-_56px)_100%,_0_100%,_0_32px,_32px_0px)] lg:[clip-path:polygon(33.33%_0px,_33.33%_64px,_100%_64px,_100%_calc(100%_-_56px),_calc(100%_-_56px)_100%,_0_100%,_0_32px,_32px_0px)] relative w-full rounded-[5px] bg-black px-8 pt-[48px] lg:pt-[64px]">
                            <form className="h-full overflow-y-auto pb-4">
                              <fieldset className="mb-3 mt-4 w-full border-t border-t-camo-400 lg:mb-6 lg:mt-6 [@media(max-height:720px)]:border-none">
                                <legend className="typography-brand-body-bold m-auto block px-2 uppercase text-camo-200 [@media(max-height:720px)]:hidden">
                                  You Can Bridge
                                </legend>
                              </fieldset>
                              <div className="[clip-path:polygon(100%_0px,_100%_0,_100%_0,_100%_calc(100%_-_24px),_calc(100%_-_0px)_100%,_0_100%,_0_24px,_24px_0px)] lg:[clip-path:polygon(100%_0px,_100%_0,_100%_0,_100%_calc(100%_-_40px),_calc(100%_-_32px)_100%,_0_100%,_0_40px,_32px_0px)] rounded-t-[6px] bg-camo-400 p-px pb-0 lg:mb-6 lg:rounded-[6px] lg:p-px">
                                <div className="[clip-path:polygon(100%_0px,_100%_0,_100%_0,_100%_calc(100%_-_24px),_calc(100%_-_0px)_100%,_0_100%,_0_24px,_24px_0px)] lg:[clip-path:polygon(100%_0px,_100%_0,_100%_0,_100%_calc(100%_-_40px),_calc(100%_-_32px)_100%,_0_100%,_0_40px,_32px_0px)] rounded-t-[5px] bg-black lg:rounded-[5px]">
                                  <div className="flex flex-col items-center px-6 pb-4 pt-4 lg:pt-6">
                                    <fieldset className="w-full">
                                      <div className="flex w-full items-center justify-between rounded-md border border-camo-400 bg-camo-600 px-4 py-2">
                                        <label
                                          className="typography-brand-body-l-caps text-camo-300"
                                          htmlFor="input-readonly-select-origin"
                                        >
                                          from
                                        </label>
                                        <div className="flex items-center gap-2">
                                          <img
                                            alt="$ETH Token"
                                            loading="lazy"
                                            width="24"
                                            height="24"
                                            decoding="async"
                                            data-nimg="1"
                                            style={{ color: "transparent" }}
                                            src={eth}
                                          />
                                          <select
                                            disabled={true}
                                            required={true}
                                            className="typography-brand-body-l h-full w-max appearance-none border-transparent bg-transparent text-camo-200 opacity-100"
                                            id="input-readonly-select-origin"
                                            tabIndex="-1"
                                          >
                                            <option
                                              label="Ethereum"
                                              value="ethereum"
                                              selected={true}
                                            ></option>
                                          </select>
                                        </div>
                                      </div>
                                      <div className="mt-4 flex w-full rounded-lg">
                                        <div className="flex-1">
                                          <input
                                            autoFocus={true}
                                            lang="en"
                                            type="text"
                                            className="typography-brand-heading-1 h-[60px] w-full rounded-bl-lg rounded-tl-lg border border-camo-400 bg-transparent px-4 text-center text-camo-100 placeholder-camo-700 transition-colors focus:text-white disabled:bg-camo-600 disabled:text-camo-300 md:h-20"
                                            placeholder="0.0"
                                            // value=""
                                          />
                                        </div>
                                        <div className="w-44 rounded-br-lg rounded-tr-lg border border-l-0 border-camo-400 transition-colors">
                                          <button
                                            aria-label="Select token"
                                            className="typography-brand-heading-3 interactive-text flex h-full w-full items-center justify-center text-yellow-300 transition-colors disabled:text-camo-300"
                                            type="button"
                                          >
                                            <div
                                              aria-hidden="true"
                                              className="mr-2"
                                            >
                                              <img
                                                alt="$ETH Token"
                                                loading="lazy"
                                                width="24"
                                                height="24"
                                                decoding="async"
                                                data-nimg="1"
                                                style={{ color: "transparent" }}
                                                src={eth}
                                              />
                                            </div>
                                            ETH
                                            <svg
                                              style={{
                                                height: "24px",
                                                width: "24px",
                                              }}
                                              viewBox="0 0 24 24"
                                              aria-hidden="true"
                                            >
                                              <use xlinkHref="/icons/library.svg#caret-down"></use>
                                            </svg>
                                          </button>
                                        </div>
                                      </div>
                                      <div className="mb-3 mt-2 flex items-center gap-2">
                                        <label
                                          className="typography-UI-body flex cursor-pointer items-center gap-2 text-camo-400"
                                          htmlFor="BridgeForm-button-balance-max"
                                        >
                                          Balance
                                          <div className="flex items-center gap-1 text-camo-200">
                                            0.00
                                            <img
                                              alt="$ETH Token"
                                              loading="lazy"
                                              width="16"
                                              height="16"
                                              decoding="async"
                                              data-nimg="1"
                                              style={{ color: "transparent" }}
                                              src={eth}
                                            />
                                          </div>
                                        </label>
                                        <button
                                          className="interactive-text typography-UI-body-bold uppercase text-yellow-300"
                                          id="BridgeForm-button-balance-max"
                                          type="button"
                                        >
                                          Max
                                        </button>
                                      </div>
                                      <div className="flex w-full items-center justify-between rounded-md border border-camo-400 bg-camo-600 px-4 py-2">
                                        <label
                                          className="typography-brand-body-l-caps text-camo-300"
                                          htmlFor="input-readonly-select-destination"
                                        >
                                          to
                                        </label>
                                        <div className="flex items-center gap-2">
                                          <img
                                            alt="$BLAST Token"
                                            loading="lazy"
                                            width="24"
                                            height="24"
                                            decoding="async"
                                            data-nimg="1"
                                            style={{ color: "transparent" }}
                                            src={blast}
                                          />
                                          <select
                                            disabled={true}
                                            required={true}
                                            className="typography-brand-body-l h-full w-max appearance-none border-transparent bg-transparent text-camo-200 opacity-100"
                                            id="input-readonly-select-destination"
                                            tabIndex="-1"
                                          >
                                            <option
                                              label="Blast"
                                              value="blast"
                                              selected={true}
                                            ></option>
                                          </select>
                                        </div>
                                      </div>
                                    </fieldset>
                                    <fieldset className="typography-brand-body w-full py-3 pb-3 text-center text-camo-400">
                                      <output>
                                        You will receive 0.00 ETH + Yield +
                                        Points
                                      </output>
                                    </fieldset>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="-ml-px -mt-[21px] lg:mt-0"
                                style={{ width: "calc(100% + 2px)" }}
                              >
                                <div className="p-[1px] transition-all bg-transparent">
                                  <div className="transition-[filter]">
                                    <button
                                      onClick={(e) => {
                                        setShowConnect(true);
                                        e.preventDefault();
                                      }}
                                      className="select-none disabled:cursor-not-allowed disabled:bg-camo-300 disabled:text-gray-800 typography-brand-body-l-caps sm:max-md:min-h-[36px] sm:max-md:py-1.5 min-h-[40px] px-6 py-2 transition-colors will-change-transform [transform:translateZ(0)] rounded-bl-md rounded-tr-md [clip-path:polygon(20px_0,100%_0,100%_50%,calc(100%-20px)_100%,0_100%,0_50%)] w-full bg-yellow-300 focus-visible:bg-white active:bg-white media-hover:hover:bg-white text-black"
                                    >
                                      <div className="">Connect Wallet</div>
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <div className="mt-3 flex flex-1 flex-row justify-center">
                                <aside className="typography-brand-body-l-caps text-camo-300">
                                  Or
                                  <a
                                    className="interactive-text text-yellow-300"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://app.across.to/bridge?inputToken=ETH&amp;to=81457&amp;from=1&amp;integrator=blast&amp;integrator_id=002b"
                                  >
                                    Deposit from other chains
                                  </a>
                                  <div className="typography-brand-body-l flex justify-center gap-2 normal-case text-camo-300">
                                    Powered by
                                    <span>
                                      <img
                                        alt="Across"
                                        loading="lazy"
                                        width="24"
                                        height="24"
                                        decoding="async"
                                        data-nimg="1"
                                        style={{ color: "transparent" }}
                                        src={across}
                                      />
                                    </span>
                                    Across
                                  </div>
                                </aside>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
            <div
              className={cn(
                "absolute bottom-0 left-0 right-0 transition-opacity duration-300"
              )}
            >
              <div className="w-full h-[2px] bg-camo-500"></div>
            </div>
          </div>
          {/* Frame corners and social media links */}
        </div>
      </div>
      {showConnect && (
        <div
          onClick={() => {
            setShowConnect(false);
          }}
          className="pointer-events-none fixed inset-0 z-50"
        >
          <div
            role="presentation"
            className="pointer-events-auto absolute inset-0 bg-black/90"
          ></div>
          <div
            data-focus-guard="true"
            tabIndex="0"
            style={{
              width: "1px",
              height: "0px",
              padding: "0px",
              overflow: "hidden",
              position: "fixed",
              top: "1px",
              left: "1px",
            }}
          ></div>
          <div data-focus-lock-disabled="false" className="pointer-events-auto">
            <div className="pointer-events-none absolute inset-0 z-50 flex items-center justify-center">
              <div
                className="rounded-[6px] p-[1px] bg-camo-400 pointer-events-auto"
                aria-modal="true"
                aria-label="Choose a Wallet to connect"
                role="dialog"
                style={{
                  clipPath:
                    "polygon(112.188px 24px, 136.188px 0px, 100% 0px, 100% calc(100% - 56px), calc(100% - 56px) 100%, 0px 100%, 0px 60px, 36px 24px)",
                }}
              >
                <div
                  className="relative h-max rounded-[5px] bg-camo-700 w-max px-6 xs:px-8 pb-14 pt-16"
                  style={{
                    clipPath:
                      "polygon(112.188px 24px, 136.188px 0px, 100% 0px, 100% calc(100% - 56px), calc(100% - 56px) 100%, 0px 100%, 0px 60px, 36px 24px)",
                  }}
                >
                  <div className="absolute right-0 top-0 px-6 xs:px-8 py-3">
                    <h2 className="typography-brand-body-l-caps text-yellow-100">
                      Connect Wallet
                    </h2>
                  </div>
                  <div className="flex w-max flex-col gap-6">
                    {connectors.map((connector) => (
                      <>
                        <div className="p-[1px] transition-all bg-transparent">
                          <div className="transition-[filter]">
                            <button
                              key={connector.uid}
                              onClick={() => connect({ connector })}
                              className="select-none disabled:cursor-not-allowed disabled:bg-camo-300 disabled:text-gray-800 typography-brand-body-l-caps sm:max-md:min-h-[36px] sm:max-md:py-1.5 min-h-[40px] px-6 py-2 transition-colors will-change-transform [transform:translateZ(0)] rounded-bl-md rounded-tr-md [clip-path:polygon(20px_0,100%_0,100%_50%,calc(100%-20px)_100%,0_100%,0_50%)] w-full bg-yellow-100 focus-visible:bg-white active:bg-white media-hover:hover:bg-white text-black"
                            >
                              <div className="typography-brand-body-bold uppercase [letter-spacing:1.3px]">
                                <div className="flex w-full items-center justify-start gap-3">
                                  <img
                                    alt="Metamask"
                                    loading="lazy"
                                    width="24"
                                    height="24"
                                    decoding="async"
                                    data-nimg="1"
                                    src={connector.icon}
                                    style={{ color: "transparent" }}
                                  />
                                  {connector.name}
                                </div>
                              </div>
                            </button>
                          </div>
                        </div>
                      </>
                    ))}

                    <div className="typography-brand-body mt-2 w-72 text-yellow-100">
                      By using Blast, you agree to our{" "}
                      <a
                        className="interactive-text text-yellow-300"
                        href="https://drive.google.com/file/d/1ukK4sFt4CIY2xPUF9E_WIwp5HzRSEPuT/view"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Terms of Service
                      </a>{" "}
                      and our{" "}
                      <a
                        className="interactive-text text-yellow-300"
                        href="https://drive.google.com/file/d/18mMV6pYRMpWKVQunHYUl14PNAwu1w2bQ/view"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Privacy Policy
                      </a>
                      .
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-focus-guard="true"
              tabIndex="0"
              style={{
                width: "1px",
                height: "0px",
                padding: "0px",
                overflow: "hidden",
                position: "fixed",
                top: "1px",
                left: "1px",
              }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bridge;
