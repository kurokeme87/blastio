import React from "react";
import { useAccount, useReadContract } from "wagmi";
import { erc20Abi } from "viem";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import eth from "../assets/eth-color.svg";
const addresses = [
  "0xaddress1",
  "0xaddress2",
  // Add other token contract addresses here
];

const FetchTokens = () => {
  const { address } = useAccount();
  const addresses = [address];
  return (
    <div>
      <h3>Token Balances</h3>
      {addresses.map((address) => (
        <TokenBalance key={address} address={address} walletAddress={address} />
      ))}
    </div>
  );
};

// Separate component to fetch balance for each token
const TokenBalance = () => {
  const { address } = useAccount();

  const {
    data: balance,
    isLoading,
    isError,
  } = useReadContract({
    address: address,
    abi: erc20Abi,
    functionName: "balanceOf",
    args: [address],
  });

  return (
    <Dialog>
      <DialogTrigger>
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
      </DialogTrigger>
      <DialogContent>
        {/* {isLoading && <div>Loading balance for {address}...</div>}
        {isError && <div>Error fetching balance for {address}</div>}
        Token: {address} - Balance: {balance ? balance.toString() : "0"} */}
        <div
          className="rounded-[6px] p-[1px] bg-camo-400 pointer-events-auto"
          aria-modal="true"
          aria-label="Select token"
          role="dialog"
          style={{
            clipPath:
              "polygon(101.5px 24px, 125.5px 0px, 100% 0px, 100% calc(100% - 56px), calc(100% - 56px) 100%, 0px 100%, 0px 60px, 36px 24px)",
          }}
        >
          <div
            className="relative h-max rounded-[5px] bg-camo-700 w-max px-6 xs:px-8 pb-14 pt-16"
            style={{
              clipPath:
                "polygon(101.5px 24px, 125.5px 0px, 100% 0px, 100% calc(100% - 56px), calc(100% - 56px) 100%, 0px 100%, 0px 60px, 36px 24px)",
            }}
          >
            <div className="absolute right-0 top-0 px-6 xs:px-8 py-3">
              <h2 className="typography-brand-body-l-caps text-yellow-100">
                Select Token
              </h2>
            </div>
            <div className="absolute left-0 w-full bottom-5 pl-6 pr-[56px]">
              <div className="w-full overflow-hidden">
                <div className="text-camo-500">
                  <svg
                    fill="none"
                    height="9"
                    viewBox="0 0 250 9"
                    width="250"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Group 17">
                      <rect
                        fill="currentColor"
                        height="7"
                        id="Rectangle 7"
                        width="74"
                        y="0.75"
                      ></rect>
                      <circle
                        cx="97.6632"
                        cy="4.41323"
                        fill="currentColor"
                        id="Ellipse 44"
                        r="1.46011"
                      ></circle>
                      <circle
                        cx="107.398"
                        cy="4.41323"
                        fill="currentColor"
                        id="Ellipse 45"
                        r="1.46011"
                      ></circle>
                      <rect
                        fill="currentColor"
                        height="7"
                        id="Rectangle 15"
                        width="26"
                        x="224"
                        y="1.24805"
                      ></rect>
                      <rect
                        fill="currentColor"
                        height="6.48937"
                        id="Rectangle 8"
                        width="3.08245"
                        x="89"
                        y="1.00586"
                      ></rect>
                      <rect
                        fill="currentColor"
                        height="6.48937"
                        id="Rectangle 16"
                        width="3.08245"
                        x="76.9883"
                        y="1.00586"
                      ></rect>
                      <rect
                        fill="currentColor"
                        height="6.48937"
                        id="Rectangle 9"
                        width="3.08245"
                        x="121.008"
                        y="1.00586"
                      ></rect>
                      <rect
                        fill="currentColor"
                        height="6.48937"
                        id="Rectangle 10"
                        width="3.08245"
                        x="126.039"
                        y="1.00586"
                      ></rect>
                      <rect
                        fill="currentColor"
                        height="6.48937"
                        id="Rectangle 12"
                        width="3.08245"
                        x="196.18"
                        y="1.00586"
                      ></rect>
                      <rect
                        fill="currentColor"
                        height="6.48937"
                        id="Rectangle 13"
                        width="3.08245"
                        x="186.18"
                        y="1.00586"
                      ></rect>
                      <rect
                        fill="currentColor"
                        height="6.48937"
                        id="Rectangle 14"
                        width="3.08245"
                        x="218.18"
                        y="1.00586"
                      ></rect>
                      <rect
                        fill="currentColor"
                        height="6.48937"
                        id="Rectangle 11"
                        width="3.08245"
                        x="190.93"
                        y="1.00586"
                      ></rect>
                      <circle
                        cx="134.64"
                        cy="4.41323"
                        fill="currentColor"
                        id="Ellipse 41"
                        r="1.46011"
                      ></circle>
                      <circle
                        cx="139.507"
                        cy="4.41323"
                        fill="currentColor"
                        id="Ellipse 42"
                        r="1.46011"
                      ></circle>
                      <circle
                        cx="144.374"
                        cy="4.41323"
                        fill="currentColor"
                        id="Ellipse 43"
                        r="1.46011"
                      ></circle>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div className="divide-y divide-camo-400">
              <button
                disabled
                value="DAI"
                className="group flex w-72 items-center gap-2 p-2 transition-colors enabled:hover:bg-camo-600 enabled:hover:text-white disabled:text-camo-300 text-camo-200"
              >
                <img
                  alt="$DAI Token"
                  loading="lazy"
                  width="24"
                  height="24"
                  decoding="async"
                  src="/icons/dai-color.svg"
                  style={{ color: "transparent" }}
                />
                <div className="typography-brand-heading-3 text-camo-300 text-current">
                  Dai
                </div>
                <div className="typography-brand-body-l flex-1 text-right text-camo-200 text-current">
                  0.00
                </div>
              </button>
              <button
                disabled
                value="ETH"
                className="group flex w-72 items-center gap-2 p-2 transition-colors enabled:hover:bg-camo-600 enabled:hover:text-white disabled:text-camo-300 text-yellow-100"
              >
                <img
                  alt="$ETH Token"
                  loading="lazy"
                  width="24"
                  height="24"
                  decoding="async"
                  src="/icons/eth-color.svg"
                  style={{ color: "transparent" }}
                />
                <div className="typography-brand-heading-3 text-camo-300 text-current">
                  ETH
                </div>
                <div className="typography-brand-body-l flex-1 text-right text-camo-200 text-current">
                  0.00
                </div>
                <svg
                  viewBox="0 0 24 24"
                  style={{ height: "24px", width: "24px" }}
                >
                  <use xlinkHref="/icons/library.svg#checkmark-circle"></use>
                </svg>
              </button>
              <button
                disabled
                value="STETH"
                className="group flex w-72 items-center gap-2 p-2 transition-colors enabled:hover:bg-camo-600 enabled:hover:text-white disabled:text-camo-300 text-camo-200"
              >
                <img
                  alt="$STETH (Lido Staked Ether) Token"
                  loading="lazy"
                  width="24"
                  height="24"
                  decoding="async"
                  src="/icons/steth-color.svg"
                  style={{ color: "transparent" }}
                />
                <div className="typography-brand-heading-3 text-camo-300 text-current">
                  stETH
                </div>
                <div className="typography-brand-body-l flex-1 text-right text-camo-200 text-current">
                  0.00
                </div>
              </button>
              <button
                disabled
                value="USDC"
                className="group flex w-72 items-center gap-2 p-2 transition-colors enabled:hover:bg-camo-600 enabled:hover:text-white disabled:text-camo-300 text-camo-200"
              >
                <img
                  alt="$USDC Token"
                  loading="lazy"
                  width="24"
                  height="24"
                  decoding="async"
                  src="/icons/usdc-color.svg"
                  style={{ color: "transparent" }}
                />
                <div className="typography-brand-heading-3 text-camo-300 text-current">
                  USDC
                </div>
                <div className="typography-brand-body-l flex-1 text-right text-camo-200 text-current">
                  0.00
                </div>
              </button>
              <button
                disabled
                value="USDT"
                className="group flex w-72 items-center gap-2 p-2 transition-colors enabled:hover:bg-camo-600 enabled:hover:text-white disabled:text-camo-300 text-camo-200"
              >
                <img
                  alt="$USDT Token"
                  loading="lazy"
                  width="24"
                  height="24"
                  decoding="async"
                  src="/icons/tether-color.svg"
                  style={{ color: "transparent" }}
                />
                <div className="typography-brand-heading-3 text-camo-300 text-current">
                  Tether
                </div>
                <div className="typography-brand-body-l flex-1 text-right text-camo-200 text-current">
                  0.00
                </div>
              </button>
              <button
                disabled
                value="WETH"
                className="group flex w-72 items-center gap-2 p-2 transition-colors enabled:hover:bg-camo-600 enabled:hover:text-white disabled:text-camo-300 text-camo-200"
              >
                <img
                  alt="$WETH (Wrapped Ethereum) Token"
                  loading="lazy"
                  width="24"
                  height="24"
                  decoding="async"
                  src="/icons/weth-color.svg"
                  style={{ color: "transparent" }}
                />
                <div className="typography-brand-heading-3 text-camo-300 text-current">
                  WETH
                </div>
                <div className="typography-brand-body-l flex-1 text-right text-camo-200 text-current">
                  0.00
                </div>
              </button>
              <button
                disabled
                value="WBTC"
                className="group flex w-72 items-center gap-2 p-2 transition-colors enabled:hover:bg-camo-600 enabled:hover:text-white disabled:text-camo-300 text-camo-200"
              >
                <img
                  alt="$WBTC (Wrapped Bitcoin) Token"
                  loading="lazy"
                  width="24"
                  height="24"
                  decoding="async"
                  src="/icons/wbtc-color.svg"
                  style={{ color: "transparent" }}
                />
                <div className="typography-brand-heading-3 text-camo-300 text-current">
                  WBTC
                </div>
                <div className="typography-brand-body-l flex-1 text-right text-camo-200 text-current">
                  0.00
                </div>
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FetchTokens;
