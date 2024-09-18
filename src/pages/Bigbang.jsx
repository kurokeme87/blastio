import { Link } from "react-router-dom";
import video from "../assets/Blast Big Bang.webm";
import bang from "../assets/bang.png";
import bang_mobile from "../assets/logo-mobile.png";
import bang_header from "../assets/bang.svg";
import bang_heading from "../assets/bang-heading.png";
import blitz from "../assets/logo-blitz.png";
import blastr from "../assets/logo-blastr.png";
import juice from "../assets/logo-juice.png";
import wasabi from "../assets/logo-wasabi.png";
import thruster from "../assets/logo-thruster.png";
import yolo from "../assets/logo-yolo-games.png";
import cambria from "../assets/logo-cambria.png";
import captain from "../assets/logo-captain-company.png";
import fantasy from "../assets/logo-fantasy.png";
import ikb from "../assets/logo-ikb.png";
import globe from "../assets/globe-bg.png";
import register from "../assets/illustration-register.png";
import interview from "../assets/illustration-interview.png";
import win from "../assets/illustration-win.png";
import rocket from "../assets/illustration-rocket.png";
import planets from "../assets/illustration-planets.png";
import livestream from "../assets/illustration-livestream.png";
const Bigbang = () => {
  return (
    <div id="__next">
      <div className="__variable_d69ff7">
        <div className="ml-auto mr-auto w-full max-w-[1440px]">
          <div className="h-screen min-h-[810px] xs:h-auto">
            <header className="relative flex h-[810px] flex-col bg-[url('/images/big-bang-bg.png')] bg-cover bg-center bg-no-repeat px-6 md:bg-none md:px-0">
              <video
                autoPlay
                muted
                playsInline
                className="absolute inset-0 -z-10 hidden opacity-100 transition-opacity duration-[750ms] md:block"
                src={video}
              ></video>
              <video
                loop
                muted
                playsInline
                className="absolute inset-0 -z-20 hidden opacity-[0.85] md:block"
                src="/videos/big-bang-loop.webm"
              ></video>
              <nav className="flex py-2 items-center justify-between">
                <Link className="pt-2" to="/">
                  <img
                    alt='Blast "B" logo'
                    loading="lazy"
                    width="56"
                    height="56"
                    decoding="async"
                    style={{ color: "transparent" }}
                    src={bang_header}
                  />
                </Link>
                <div className="flex h-max items-center bg-black pt-2">
                  <div className="typography-brand-body-l-caps px-2 py-2 md:px-4">
                    <a
                      className="interactive-text text-camo-300"
                      href="https://docs.blast.io/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Dev docs
                    </a>
                  </div>
                  <div className="ml-1.5">
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
                  </div>
                </div>
              </nav>
              <div className="flex flex-col items-center space-y-5 pt-52 sm:pt-44">
                <img
                  alt="Blast logo"
                  width="336"
                  height="80"
                  decoding="async"
                  className="hidden xs:block"
                  style={{ color: "transparent" }}
                  src={bang}
                />
                <img
                  alt="Blast logo"
                  width="232"
                  height="56"
                  decoding="async"
                  className="block xs:hidden"
                  style={{ color: "transparent" }}
                  src={bang_mobile}
                />
                <h2 className="typography-brand-heading-2 uppercase tracking-widest text-yellow-300">
                  Mobile
                </h2>
                <h1>
                  <img
                    alt="Blast Big Bang competition"
                    width="668"
                    height="48"
                    decoding="async"
                    className="hidden h-auto  xs:block"
                    style={{ color: "transparent" }}
                    src={bang_heading}
                  />
                  <img
                    alt="Blast Big Bang competition"
                    width="375"
                    height="32"
                    decoding="async"
                    className="block h-auto w-auto xs:hidden"
                    style={{ color: "transparent" }}
                    src={bang_heading}
                  />
                </h1>
                <h3 className="typography-brand-heading-3 flex flex-col items-center font-normal text-yellow-300">
                  10 Week Bootcamp
                </h3>
              </div>
              <div className="flex flex-col items-center space-y-5 py-14 sm:py-12">
                <h4 className="typography-brand-heading-3 text-center text-xl font-normal text-camo-300 sm:text-2xl">
                  Start Date October 14, 2024
                  <div className="typography-brand-body-l sm:typography-brand-heading-4 pt-4 sm:font-normal">
                    Application deadline September 30, 2024
                  </div>
                </h4>
                <a
                  className="group min-w-80"
                  href="https://tally.so/r/wgLELN"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="transition-[filter]">
                    <button
                      tabIndex="-1"
                      className="select-none disabled:cursor-not-allowed disabled:bg-camo-300 disabled:text-gray-800 typography-brand-body-l-caps sm:max-md:min-h-[36px] sm:max-md:py-1.5 min-h-[40px] px-6 py-2 transition-colors will-change-transform [transform:translateZ(0)] rounded-bl-md rounded-tr-md [clip-path:polygon(20px_0,100%_0,100%_50%,calc(100%-20px)_100%,0_100%,0_50%)] w-full bg-yellow-300 group-focus-visible:bg-white group-active:bg-white media-hover:hover:bg-white text-black"
                    >
                      Apply Now For $250K
                    </button>
                  </div>
                </a>
              </div>
              <div className="flex animate-float justify-center transition-opacity duration-[250ms] xs:hidden md:flex lg:hidden opacity-100">
                <svg
                  fill="none"
                  height="48"
                  width="64"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="stroke-yellow-100"
                    d="m15 10.97 16.97 16.971 16.971-16.97"
                    strokeWidth="1.5"
                  ></path>
                </svg>
              </div>
            </header>
          </div>
          <div className="mt-0 flex justify-between px-6 sm:mt-8 md:px-0">
            <div className="relative flex h-8 items-center justify-center">
              <div
                className="absolute h-full w-[1px] bg-camo-400"
                style={{ minHeight: "1px" }}
              ></div>
              <div
                className="h-[1px] w-8 bg-camo-400"
                style={{ minWidth: "1px" }}
              ></div>
            </div>
            <div className="relative flex h-8 items-center justify-center">
              <div
                className="absolute h-full w-[1px] bg-camo-400"
                style={{ minHeight: "1px" }}
              ></div>
              <div
                className="h-[1px] w-8 bg-camo-400"
                style={{ minWidth: "1px" }}
              ></div>
            </div>
          </div>
          <section className="mb-14 mt-6 overflow-hidden sm:mb-32">
            <h1 className="typography-brand-heading-3-caps mb-10 ml-auto mr-auto max-w-6xl px-6 text-yellow-100 sm:mb-16 md:px-0">
              Big Bang Alumni
            </h1>
            <div className="relative flex h-28 justify-center">
              <div className="absolute top-0 h-full w-full sm:w-[calc(100vw+80px+80px)]">
                <div className="relative flex h-full w-full select-none gap-20 overflow-hidden">
                  <div className="animate-scroll-80 flex h-full min-w-full flex-shrink-0 justify-around gap-20">
                    {[
                      { name: "Thruster", logo: thruster },
                      { name: "Wasabi", logo: wasabi },
                      { name: "Juice", logo: juice },
                      { name: "Yolo Games", logo: yolo },
                      { name: "Cambria", logo: cambria },
                      { name: "Fantasy", logo: fantasy },
                      { name: "Blastr", logo: blastr },
                      {
                        name: "Captain & Company",
                        logo: captain,
                      },
                      { name: "IKB", logo: ikb },
                      { name: "Blitz", logo: blitz },
                    ].map((company, index) => (
                      <figure
                        key={index}
                        className="flex h-full w-full flex-col items-center justify-center gap-2"
                      >
                        <img
                          alt={company.name}
                          width="80"
                          height="80"
                          decoding="async"
                          className="overflow-hidden rounded-xl"
                          style={{ color: "transparent" }}
                          src={company.logo}
                        />
                        <figcaption className="typography-brand-body-l w-max text-yellow-100">
                          {company.name}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                  <div className="animate-scroll-80 flex h-full min-w-full flex-shrink-0 justify-around gap-20">
                    {[
                      { name: "Thruster", logo: thruster },
                      { name: "Wasabi", logo: wasabi },
                      { name: "Juice", logo: juice },
                      { name: "Yolo Games", logo: yolo },
                      { name: "Cambria", logo: cambria },
                      { name: "Fantasy", logo: fantasy },
                      { name: "Blastr", logo: blastr },
                      {
                        name: "Captain & Company",
                        logo: captain,
                      },
                      { name: "IKB", logo: ikb },
                      { name: "Blitz", logo: blitz },
                    ].map((company, index) => (
                      <figure
                        key={index}
                        className="flex h-full w-full flex-col items-center justify-center gap-2"
                      >
                        <img
                          alt={company.name}
                          width="80"
                          height="80"
                          decoding="async"
                          className="overflow-hidden rounded-xl"
                          style={{ color: "transparent" }}
                          src={company.logo}
                        />
                        <figcaption className="typography-brand-body-l w-max text-yellow-100">
                          {company.name}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
          <main className="ml-auto mr-auto max-w-6xl overflow-x-hidden px-6 pb-32 md:px-0">
            <section>
              <h1 className="typography-brand-heading-2 mb-10 max-w-prose text-yellow-100 xs:mb-16">
                Everything you need to launch and grow your mobile Dapp
              </h1>
              <div className="flex w-full grid-flow-col flex-col gap-6 xs:grid xs:grid-cols-2 xs:grid-rows-2 sm:gap-12">
                {[
                  {
                    number: 1,
                    text: "$250K funding immediately upon admission into the cohort",
                  },
                  {
                    number: 2,
                    text: "1 million Blast Gold per team and inclusion in a Multiplier upon launch on Blast mainnet",
                  },
                  {
                    number: 3,
                    text: "1:1 office hours with Pacman, as well as support from the Blast Foundation",
                  },
                  {
                    number: 4,
                    text: "Access to top crypto investors and angels",
                  },
                ].map((item) => (
                  <div className="flex gap-6" key={item.number}>
                    <div className="typography-brand-heading-3 flex h-12 w-12 items-center justify-center rounded-full border border-camo-400 text-[24px] text-yellow-300">
                      {item.number}
                    </div>
                    <div className="typography-brand-heading-3 max-w-prose flex-1 text-camo-200">
                      {item.text}
                    </div>
                  </div>
                ))}
              </div>
            </section>
            <div className="mb-14 mt-14 w-full text-camo-500 sm:mb-32 sm:mt-32">
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
            <section>
              <div className="relative flex h-max w-full justify-center">
                <div
                  className="absolute -top-16 -z-10 sm:-top-32"
                  style={{ height: "654.5px", width: "1440px" }}
                >
                  <img
                    alt=""
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="pt-8 sm:pt-16"
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      left: "0",
                      top: "0",
                      right: "0",
                      bottom: "0",
                      color: "transparent",
                    }}
                    sizes="100vw"
                    src={globe}
                  />
                </div>
              </div>
              <h1 className="typography-brand-heading-2 mb-10 max-w-prose text-yellow-100 xs:mb-16">
                We`&apos;`ll work 1:1 with each team on:
              </h1>
              <div className="hidden xs:block">
                <table className="my-12 w-full border-hidden text-center">
                  <thead>
                    <tr>
                      <td className="typography-brand-heading-4 w-1/2 border border-camo-300 uppercase text-camo-300 p-0"></td>
                      <td className="typography-brand-heading-4 w-1/2 border border-camo-300 uppercase text-camo-300 p-0"></td>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        title: "Retention",
                        description:
                          "What is it, why is it important, how do you measure it, and how do you use it",
                      },
                      {
                        title: "Getting your first users",
                        description:
                          "How to design and launch a waitlist program so you have users pre-launch",
                      },
                      {
                        title: "Launch GTM",
                        description: "How to design viral launch campaigns",
                      },
                      {
                        title: "Incentives",
                        description:
                          "When to use incentives and how to use them effectively for your specific product",
                      },
                      {
                        title: "Fundraising",
                        description:
                          "We`&apos;`ll work on specific pitch, how to fundraise, when to fundraise, and who to fundraise from (along with common mistakes founders make when fundraising that hurt them later on)",
                      },
                      {
                        title: "Security",
                        description:
                          "Opsec 101 for crypto projects, along with how to prepare for and make the most of security audits, along with who to get audits from",
                      },
                      {
                        title: "Legal",
                        description:
                          "Common legal mistakes founders make, which legal counsel to work with, how best to work with legal counsel",
                      },
                    ].map((item) => (
                      <tr key={item.title}>
                        <td className="typography-brand-heading-3 max-w-prose border border-camo-300 p-6 text-camo-200">
                          {item.title}
                          <div className="block xs:hidden"></div>
                        </td>
                        <td className="typography-brand-body-l max-w-prose border border-camo-300 p-6 text-left text-camo-200">
                          {item.description}
                          <span className="hidden xs:inline-block"></span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="block xs:hidden">
                <div className="space-y-6">
                  {[
                    {
                      title: "Retention",
                      description:
                        "What is it, why is it important, how do you measure it, and how do you use it",
                    },
                    {
                      title: "Getting your first users",
                      description:
                        "How to design and launch a waitlist program so you have users pre-launch",
                    },
                    {
                      title: "Launch GTM",
                      description: "How to design viral launch campaigns",
                    },
                    {
                      title: "Incentives",
                      description:
                        "When to use incentives and how to use them effectively for your specific product",
                    },
                    {
                      title: "Fundraising",
                      description:
                        "We`&apos;`ll work on specific pitch, how to fundraise, when to fundraise, and who to fundraise from (along with common mistakes founders make when fundraising that hurt them later on)",
                    },
                    {
                      title: "Security",
                      description:
                        "Opsec 101 for crypto projects, along with how to prepare for and make the most of security audits, along with who to get audits from",
                    },
                    {
                      title: "Legal",
                      description:
                        "Common legal mistakes founders make, which legal counsel to work with, how best to work with legal counsel",
                    },
                  ].map((item) => (
                    <div className="space-y-1" key={item.title}>
                      <h3 className="typography-brand-heading-3 text-camo-200">
                        {item.title}
                      </h3>
                      <p className="typography-brand-body-l text-camo-300">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            <div className="mb-14 mt-14 w-full text-camo-500 sm:mb-32 sm:mt-32">
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
            <section className="space-y-6">
              <h1 className="typography-brand-heading-2 mb-10 max-w-prose text-yellow-100 xs:mb-16">
                How it works
              </h1>
              <div className="mt-8 space-y-16 sm:grid sm:grid-cols-3 sm:grid-rows-2 sm:gap-16 sm:space-y-0">
                <figure className="flex flex-col items-center gap-4">
                  <img
                    alt="Illustration for Apply"
                    loading="lazy"
                    width="200"
                    height="120"
                    decoding="async"
                    data-nimg="1"
                    className="ml-auto mr-auto sm:ml-0 sm:mr-0"
                    style={{ color: "transparent" }}
                    src={register}
                  />
                  <div className="flex flex-row-reverse items-center gap-4 sm:flex-col">
                    <h3 className="typography-brand-heading-3-caps text-camo-200">
                      Apply
                    </h3>
                    <div className="typography-brand-heading-3 flex h-12 w-12 items-center justify-center rounded-full border border-camo-400 text-yellow-300">
                      1
                    </div>
                  </div>
                  <figcaption className="typography-brand-heading-4 max-w-prose text-center font-normal text-yellow-100">
                    <a
                      className="interactive-text text-yellow-300"
                      href="https://tally.so/r/wgLELN"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Apply
                    </a>{" "}
                    by September 30, 2024
                  </figcaption>
                </figure>
                <figure className="flex flex-col items-center gap-4">
                  <img
                    alt="Illustration for Interview"
                    loading="lazy"
                    width="200"
                    height="120"
                    decoding="async"
                    data-nimg="1"
                    className="ml-auto mr-auto sm:ml-0 sm:mr-0"
                    style={{ color: "transparent" }}
                    src={interview}
                  />
                  <div className="flex flex-row-reverse items-center gap-4 sm:flex-col">
                    <h3 className="typography-brand-heading-3-caps text-camo-200">
                      Interview
                    </h3>
                    <div className="typography-brand-heading-3 flex h-12 w-12 items-center justify-center rounded-full border border-camo-400 text-yellow-300">
                      2
                    </div>
                  </div>
                  <figcaption className="typography-brand-heading-4 max-w-prose text-center font-normal text-yellow-100">
                    Admission interviews occur on a rolling basis
                  </figcaption>
                </figure>
                <figure className="flex flex-col items-center gap-4">
                  <img
                    alt="Illustration for Results"
                    loading="lazy"
                    width="200"
                    height="120"
                    decoding="async"
                    data-nimg="1"
                    className="ml-auto mr-auto sm:ml-0 sm:mr-0"
                    style={{ color: "transparent" }}
                    src={win}
                  />
                  <div className="flex flex-row-reverse items-center gap-4 sm:flex-col">
                    <h3 className="typography-brand-heading-3-caps text-camo-200">
                      Results
                    </h3>
                    <div className="typography-brand-heading-3 flex h-12 w-12 items-center justify-center rounded-full border border-camo-400 text-yellow-300">
                      3
                    </div>
                  </div>
                  <figcaption className="typography-brand-heading-4 max-w-prose text-center font-normal text-yellow-100">
                    Accepted teams announced October 11, 2024
                  </figcaption>
                </figure>
                <figure className="flex flex-col items-center gap-4">
                  <img
                    alt="Illustration for Kick-Off"
                    loading="lazy"
                    width="200"
                    height="120"
                    decoding="async"
                    data-nimg="1"
                    className="ml-auto mr-auto sm:ml-0 sm:mr-0"
                    style={{ color: "transparent" }}
                    src={rocket}
                  />
                  <div className="flex flex-row-reverse items-center gap-4 sm:flex-col">
                    <h3 className="typography-brand-heading-3-caps text-camo-200">
                      Kick-Off
                    </h3>
                    <div className="typography-brand-heading-3 flex h-12 w-12 items-center justify-center rounded-full border border-camo-400 text-yellow-300">
                      4
                    </div>
                  </div>
                  <figcaption className="typography-brand-heading-4 max-w-prose text-center font-normal text-yellow-100">
                    Program Kick Off with 1-week onboarding October 14, 2024
                  </figcaption>
                </figure>
                <figure className="flex flex-col items-center gap-4">
                  <img
                    alt="Illustration for Bootcamp"
                    loading="lazy"
                    width="200"
                    height="120"
                    decoding="async"
                    data-nimg="1"
                    className="ml-auto mr-auto sm:ml-0 sm:mr-0"
                    style={{ color: "transparent" }}
                    src={planets}
                  />
                  <div className="flex flex-row-reverse items-center gap-4 sm:flex-col">
                    <h3 className="typography-brand-heading-3-caps text-camo-200">
                      Bootcamp
                    </h3>
                    <div className="typography-brand-heading-3 flex h-12 w-12 items-center justify-center rounded-full border border-camo-400 text-yellow-300">
                      5
                    </div>
                  </div>
                  <figcaption className="typography-brand-heading-4 max-w-prose text-center font-normal text-yellow-100">
                    Work with our team across 10 weeks to build the next
                    breakout dapp (October 14, 2024 - December 20, 2024)
                  </figcaption>
                </figure>
                <figure className="flex flex-col items-center gap-4">
                  <img
                    alt="Illustration for Launch"
                    loading="lazy"
                    width="200"
                    height="120"
                    decoding="async"
                    data-nimg="1"
                    className="ml-auto mr-auto sm:ml-0 sm:mr-0"
                    style={{ color: "transparent" }}
                    src={livestream}
                  />
                  <div className="flex flex-row-reverse items-center gap-4 sm:flex-col">
                    <h3 className="typography-brand-heading-3-caps text-camo-200">
                      Launch
                    </h3>
                    <div className="typography-brand-heading-3 flex h-12 w-12 items-center justify-center rounded-full border border-camo-400 text-yellow-300">
                      6
                    </div>
                  </div>
                  <figcaption className="typography-brand-heading-4 max-w-prose text-center font-normal text-yellow-100">
                    Upon launch on Blast mainnet you’ll receive 1 million Blast
                    Gold, co-marketing and be included in a Multiplier
                  </figcaption>
                </figure>
              </div>
            </section>
            <div className="mb-14 mt-14 w-full text-camo-500 sm:mb-32 sm:mt-32">
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
            <section>
              <h1 className="typography-brand-heading-2 mb-10 max-w-prose text-yellow-100 xs:mb-16">
                FAQs
              </h1>
              <dl className="flex flex-col gap-6">
                {[
                  {
                    question: "Who can apply?",
                    answer:
                      "Any project that wants to build on Blast or is built on Blast already. The Big Bang is likely most valuable to projects in the early stages of their lifecycles, but we are open to working with later stage teams as well. Projects that are already live on Blast and participated in the previous Big Bang can apply as well, however teams at an earlier stage with novel products and use cases will be prioritized.",
                  },
                  {
                    question: "What can I build?",
                    answer:
                      "There are no restrictions on what you can build. Whether you are building a DeFi or Consumer Dapp, an NFT Collection or a Community Coin or something else entirely the Big Bang is the best place to start building mobile first projects on Blast.",
                  },
                  {
                    question: "How does the funding work?",
                    answer:
                      "$250k in funding through two investment tracks: Standard Deal: For companies that haven`&apos;`t raised before, we invest at a $15M post-money valuation. Later Stage: For companies who have raised or are currently raising, we`&apos;`ll typically follow the same terms as last round or current fundraising terms. Once you`&apos;`re accepted into the program, we immediately start the investment process. This typically takes 1 to 2 weeks.",
                  },
                  {
                    question: "Is this in person or remote?",
                    answer:
                      "The bootcamp is fully remote, however, there might be optional in-person networking events.",
                  },
                  {
                    question: "Is this only for Blast projects?",
                    answer:
                      "Projects from any chain can apply but this program is for teams looking to fully focus on building Blast native projects.",
                  },
                ].map((item) => (
                  <div
                    className="flex flex-col gap-4 rounded-xl bg-camo-700 p-8 xs:flex-row xs:gap-16 xs:px-14"
                    key={item.question}
                  >
                    <dt className="typography-brand-heading-3 w-full text-yellow-100 xs:w-1/4">
                      {item.question}
                    </dt>
                    <dd className="typography-brand-body-l max-w-prose flex-1 text-camo-200">
                      {item.answer}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
            <div className="mb-14 mt-14 w-full text-camo-500 sm:mb-32 sm:mt-32">
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
                <div className="w-full bg-none px-0 pb-0 pt-0 sm:bg-camo-700 sm:px-8 sm:pb-10 sm:pt-6">
                  <article className="flex flex-col items-center sm:pb-6">
                    <h1 className="typography-brand-heading-2 max-w-prose text-center text-yellow-100">
                      Ready to launch the next big mobile Dapp?
                    </h1>
                    <h2 className="typography-brand-body-l mb-8 mt-4 text-camo-300">
                      Application deadline September 30, 2024
                    </h2>
                    <div className="relative ml-auto mr-auto flex w-full min-w-max max-w-md flex-col justify-center gap-6 sm:flex-row">
                      <div className="min-w-80">
                        <a
                          className="group ml-auto mr-auto block w-full max-w-md"
                          href="https://tally.so/r/wgLELN"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="transition-[filter]">
                            <button
                              tabIndex="-1"
                              className="select-none disabled:cursor-not-allowed disabled:bg-camo-300 disabled:text-gray-800 typography-brand-body-l-caps sm:max-md:min-h-[36px] sm:max-md:py-1.5 min-h-[40px] px-6 py-2 transition-colors will-change-transform [transform:translateZ(0)] rounded-bl-md rounded-tr-md [clip-path:polygon(20px_0,100%_0,100%_50%,calc(100%-20px)_100%,0_100%,0_50%)] w-full bg-yellow-300 group-focus-visible:bg-white group-active:bg-white media-hover:hover:bg-white text-black"
                            >
                              Apply Now For $250K
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
          </main>
        </div>
      </div>
    </div>
  );
};

export default Bigbang;
