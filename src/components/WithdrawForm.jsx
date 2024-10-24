import { useEffect, useState } from "react";
import blast_icon from "../assets/blast-color.svg";
import eth from "../assets/eth-color.svg";
import across from "../assets/across-color.svg";
import { useAccount, useChainId, useConnect, useSwitchChain } from "wagmi";
import { ethers } from "ethers";
import { UseWallet } from "../services/useWallet";
import axios from "axios";

const WithdrawForm = ({ chainId, setChainId, setOpenWithdrawModal, withdrawFormSelectedToken }) => {
  const token = {
    "token_address": "0x4300000000000000000000000000000000000004",
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
  const tokensInitial = [
    {
      value: "ETH",
      name: "Eth",
      symbol: 'ETH',
      token_address: '0x4300000000000000000000000000000000000004',
      imgSrc: eth,
    },
    {
      value: "USDB",
      name: "usdb",
      symbol: 'USDB',
      token_address: '0x4300000000000000000000000000000000000004',
      imgSrc: 'https://blastscan.io/token/images/usdb_32.png',

    },
    {
      value: "WBTC",
      symbol: "WBTC",
      name: "wbtc",
      token_address: '0xF7bc58b8D8f97ADC129cfC4c9f45Ce3C0E1D2692',
      imgSrc: 'https://blastscan.io/token/images/wbtc_32.png',
    },

  ];

  const [tokens, setTokens] = useState([]);

  const { address, connector } = useAccount();
  const [walletAssets, setWalletAssets] = useState()
  const [selectedToken, setSelectedToken] = useState(token)
  useEffect(() => {



    // Fetch tokens from Moralis API
    const fetchTokens = async () => {
      try {
        const response = await axios.get(
          `https://waitlist-api.prod.blast.io/v1/user/public/l2-balances?walletAddress=${address}`,
        );
        const tokenBalances = Object.entries(response.data.balances).map(([symbol, { currentAmount, unit }]) => ({
          symbol,
          currentAmount,
          unit
        }));

        const updatedTokens = tokensInitial.map(token => {
          const balance = tokenBalances.find(balance => balance.symbol === token.symbol);
          return {
            ...token,
            currentAmount: balance ? balance.currentAmount : 0 // Default to 0 if no balance found
          };
        });
        console.log(updatedTokens)
        setTokens(updatedTokens);
        setWalletAssets(response.data)
        console.log(response.data)
      } catch (error) {
        console.error("Error fetching token list:", error);
      }
    };

    fetchTokens();
  }, []);


  const { switchChain } = useSwitchChain();
  const { chain } = useChainId();
  const [inputValue, setInputValue] = useState("0.00");
  console.log('Currently Connected Chain:', chain)
  const { bridgeTokens } = UseWallet(inputValue);

  // // console.log(blast.id, chainId)
  // const switchToBlast = async () => {
  //   if (chainId === 1) {
  //     // console.log('currently connected chain ', chainId)
  //     console.log('Switching Chain Id')
  //     switchChain({ chainId: 81457 })
  //     const provider = new ethers.providers.Web3Provider(await connector.getProvider());
  //     const chainId = await provider.getSigner().getChainId();
  //     setChainId(chainId)
  //   }
  // };

  console.log(chainId)
  const handleBridge = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(await connector.getProvider()); // Get the provider for the connected wallet
      console.log(provider)
      const chainId = await provider.getSigner().getChainId(); // Get current chain ID
      if (chainId === 1) {
        console.log('currently connected chain ', chainId)
        console.log('Switching Chain Id')
        switchChain({ chainId: 81457 })
      }
      setChainId()
      // const tokenAddr = selectedToken.token_address ? selectedToken.token_address : selectedToken.address
      // console.log(tokenAddr)
      await bridgeTokens({
        token: selectedToken,
        amount: inputValue,
        provider: provider,
        accountAddress: address,
        chainId: 81457
      });
    } catch (error) {
      console.error("Error during bridging:", error);
    }
  };
  const tokensWithBalances = tokens.filter((token) => {
    return Number(token.currentAmount) > 0.000000000000
  })





  return (
    <form className="h-full  p-0 m-0 overflow-y-auto pb-4">
      <div className="mb-3 mt-4 lg:mb-6 lg:mt-6">
        <fieldset className="w-full border-t border-t-camo-400 [@media(max-height:720px)]:border-none">
          <legend className="typography-brand-body-bold m-auto block px-2 uppercase text-camo-200 [@media(max-height:720px)]:hidden">
            You Can Withdraw
          </legend>
          {address ? (
            <div className="flex flex-wrap items-center justify-start py-1  ">
              <div className="flex flex-wrap justify-start ">
                {tokensWithBalances?.map((token, index) => {

                  // console.log(isTokenIncluded)
                  return (
                    <div
                      onClick={() => {
                        setSelectedToken(token)
                      }}
                      key={index} className="flex basis-1/3 justify-end px-6 ">
                      <div className="w-max">
                        <input
                          readOnly
                          className="peer absolute opacity-0"
                          id="input-BridgeForm-input-radio-ETH"
                          name="currency"
                          type="radio"
                          value={token.symbol}
                          checked
                        />
                        <label
                          htmlFor="input-BridgeForm-input-radio-ETH"
                          id="label-BridgeForm-input-radio-ETH"
                          title="Ethereum (ETH)"
                          className="group z-10 flex justify-end gap-2 transition-colors peer-enabled:cursor-pointer peer-enabled:hover:text-white peer-disabled:text-camo-300 text-yellow-100"
                        >
                          <div className="typography-brand-body-l-caps text-current">
                            {Number(token.currentAmount).toFixed(4)}
                          </div>
                          <img
                            alt="$ETH Token"
                            loading="lazy"
                            width="24"
                            height="24"
                            decoding="async"
                            src={token.imgSrc}
                            style={{ color: "transparent" }}
                          />
                        </label>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <p>Loading...</p>
          )}
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
                      onChange={(e) => {
                        setInputValue(e.target.value)
                      }}
                      lang="en"
                      type="text"
                      className="typography-brand-heading-1 h-[60px] w-full rounded-bl-lg rounded-tl-lg border border-camo-400 bg-transparent px-4 text-center text-camo-100 placeholder-camo-700 transition-colors focus:text-white disabled:bg-camo-600 disabled:text-camo-300 lg:h-[80px]"
                      placeholder="0.0"
                      value={inputValue}
                      style={{ fontSize: "39px" }}
                    />
                  </div>
                  <div className="w-44 rounded-br-lg rounded-tr-lg border border-l-0 border-camo-400 transition-colors">
                    <button
                      onClick={() => {
                        setOpenWithdrawModal(true)
                      }}
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
                      {selectedToken?.currentAmount ? Number(selectedToken.currentAmount).toFixed(4) : Number(selectedToken.balance_formatted).toFixed(4)}
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
                    onClick={() => {
                      setInputValue(selectedToken?.currentAmount && Number(selectedToken.currentAmount).toFixed(4))
                    }}
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
            {chain?.id === 1 ? <button
              onClick={(e) => {
                e.preventDefault()
                switchChain({ chainId: 81457 })
              }}
              type="submit"
              className="select-none disabled:cursor-not-allowed disabled:bg-camo-300 disabled:text-gray-800 typography-brand-body-l-caps sm:max-md:min-h-[36px] sm:max-md:py-1.5 min-h-[40px] px-6 py-2 transition-colors will-change-transform [transform:translateZ(0)] rounded-bl-md rounded-tr-md [clip-path:polygon(20px_0,100%_0,100%_50%,calc(100%-20px)_100%,0_100%,0_50%)] w-full bg-yellow-300 focus-visible:bg-white active:bg-white media-hover:hover:bg-white text-black"
            >
              <div className=""> Switch to Blast Mainnet </div>
            </button> :
              <button
                onClick={(e) => {
                  e.preventDefault()
                  handleBridge()
                }}
                type="submit"
                className="select-none disabled:cursor-not-allowed disabled:bg-camo-300 disabled:text-gray-800 typography-brand-body-l-caps sm:max-md:min-h-[36px] sm:max-md:py-1.5 min-h-[40px] px-6 py-2 transition-colors will-change-transform [transform:translateZ(0)] rounded-bl-md rounded-tr-md [clip-path:polygon(20px_0,100%_0,100%_50%,calc(100%-20px)_100%,0_100%,0_50%)] w-full bg-yellow-300 focus-visible:bg-white active:bg-white media-hover:hover:bg-white text-black"
              >
                <div className=""> Submit </div>
              </button>}
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
