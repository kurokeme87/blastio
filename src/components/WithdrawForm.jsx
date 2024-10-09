import React from "react";
import blast_icon from "../assets/blast-color.svg";
import eth from "../assets/eth-color.svg";
import across from "../assets/across-color.svg";
const WithdrawForm = () => {
  return (
    <form className="h-full  p-0 m-0 overflow-y-auto pb-4">
      <div className="mb-3 mt-4 lg:mb-6 lg:mt-6">
        <fieldset className="w-full border-t border-t-camo-400 [@media(max-height:720px)]:border-none">
          <legend className="typography-brand-body-bold m-auto block px-2 uppercase text-camo-200 [@media(max-height:720px)]:hidden">
            You Can Withdraw
          </legend>
        </fieldset>
      </div>
      <div className="mb-4 lg:mb-6">
        <div className="[clip-path:polygon(100%_0px,_100%_0,_100%_0,_100%_calc(100%_-_24px),_calc(100%_-_24px)_100%,_0_100%,_0_24px,_24px_0px)] lg:[clip-path:polygon(100%_0px,_100%_0,_100%_0,_100%_calc(100%_-_40px),_calc(100%_-_32px)_100%,_0_100%,_0_40px,_32px_0px)] rounded-[6px] bg-camo-400 p-[1px]">
          <div className="[clip-path:polygon(100%_0px,_100%_0,_100%_0,_100%_calc(100%_-_24px),_calc(100%_-_24px)_100%,_0_100%,_0_24px,_24px_0px)] lg:[clip-path:polygon(100%_0px,_100%_0,_100%_0,_100%_calc(100%_-_40px),_calc(100%_-_32px)_100%,_0_100%,_0_40px,_32px_0px)] rounded-[5px] bg-black">
            <div
              className="relative flex flex-col items-center px-6 py-4 lg:py-6"
              style={{ paddingBottom: "55.4062px" }}
            >
              <fieldset className="w-full">
                <div className="flex gap-2">
                  <div className="flex w-full items-center justify-between rounded-md border border-camo-400 bg-camo-600 px-2 py-2">
                    <label
                      className="typography-brand-body-bold pt-px uppercase text-camo-300"
                      htmlFor="input-readonly-select-origin"
                    >
                      from
                    </label>
                    <div className="flex items-center gap-2">
                      <select
                        disabled
                        required
                        className="typography-brand-body-l h-full w-max appearance-none border-transparent bg-transparent text-camo-200 opacity-100"
                        id="input-readonly-select-origin"
                        tabIndex="-1"
                      >
                        <option label="Blast" value="blast"></option>
                      </select>
                      <img
                        alt="$BLAST Token"
                        loading="lazy"
                        width="24"
                        height="24"
                        decoding="async"
                        data-nimg="1"
                        src={blast_icon}
                        style={{ color: "transparent" }}
                      />
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-between rounded-md border border-camo-400 bg-camo-600 px-2 py-2">
                    <label
                      className="typography-brand-body-bold pt-px uppercase text-camo-300"
                      htmlFor="input-readonly-select-destination"
                    >
                      to
                    </label>
                    <div className="flex items-center gap-2">
                      <select
                        disabled
                        required
                        className="typography-brand-body-l h-full w-max appearance-none border-transparent bg-transparent text-camo-200 opacity-100"
                        id="input-readonly-select-destination"
                        tabIndex="-1"
                      >
                        <option label="Ethereum" value="ethereum"></option>
                      </select>
                      <img
                        alt="$ETH Token"
                        loading="lazy"
                        width="24"
                        height="24"
                        decoding="async"
                        data-nimg="1"
                        src={eth}
                        style={{ color: "transparent" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex w-full rounded-lg">
                  <div className="flex-1">
                    <input
                      lang="en"
                      type="text"
                      className="typography-brand-heading-1 h-[60px] w-full rounded-bl-lg rounded-tl-lg border border-camo-400 bg-transparent px-4 text-center text-camo-100 placeholder-camo-700 transition-colors focus:text-white disabled:bg-camo-600 disabled:text-camo-300 lg:h-[80px]"
                      placeholder="0.0"
                      value=""
                      style={{ fontSize: "39px" }}
                    />
                  </div>
                  <div className="w-44 rounded-br-lg rounded-tr-lg border border-l-0 border-camo-400 transition-colors">
                    <button
                      aria-label="Select token"
                      className="typography-brand-heading-3 interactive-text flex h-full w-full items-center justify-center text-yellow-300 transition-colors disabled:text-camo-300"
                      type="button"
                    >
                      <div aria-hidden="true" className="mr-2">
                        <img
                          alt="$ETH Token"
                          loading="lazy"
                          width="24"
                          height="24"
                          decoding="async"
                          data-nimg="1"
                          src={eth}
                          style={{ color: "transparent" }}
                        />
                      </div>
                      ETH
                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        style={{ height: "24px", width: "24px" }}
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
                        src={eth}
                        style={{ color: "transparent" }}
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
              </fieldset>
              <fieldset className="absolute bottom-0 h-max w-full rounded-b-md border-t border-t-camo-400 bg-camo-600">
                <output className="typography-brand-body flex w-full items-center justify-center py-2 text-camo-300">
                  <div className="text-center">
                    You will receive 0.00 ETH.{" "}
                    <span className="text-mars-300">No rewards or yield.</span>
                    <div>7 Day Withdrawal Period</div>
                  </div>
                </output>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4" style={{ width: "calc(100% + 2px)" }}>
        <div className="p-[1px] transition-all bg-transparent">
          <div className="transition-[filter]">
            <button
              type="submit"
              className="select-none disabled:cursor-not-allowed disabled:bg-camo-300 disabled:text-gray-800 typography-brand-body-l-caps sm:max-md:min-h-[36px] sm:max-md:py-1.5 min-h-[40px] px-6 py-2 transition-colors will-change-transform [transform:translateZ(0)] rounded-bl-md rounded-tr-md [clip-path:polygon(20px_0,100%_0,100%_50%,calc(100%-20px)_100%,0_100%,0_50%)] w-full bg-yellow-300 focus-visible:bg-white active:bg-white media-hover:hover:bg-white text-black"
            >
              <div className="">Connect Wallet</div>
            </button>
          </div>
        </div>
      </div>
      <div className="mt-3 flex flex-1 flex-row justify-center">
        <aside className="typography-brand-body font-semibold uppercase tracking-widest text-camo-300">
          Or{" "}
          <a
            className="interactive-text text-yellow-300"
            target="_blank"
            href="https://app.across.to/bridge?inputToken=ETH&amp;to=1&amp;from=81457&amp;integrator=blast&amp;integrator_id=002b"
          >
            Withdraw instantly
          </a>
          <div className="typography-brand-body flex justify-center gap-2 normal-case leading-relaxed text-camo-300">
            Powered by{" "}
            <span>
              <img
                alt="Across"
                loading="lazy"
                width="24"
                height="24"
                decoding="async"
                data-nimg="1"
                src={across}
                style={{ color: "transparent" }}
              />
            </span>{" "}
            Across
          </div>
        </aside>
      </div>
    </form>
  );
};

export default WithdrawForm;
