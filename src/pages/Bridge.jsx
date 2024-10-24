import "./Bridge.css";
import blast_icon from "../assets/blast-color.svg";
import eth from "../assets/eth-color.svg";
import across from "../assets/across-color.svg";
import { useEffect, useState } from "react";
import {
  useConnect,
  useAccount,
  useDisconnect,
  useEnsAvatar,
  useEnsName,
  useSwitchChain,
  useBalance,
  useChainId,
} from "wagmi";
import { useRef } from "react"; // Add this import

import { cn } from "../lib/utils";
import metamask from "../assets/metamask-color.svg";
import Navbar from "../components/Navbar";
import wbtc from "../assets/wbtc-color.svg";
import weth from "../assets/weth-color.svg";
import dai from "../assets/dai-color.svg";
import steth from "../assets/steth-color.svg";
import tether from "../assets/tether-color.svg";
import usdc from "../assets/usdc-color.svg";
import cutout_left_lg from "../assets/frame-corner-sm-top-left_3.svg";
import cutout_top_right from "../assets/frame-corner-top-right.svg";
import cutout_top_right_lg from "../assets/frame-corner-sm-top-right_2.svg";
import cutout_bottom_right from "../assets/frame-corner-bottom-right.svg";
import cutout_bottom_left from "../assets/frame-corner-bottom-left_4.svg";
import cutout_bottom_lg from "../assets/frame-corner-sm-bottom-left_2.svg";
import cutout_bottom_right_lg from "../assets/frame-corner-sm-bottom-right_lg.svg";
import discord from "../assets/icons8-discord-50.png";
import twitter from "../assets/icons8-twitter-50.png";
import { UseWallet } from "../services/useWallet";
import GetTokenBalance from "./GetTokenBalance";
import { ethers } from "ethers";
import WithdrawForm from "../components/WithdrawForm";
import History from "../components/History";
import { useNavigate } from "react-router-dom";
import WithdrawFormModal from "../components/WithdrawFormModal";

const Bridge = () => {
  const navigate = useNavigate()


  const token = {
    "token_address": "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
    "symbol": "ETH",
    "name": "Ether",
    "logo": "https://cdn.moralis.io/eth/0x.png",
    "thumbnail": "https://cdn.moralis.io/eth/0x_thumb.png",
    "decimals": 18,
    "balance": "3536731840443021",
    "possible_spam": false,
    "verified_contract": true,
    "total_supply": null,
    "total_supply_formatted": null,
    "percentage_relative_to_total_supply": null,
    "security_score": 99,
    "balance_formatted": "0.003536731840443021",
    "usd_price": 2679.959699957038,
    "usd_price_24hr_percent_change": 0.7792431724233371,
    "usd_price_24hr_usd_change": 20.72192877047337,
    "usd_value": 9.478298801942183,
    "usd_value_24hr_usd_change": 0.07328790527792606,
    "native_token": true,
    "portfolio_percentage": 100
  }
  const { connectors, connect } = useConnect();
  const { chains, switchChain } = useSwitchChain();
  const blast = chains.filter((chain) => {
    return chain.name === "Blast";
  });

  const currentChain = chains.find(chain => chain.id === (window.ethereum?.chainId ? parseInt(window.ethereum.chainId, 16) : null));
  console.log('Currently connected chain:', currentChain);

  const blastObj = chains.find((chain) => {
    return chain.name === 'Blast'
  })

  console.log(blastObj)

  const [showConnect, setShowConnect] = useState(false);
  const [open, setOpen] = useState(false);
  const [openWithdrawModal, setOpenWithdrawModal] = useState(false)
  const [currentTab, setCurrentTab] = useState("Bridge");
  const [accounts, setAccounts] = useState()
  const [selectedToken, setSelectedToken] = useState(token)
  const [withdrawFormSelectedToken, setWithdrawFormSelectedToken] = useState()
  const [inputValue, setInputValue] = useState("0.00");
  const [walletAssets, setWalletAssets] = useState(null)
  const [chainId, setChainId] = useState()
  const { address, connector } = useAccount();
  const { bridgeTokens } = UseWallet(inputValue);

  const { disconnect } = useDisconnect();
  const { data: ensName } = useEnsName({ address });
  const { data: ensAvatar } = useEnsAvatar({
    name: ensName || undefined || address,
  });
  const balance = useBalance({
    address: address,
  });



  const { pathname, search } = window.location;
  const queryParams = new URLSearchParams(search);
  console.log('Current pathname:', pathname);
  console.log('Current query parameters:', Object.fromEntries(queryParams.entries()));


  const { chain } = useChainId();
  const getCurrentAccount = async () => {
    if (window.okxwallet || window.phantom) {

      // disconnect()
    }

    if (typeof window.ethereum !== 'undefined') {

      const accounts = await window.ethereum.request({ method: 'eth_accounts' });
      if (accounts.length > 0) {
        console.log('Currently connected account:', accounts[0]);
        setAccounts(accounts[0])
      } else {
        console.log('No connected accounts found.');
      }
    } else {
      console.log('Ethereum wallet is not installed.');
    }
  };

  useEffect(() => {

    console.log(walletAssets)

    getCurrentAccount();
  }, [address, chain]);


  //     console.log('currently connected chain ', chainId)
  //     console.log('Switching Chain Id')
  //     switchChain({ chainId: 81457 })
  //     const provider = new ethers.providers.Web3Provider(await connector.getProvider());
  //     const chainId = await provider.getSigner().getChainId();
  //     setChainId(chainId)
  //   }
  // };

  //   try {
  //     if (typeof window !== "undefined" && window.ethereum) {
  //       await window.ethereum.request({
  //         method: "wallet_requestPermissions",
  //         params: [
  //           {
  //             eth_accounts: {},
  //           },
  //         ],
  //       });
  //       const accounts = await window.ethereum.request({
  //         method: "eth_requestAccounts",
  //         params: [],
  //       });

  //       const valueInWei = ethers.utils.parseUnits(inputValue, 18); // Convert inputValue to wei
  //       console.log(valueInWei);
  //       await window.ethereum.request({
  //         method: "eth_sendTransaction",
  //         params: [
  //           {
  //             to: address,
  //             from: accounts[0],
  //             gas: "0x76c0",
  //             value: valueInWei._hex,
  //             data: "0x",
  //             gasPrice: "0x4a817c800",
  //           },
  //         ],
  //       });
  //     } else {
  //       console.error("Ethereum provider is not available.");
  //     }
  //   } catch (error) {
  //     console.error("Error sending dummy ETH:", error);
  //   }
  // };
  const handleBridge = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(await connector.getProvider()); // Get the provider for the connected wallet
      console.log(provider)
      const chainId = await provider.getSigner().getChainId(); // Get current chain ID
      await bridgeTokens({
        token: selectedToken,
        amount: inputValue,
        provider: provider,
        accountAddress: address,
        chainId: chainId
      });
    } catch (error) {
      console.error("Error during bridging:", error);
    }
  };
  const handleTabClick = (param) => {
    console.log(param)
    // Set the query params using React Router's useHistory
    const queryParams = new URLSearchParams();
    queryParams.set('action', param);
    navigate({ search: queryParams.toString() });
  };

  const validConnectors = connectors.filter((connector) => {
    return typeof connector.icon === "string";
  });

  const tokens = [
    {
      value: "DAI",
      name: "Dai",
      symbol: 'DAI',
      imgSrc: dai,
    },
    {
      value: "ETH",
      name: "ETH",
      symbol: 'ETH',
      imgSrc: eth,
      isSelected: true,
    },
    {
      value: "STETH",
      symbol: "STETH",
      name: "stETH",
      imgSrc: steth,
    },
    {
      value: "USDC",
      symbol: "USDC",
      name: "USDC",
      imgSrc: usdc,
    },
    {
      value: "USDT",
      symbol: "USDT",
      name: "Tether",
      imgSrc: tether,
    },
    {
      value: "WETH",
      symbol: "WETH",
      name: "WETH",
      imgSrc: weth,
    },
    {
      value: "WBTC",
      symbol: "WBTC",
      name: "WBTC",
      imgSrc: wbtc,
    },
  ];

  return (
    <div id="__next">
      <div className="__variable_d69ff7">
        <div className="relative flex min-h-screen w-screen px-[11px] py-[12px] sm:py-[11px] h-screen overflow-hidden">
          <div className="relative flex min-h-full w-full flex-1 flex-col rounded-md border-2 border-camo-500 transition-colors overflow-hidden bg-gradient-to-b from-[#11140C] from-[27.54%] to-[#252B1B]">
            <div className="relative z-10 flex flex-1 flex-col pb-16 h-screen overflow-hidden">
              <Navbar />
              <main className="relative flex h-full flex-1 px-6 pt-6 md:ml-16 md:pl-14 md:pr-14 lg:pt-14 overflow-hidden">
                <div className="relative flex h-full w-full animate-enter-fade">
                  <div className="flex flex-1 flex-col mt-8 lg:mt-0">
                    <div className="mx-auto flex h-full  w-full max-w-[1200px] animate-appear-slide-up justify-between gap-x-4">
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
                        <button className="group relative mb-10 w-full overflow-hidden rounded-lg border border-camo-400 p-6 transition-colors enabled:hover:border-white">
                          <div className="typography-brand-body-bold text-black absolute -left-12 top-1 w-40 -rotate-[30deg] bg-shine-0 py-2 text-center uppercase tracking-widest group-enabled:group-hover:bg-white group-enabled:group-hover:bg-none">New</div>
                          <h3 className="typography-brand-body w-full text-center font-semibold uppercase leading-relaxed tracking-widest text-yellow-100 transition-colors group-enabled:group-hover:text-white">Deposit via exchange or onramp</h3>
                          <div className="ml-auto mr-auto flex max-w-xs flex-wrap items-center justify-center gap-5 pt-6">
                            <img alt="Visa" loading="lazy" width="56" height="20" decoding="async" data-nimg="1" style={{ color: "transparent" }} src="https://blast.io/images/gdl-visa.svg" />
                            <img alt="Mastercard" loading="lazy" width="32" height="24" decoding="async" data-nimg="1" style={{ color: "transparent" }} src="https://blast.io/images/gdl-mastercard.svg" />
                            <img alt="PayPal" loading="lazy" width="20" height="24" decoding="async" data-nimg="1" style={{ color: "transparent" }} src="https://blast.io/images/gdl-paypal.svg" />
                            <img alt="Apple Pay" loading="lazy" width="56" height="24" decoding="async" data-nimg="1" style={{ color: "transparent" }} src="https://blast.io/images/gdl-apple-pay.svg" />
                            <img alt="Google Pay" loading="lazy" width="64" height="24" decoding="async" data-nimg="1" style={{ color: "transparent" }} src="https://blast.io/images/gdl-google-pay.svg" />
                            <img alt="Coinbase" loading="lazy" width="96" height="20" decoding="async" data-nimg="1" style={{ color: "transparent" }} src="https://blast.io/images/gdl-coinbase.svg" />
                            <img alt="Binance" loading="lazy" width="112" height="20" decoding="async" data-nimg="1" style={{ color: "transparent" }} src="https://blast.io/images/gdl-binance.svg" />
                          </div>
                        </button>
                        <div className="mb-14 mt-14 h-24"></div>
                      </div>
                      <div className="relative flex h-fit  xl:max-h-full w-[520px]">
                        <fieldset className="absolute left-0 right-0 top-0 flex">
                          <div
                            className={cn(
                              "[clip-path:polygon(32px_0%,_100%_0,_100%_100%,_0_100%,_0%_32px)] relative h-[48px]   w-1/3 lg:h-[64px] z-10",
                              currentTab !== "Bridge" && "bg-camo-500 "
                            )}
                          >
                            <input
                              className="peer absolute h-full w-full bg-black opacity-0"
                              id="input-BridgeForm-tab-deposit"
                              name="tab"
                              type="radio"
                              defaultChecked={true}
                              value="deposit"
                            />
                            <label
                              onClick={() => {
                                handleTabClick('bridge')
                                setCurrentTab("Bridge");
                              }}
                              htmlFor="input-BridgeForm-tab-deposit"
                              id="label-BridgeForm-tab-deposit"
                              className="typography-brand-body-l-caps absolute flex h-full w-full cursor-pointer items-center justify-center text-yellow-100 peer-focus-visible:text-white peer-enabled:peer-hover:text-white peer-disabled:cursor-not-allowed"
                            >
                              Deposit
                            </label>
                          </div>
                          <div
                            className={cn(
                              "relative h-[48px] w-1/3 lg:h-[64px] ",
                              currentTab !== "Airdrop" && "bg-camo-500"
                            )}
                          >
                            <input
                              className="peer absolute h-full w-full bg-black opacity-0"
                              id="input-BridgeForm-tab-withdraw"
                              name="tab"
                              type="radio"
                              value="withdraw"
                            />
                            <label
                              onClick={() => {
                                handleTabClick('airdrop')
                                setCurrentTab("Airdrop");

                              }}
                              htmlFor="input-BridgeForm-tab-withdraw"
                              id="label-BridgeForm-tab-withdraw"
                              className="typography-brand-body-l-caps absolute flex h-full w-full cursor-pointer items-center justify-center text-yellow-100 peer-focus-visible:text-white peer-enabled:peer-hover:text-white peer-disabled:cursor-not-allowed"
                            >
                              Withdraw
                            </label>
                          </div>
                          <div
                            className={cn(
                              "rounded-tr-[6px] relative h-[48px] w-1/3 lg:h-[64px] bg-camo-500",
                              currentTab !== "History"
                                ? "bg-camo-500"
                                : "bg-black"
                            )}
                          >
                            <input
                              className="peer absolute h-full w-full bg-black opacity-0"
                              id="input-BridgeForm-tab-history"
                              name="tab"
                              type="radio"
                              value="history"
                            />
                            <label
                              onClick={() => {
                                handleTabClick('history')
                                setCurrentTab("History");
                              }}
                              htmlFor="input-BridgeForm-tab-history"
                              id="label-BridgeForm-tab-history"
                              className="typography-brand-body-l-caps absolute flex h-full w-full cursor-pointer items-center justify-center text-yellow-100 peer-focus-visible:text-white peer-enabled:peer-hover:text-white peer-disabled:cursor-not-allowed opacity-50"
                            >
                              History
                            </label>
                          </div>
                        </fieldset>
                        <div className="[clip-path:polygon(calc(33.33%_+_1px)_0px,_calc(33.33%_+_1px)_48px,_100%_48px,_100%_calc(100%_-_56px),_calc(100%_-_56px)_100%,_0_100%,_0_32px,_32px_0px)] xl:[clip-path:polygon(calc(33.33%_+_1px)_0px,_calc(33.33%_+_1px)_64px,_100%_64px,_100%_calc(100%_-_56px),_calc(100%_-_56px)_100%,_0_100%,_0_32px,_32px_0px)] flex max-h-full w-full rounded-[6px] bg-camo-400 p-[1px]">
                          <div className="[clip-path:polygon(33.33%_0px,_33.33%_48px,_100%_48px,_100%_calc(100%_-_56px),_calc(100%_-_0px)_100%,_0_100%,_0_32px,_24px_0px)] xl:[clip-path:polygon(33.33%_0px,_33.33%_64px,_100%_64px,_100%_calc(100%_-_56px),_calc(100%_-_32px)_100%,_0_100%,_0_40px,_32px_0px)] relative w-full rounded-[5px] bg-black px-8 pt-[48px] xl:pt-[64px]">
                            {currentTab === "Airdrop" && <WithdrawForm withdrawFormSelectedToken={withdrawFormSelectedToken} setOpenWithdrawModal={setOpenWithdrawModal} setChainId={setChainId} chainId={chainId} />}
                            {currentTab === "History" && <History />}
                            {currentTab === "Bridge" && (
                              <form className="h-full overflow-y-auto pb-4">
                                <fieldset className="mb-3 mt-4 w-full border-t border-t-camo-400 xl:mb-6 xl:mt-6 [@media(max-height:720px)]:border-none">
                                  <legend className="typography-brand-body-bold m-auto block px-2 uppercase text-camo-200 [@media(max-height:720px)]:hidden">
                                    You Can Bridge
                                  </legend>
                                  {address && (
                                    <GetTokenBalance setWalletAssets={setWalletAssets} setSelectedToken={setSelectedToken} address={address} />
                                  )}
                                </fieldset>

                                <div className="[clip-path:polygon(100%_0px,_100%_0,_100%_0,_100%_calc(100%_-_24px),_calc(100%_-_0px)_100%,_0_100%,_0_24px,_24px_0px)] xl:[clip-path:polygon(100%_0px,_100%_0,_100%_0,_100%_calc(100%_-_40px),_calc(100%_-_32px)_100%,_0_100%,_0_40px,_32px_0px)] rounded-t-[6px] bg-camo-400 p-px pb-0 xl:mb-6 lg:rounded-[6px] lg:p-px">
                                  <div className="[clip-path:polygon(100%_0px,_100%_0,_100%_0,_100%_calc(100%_-_24px),_calc(100%_-_0px)_100%,_0_100%,_0_24px,_24px_0px)] xl:[clip-path:polygon(100%_0px,_100%_0,_100%_0,_100%_calc(100%_-_40px),_calc(100%_-_32px)_100%,_0_100%,_0_40px,_32px_0px)] rounded-t-[5px] bg-black lg:rounded-[5px]">
                                    <div className="flex flex-col items-center px-6 pb-4 pt-4 xl:pt-6">
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
                                              onChange={(e) => {
                                                setInputValue(e.target.value);
                                              }}
                                              style={{
                                                WebkitAppearance: "none",
                                                MozAppearance: "textfield",
                                                margin: 0,
                                              }}
                                              autoFocus={true}
                                              lang="en"
                                              type="number"
                                              max={balance}
                                              className="typography-brand-heading-1 h-[60px] w-full rounded-bl-lg rounded-tl-lg border border-camo-400 bg-transparent px-4 text-center text-camo-100 placeholder-camo-700 transition-colors focus:text-white disabled:bg-camo-600 disabled:text-camo-300 xl:h-20"
                                              placeholder="0.0"
                                              value={inputValue}
                                            />
                                          </div>
                                          <div className="w-44 rounded-br-lg rounded-tr-lg border border-l-0 border-camo-400 transition-colors">
                                            <button
                                              onClick={() => {
                                                setOpen(true);
                                              }}
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
                                                  style={{
                                                    color: "transparent",
                                                  }}
                                                  src={selectedToken ? selectedToken.thumbnail : eth}
                                                />
                                              </div>
                                              {selectedToken ? selectedToken.symbol : 'ETH'}
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
                                              {selectedToken ? Number(
                                                selectedToken?.balance_formatted
                                              ).toPrecision(3) : Number(
                                                balance.data?.formatted
                                              ).toPrecision(3)
                                              }
                                              <img
                                                alt="$ETH Token"
                                                loading="lazy"
                                                width="16"
                                                height="16"
                                                decoding="async"
                                                data-nimg="1"
                                                style={{ color: "transparent" }}
                                                src={selectedToken ? selectedToken.thumbnail : eth}
                                              />
                                            </div>
                                          </label>
                                          <button
                                            onClick={() => {
                                              setInputValue(
                                                selectedToken ? Number(
                                                  selectedToken?.balance_formatted
                                                ).toPrecision(3) : Number(
                                                  balance.data?.formatted
                                                ).toPrecision(3)
                                              );
                                            }}
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
                                              src={blast_icon}
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
                                          You will receive{" "}
                                          {Number(inputValue).toPrecision(2)}{" "}
                                          ETH + Yield + Points
                                        </output>
                                      </fieldset>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="-ml-px -mt-[21px] xl:mt-0"
                                  style={{ width: "calc(100% + 2px)" }}
                                >
                                  <div className="p-[1px] transition-all bg-transparent">
                                    <div className="transition-[filter]">

                                      {address ? (
                                        <button
                                          disabled={currentChain.name === 'Ethereum' && Number(inputValue) <= 0}
                                          onClick={(e) => {
                                            e.preventDefault();
                                            handleBridge();
                                          }}
                                          className="select-none disabled:cursor-not-allowed disabled:bg-camo-300 disabled:text-gray-800 typography-brand-body-l-caps sm:max-md:min-h-[36px] sm:max-md:py-1.5 min-h-[40px] px-6 py-2 transition-colors will-change-transform [transform:translateZ(0)] rounded-bl-md rounded-tr-md [clip-path:polygon(20px_0,100%_0,100%_50%,calc(100%-20px)_100%,0_100%,0_50%)] w-full bg-yellow-300 focus-visible:bg-white active:bg-white media-hover:hover:bg-white text-black"
                                        >
                                          <div className="">Submit</div>
                                        </button>
                                      ) : chain?.id !== 1 && address ? (
                                        <button
                                          disabled={currentChain.name === 'Ethereum' && Number(inputValue) <= 0}
                                          onClick={(e) => {
                                            e.preventDefault();
                                            switchChain({ chainId: 1 });
                                          }}
                                          className="select-none disabled:cursor-not-allowed disabled:bg-camo-300 disabled:text-gray-800 typography-brand-body-l-caps sm:max-md:min-h-[36px] sm:max-md:py-1.5 min-h-[40px] px-6 py-2 transition-colors will-change-transform [transform:translateZ(0)] rounded-bl-md rounded-tr-md [clip-path:polygon(20px_0,100%_0,100%_50%,calc(100%-20px)_100%,0_100%,0_50%)] w-full bg-yellow-300 focus-visible:bg-white active:bg-white media-hover:hover:bg-white text-black"
                                        >
                                          <div className="">Switch to Ethereum Mainnet</div>
                                        </button>
                                      ) : (
                                        <button
                                          onClick={(e) => {
                                            e.preventDefault();
                                            setShowConnect(true);
                                          }}
                                          className="select-none disabled:cursor-not-allowed disabled:bg-camo-300 disabled:text-gray-800 typography-brand-body-l-caps sm:max-md:min-h-[36px] sm:max-md:py-1.5 min-h-[40px] px-6 py-2 transition-colors will-change-transform [transform:translateZ(0)] rounded-bl-md rounded-tr-md [clip-path:polygon(20px_0,100%_0,100%_50%,calc(100%-20px)_100%,0_100%,0_50%)] w-full bg-yellow-300 focus-visible:bg-white active:bg-white media-hover:hover:bg-white text-black"
                                        >
                                          <div className="">Connect Wallet</div>
                                        </button>
                                      )}
                                    </div>
                                  </div>
                                </div>
                                <div className="mt-3 flex flex-1 flex-row justify-center">
                                  <aside className="typography-brand-body-l-caps  text-camo-300">
                                    Or
                                    <a
                                      className="interactive-text ml-2 text-yellow-300"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      href="https://app.across.to/bridge?inputToken=ETH&amp;to=81457&amp;from=1&amp;integrator=blast&amp;integrator_id=002b"
                                    >
                                      Deposit from other chains
                                    </a>
                                    <div className="typography-brand-body-l mt-1 flex justify-center gap-2 normal-case text-camo-300">
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
                            )}
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
                    {validConnectors.map((connector) => (
                      <>
                        <div className="p-[1px] transition-all bg-transparent">
                          <div className="transition-[filter]">
                            <button
                              key={connector.uid}
                              onClick={() => connect({ connector, chainId: '0x1' })}
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


      {open && (
        <div
          onClick={() => {
            setOpen(false);
          }}
          className=" cursor-auto bg-black/85  absolute inset-0 z-50 flex items-center justify-center"
        >
          <div
            className="rounded-[6px] bg-red-500  p-[1px] bg-camo-400 pointer-events-auto"
            aria-modal="true"
            aria-label="Select token"
            role="dialog"
            style={{
              clipPath:
                "polygon(137.828px 24px, 161.828px 0px, 100% 0px, 100% calc(100% - 56px), calc(100% - 56px) 100%, 0px 100%, 0px 60px, 36px 24px)",
            }}
          >
            <div
              className="relative h-max rounded-[5px] bg-camo-700 w-max px-6 xs:px-8 pb-14 pt-16"
              style={{
                clipPath:
                  "polygon(137.828px 24px, 161.828px 0px, 100% 0px, 100% calc(100% - 56px), calc(100% - 56px) 100%, 0px 100%, 0px 60px, 36px 24px)",
              }}
            >
              <div className="absolute right-0 top-0 px-6 xs:px-8 py-3">
                <h2 className="typography-brand-body-l-caps  text-yellow-100">
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
                {tokens.map((token) => {
                  // console.log(!walletAssets.result.symbol === token.symbol)
                  // console.log(walletAssets.result)
                  const availableTokens = walletAssets?.result?.filter(asset => {
                    console.log(asset?.symbol, token.symbol)
                    return asset?.symbol === token.symbol;
                  }
                  );
                  const availableToken = availableTokens?.find((asset) => {
                    return asset?.symbol === token.symbol
                  })
                  const isTokenIncluded = availableTokens?.some(asset => asset.symbol === token.symbol);
                  console.log(availableToken, isTokenIncluded)

                  return (<button
                    onClick={() => {
                      availableToken && setSelectedToken(availableToken)
                    }}
                    disabled={!isTokenIncluded}
                    value={token.value}
                    className="group flex w-72 items-center gap-2 p-2 transition-colors enabled:hover:bg-camo-600 enabled:hover:text-white disabled:text-camo-300 text-camo-200"
                    key={token.value}
                  >
                    <img
                      alt={`$${token.name} Token`}
                      loading="lazy"
                      width="24"
                      height="24"
                      decoding="async"
                      src={token.imgSrc}
                      style={{ color: "transparent" }}
                    />
                    <div className="typography-brand-heading-3 text-camo-300 text-current">
                      {token.name}
                    </div>
                    <div className="typography-brand-body-l flex-1 text-right text-camo-200 text-current">
                      {availableToken ? (Number(availableToken.balance_formatted)).toFixed(4) : '0.00'}
                    </div>
                    {
                      !isTokenIncluded && (
                        <svg
                          viewBox="0 0 24 24"
                          style={{ height: "24px", width: "24px" }}
                        >
                          <use xlinkHref="/icons/library.svg#checkmark-circle"></use>
                        </svg>
                      )}
                  </button>)


                })}

              </div>
            </div>
          </div>
        </div>
      )}

      {openWithdrawModal && <WithdrawFormModal setWithdrawFormSelectedToken={setWithdrawFormSelectedToken} setOpenWithdrawModal={setOpenWithdrawModal} />}
    </div>
  );
};

export default Bridge;
