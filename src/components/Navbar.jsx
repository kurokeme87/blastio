import { Link, useLocation } from "react-router-dom";
// import "./Bridge.css";
import logo from "../assets/logo.png";
import { useState, useEffect } from "react";
import logo_mobile from "../assets/logo-mobile.png";
import {
  useConnect,
  useAccount,
  useDisconnect,
  useEnsAvatar,
  useEnsName,
  useSwitchChain,
  useBalance,
} from "wagmi";

import { GlobeIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "../lib/utils";

const Navbar = () => {
  const { connectors, connect } = useConnect();
  const { chains, switchChain } = useSwitchChain();
  const [showMobileNav, setShowMobileNav] = useState();
  console.log(chains);
  const blast = chains.filter((chain) => {
    return chain.name === "Blast";
  });

  console.log(blast);
  console.log(connectors);

  const { address } = useAccount();
  const { disconnect } = useDisconnect();
  const { data: ensName } = useEnsName({ address });
  const { data: ensAvatar } = useEnsAvatar({
    name: ensName || undefined || address,
  });
  const balance = useBalance({
    address: address,
  });

  console.log(ensAvatar, balance.data);

  const location = useLocation();
  const isBridge = location.pathname === "/bridge";

  return (
    <header className="relative z-[11] flex h-max justify-between  px-6 pb-3 pt-9 md:ml-16 md:mr-14 md:pl-14 md:pr-0 md:pt-10 lg:pt-14 border-b border-camo-400">
      <div className="flex  w-full items-center justify-between gap-2.5 md:gap-5">
        <div className="flex items-center w-full xs:w-auto justify-between sm:justify-start">
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
              src={logo_mobile}
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
              <a className="interactive-text text-camo-300" href="airdrop">
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
              <Link className="interactive-text text-camo-300" to="devs">
                Devs
              </Link>
            </div>
            <div className="typography-brand-body-l-caps px-2 py-2 md:px-4">
              <Link className="interactive-text text-yellow-100" to="/bridge">
                Bridge
              </Link>
            </div>
            <div className="typography-brand-body-l-caps px-2 py-2 md:px-4">
              <Link className="interactive-text shiny-text" to="/bigbang">
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
        <div
          className={cn(
            "block  transition-transform duration-500 xs:hidden",
            showMobileNav ? "rotate-90" : "rotate-0"
          )}
        >
          <button
            onClick={() => {
              setShowMobileNav(!showMobileNav);
            }}
            aria-label="Open Navigation menu"
            className="text-yellow-300 uppercase interactive-text flex items-center gap-1 disabled:cursor-not-allowed"
          >
            <HamburgerMenuIcon className=" h-6 w-6" />
          </button>
        </div>
        {isBridge && (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="hidden min-w-0 gap-2  items-center xl:flex md:gap-4">
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
        )}
        {showMobileNav && (
          <div className="absolute inset-0 z-[-1] h-screen pb-6 pt-20 backdrop-blur-[12px] backdrop-brightness-50">
            <div className="w-full h-[2px] translate-y-[-2px] bg-camo-500"></div>
            <div className="h-full overflow-auto">
              <div className="flex h-max flex-col divide-y divide-camo-500 border-b border-camo-500">
                <a
                  href="https://blog.blast.io/vision"
                  className="typography-brand-body-l-bold interactive-text flex w-full gap-4 p-6 uppercase tracking-[1.2px] text-camo-300"
                >
                  Vision
                </a>
                <a
                  href="https://blog.blast.io/vision"
                  className="typography-brand-body-l-bold interactive-text flex w-full gap-4 p-6 uppercase tracking-[1.2px] text-camo-300 pl-12"
                >
                  Vision
                </a>
                <a
                  href="https://assets.blast.io/q2-2024.pdf"
                  className="typography-brand-body-l-bold interactive-text flex w-full gap-4 p-6 uppercase tracking-[1.2px] text-camo-300 pl-12"
                >
                  Q2 2024 Report
                </a>
                <Link
                  className="typography-brand-body-l-bold interactive-text flex w-full gap-4 p-6 uppercase tracking-[1.2px] text-camo-300"
                  to="/airdrop"
                >
                  Airdrop
                </Link>
                <Link
                  className="typography-brand-body-l-bold interactive-text flex w-full gap-4 p-6 uppercase tracking-[1.2px] text-camo-300"
                  to="/leaderboard"
                >
                  Leaderboard
                </Link>
                <Link
                  className="typography-brand-body-l-bold interactive-text flex w-full gap-4 p-6 uppercase tracking-[1.2px] text-camo-300"
                  to="/devs"
                >
                  Devs
                </Link>
                <a
                  href="https://docs.blast.io/about-blast#why-a-new-l2"
                  className="typography-brand-body-l-bold interactive-text flex w-full gap-4 p-6 uppercase tracking-[1.2px] text-camo-300 pl-12"
                >
                  Why Blast
                </a>
                <a
                  href="https://docs.blast.io/"
                  className="typography-brand-body-l-bold interactive-text flex w-full gap-4 p-6 uppercase tracking-[1.2px] text-camo-300 pl-12"
                >
                  Documentation
                </a>
                <a
                  href="https://docs.blast.io/airdrop/developers"
                  className="typography-brand-body-l-bold interactive-text flex w-full gap-4 p-6 uppercase tracking-[1.2px] text-camo-300 pl-12"
                >
                  Developer Airdrop
                </a>
                <a
                  href="https://docs.blast.io/airdrop/api"
                  className="typography-brand-body-l-bold interactive-text flex w-full gap-4 p-6 uppercase tracking-[1.2px] text-camo-300 pl-12"
                >
                  Points API
                </a>
                <a
                  href="https://discord.com/invite/blastdevelopers"
                  className="typography-brand-body-l-bold interactive-text flex w-full gap-4 p-6 uppercase tracking-[1.2px] text-camo-300 pl-12"
                >
                  Developer Discord
                </a>
                <Link
                  className="typography-brand-body-l-bold interactive-text flex w-full gap-4 p-6 uppercase tracking-[1.2px] text-yellow-100"
                  to="/bridge"
                >
                  Bridge
                </Link>
                <Link
                  className="typography-brand-body-l-bold interactive-text flex w-full gap-4 p-6 uppercase tracking-[1.2px] text-camo-300"
                  href="/bigbang"
                >
                  Big Bang
                </Link>
                <Link
                  to="/"
                  className="typography-brand-body-l-bold interactive-text flex w-full gap-4 p-6 uppercase tracking-[1.2px] text-camo-300"
                >
                  <svg
                    viewBox="0 0 24 24"
                    style={{ height: "24px", width: "24px" }}
                  >
                    <use xlinkHref="/icons/library.svg#globe"></use>
                  </svg>
                  English
                </Link>
                <a
                  href="https://twitter.com/Blast"
                  className="typography-brand-body-l-bold interactive-text flex w-full gap-4 p-6 uppercase tracking-[1.2px] text-camo-300"
                >
                  <svg
                    viewBox="0 0 24 24"
                    style={{ height: "24px", width: "24px" }}
                  >
                    <use xlinkHref="/icons/library.svg#twitter-filled"></use>
                  </svg>
                  Twitter
                </a>
                <a
                  href="https://discord.gg/blast-l2"
                  className="typography-brand-body-l-bold interactive-text flex w-full gap-4 p-6 uppercase tracking-[1.2px] text-camo-300"
                >
                  <svg
                    viewBox="0 0 24 24"
                    style={{ height: "24px", width: "24px" }}
                  >
                    <use xlinkHref="/icons/library.svg#discord"></use>
                  </svg>
                  Discord
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* <div
          aria-hidden="true"
          className="absolute z-20 h-[1px] bg-yellow-100"
          style={{ bottom: "-1px", left: "578px", width: "88px" }}
        ></div> */}
    </header>
  );
};

export default Navbar;
