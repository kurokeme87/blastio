import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import Navbar from "../components/Navbar";
const Airdrop = () => {
  return (
    <div id="__next">
      <div className="__variable_d69ff7">
        <div className="relative flex min-h-screen w-screen px-[11px] py-[12px] sm:py-[11px] h-screen overflow-hidden">
          <div className="relative flex min-h-full w-full flex-1 flex-col rounded-md border-2 border-camo-500 transition-colors overflow-hidden bg-gradient-to-b from-[#11140C] from-[27.54%] to-[#252B1B]">
            <div className="relative z-10 flex flex-1 flex-col pb-16 h-screen overflow-hidden">
              <Navbar />
              <main className="relative flex h-full flex-1 px-6 pt-6 md:ml-16 md:pl-14 md:pr-14 lg:pt-14 overflow-hidden">
                <div className="relative mx-auto flex h-full w-full max-w-7xl overflow-y-auto">
                  <div className="flex flex-1 flex-col justify-center items-center mb-6 md:mr-16 lg:mb-14">
                    <h1 className="typography-brand-heading-4-caps mb-4 text-center text-yellow-300">
                      Blast Mainnet Airdrop
                    </h1>
                    <form className="flex h-max w-60 flex-col items-center md:w-72">
                      <fieldset>
                        <legend className="typography-brand-body-l max-w-[256px] text-center text-yellow-100">
                          Enter your invite code to claim your airdrop
                        </legend>
                        <div className="my-8 flex justify-center gap-1.5 md:gap-2">
                          <div className="relative flex justify-center">
                            <input
                              aria-label="Enter the Blast invite code Digit 1"
                              id="early-access-digit-1"
                              autoComplete="off"
                              className="typography-brand-heading-4-caps md:typography-brand-heading-3-caps peer h-[50px] w-[40px] rounded-[12px] border border-camo-300 bg-transparent p-[10px] text-center text-yellow-100 transition-colors focus:border-yellow-100 disabled:text-camo-300 md:h-[62px] md:w-[50px] md:rounded-[15px]"
                              maxLength="1"
                              value=""
                            />
                            <div className="absolute bottom-[10px] m-auto h-[2px] w-[24px] bg-camo-300 opacity-40 transition peer-focus:translate-y-[11px] peer-focus:scale-x-150 peer-focus:opacity-0"></div>
                          </div>
                          <div className="relative flex justify-center">
                            <input
                              aria-label="Enter the Blast invite code Digit 2"
                              id="early-access-digit-2"
                              autoComplete="off"
                              className="typography-brand-heading-4-caps md:typography-brand-heading-3-caps peer h-[50px] w-[40px] rounded-[12px] border border-camo-300 bg-transparent p-[10px] text-center text-yellow-100 transition-colors focus:border-yellow-100 disabled:text-camo-300 md:h-[62px] md:w-[50px] md:rounded-[15px]"
                              maxLength="1"
                              value=""
                            />
                            <div className="absolute bottom-[10px] m-auto h-[2px] w-[24px] bg-camo-300 opacity-40 transition peer-focus:translate-y-[11px] peer-focus:scale-x-150 peer-focus:opacity-0"></div>
                          </div>
                          <div className="relative flex justify-center">
                            <input
                              aria-label="Enter the Blast invite code Digit 3"
                              id="early-access-digit-3"
                              autoComplete="off"
                              className="typography-brand-heading-4-caps md:typography-brand-heading-3-caps peer h-[50px] w-[40px] rounded-[12px] border border-camo-300 bg-transparent p-[10px] text-center text-yellow-100 transition-colors focus:border-yellow-100 disabled:text-camo-300 md:h-[62px] md:w-[50px] md:rounded-[15px]"
                              maxLength="1"
                              value=""
                            />
                            <div className="absolute bottom-[10px] m-auto h-[2px] w-[24px] bg-camo-300 opacity-40 transition peer-focus:translate-y-[11px] peer-focus:scale-x-150 peer-focus:opacity-0"></div>
                          </div>
                          <div className="relative flex justify-center">
                            <input
                              aria-label="Enter the Blast invite code Digit 4"
                              id="early-access-digit-4"
                              autoComplete="off"
                              className="typography-brand-heading-4-caps md:typography-brand-heading-3-caps peer h-[50px] w-[40px] rounded-[12px] border border-camo-300 bg-transparent p-[10px] text-center text-yellow-100 transition-colors focus:border-yellow-100 disabled:text-camo-300 md:h-[62px] md:w-[50px] md:rounded-[15px]"
                              maxLength="1"
                              value=""
                            />
                            <div className="absolute bottom-[10px] m-auto h-[2px] w-[24px] bg-camo-300 opacity-40 transition peer-focus:translate-y-[11px] peer-focus:scale-x-150 peer-focus:opacity-0"></div>
                          </div>
                          <div className="relative flex justify-center">
                            <input
                              aria-label="Enter the Blast invite code Digit 5"
                              id="early-access-digit-5"
                              autoComplete="off"
                              className="typography-brand-heading-4-caps md:typography-brand-heading-3-caps peer h-[50px] w-[40px] rounded-[12px] border border-camo-300 bg-transparent p-[10px] text-center text-yellow-100 transition-colors focus:border-yellow-100 disabled:text-camo-300 md:h-[62px] md:w-[50px] md:rounded-[15px]"
                              maxLength="1"
                              value=""
                            />
                            <div className="absolute bottom-[10px] m-auto h-[2px] w-[24px] bg-camo-300 opacity-40 transition peer-focus:translate-y-[11px] peer-focus:scale-x-150 peer-focus:opacity-0"></div>
                          </div>
                        </div>
                      </fieldset>
                      <div className="transition-[filter]">
                        <button
                          disabled
                          className="select-none disabled:cursor-not-allowed disabled:bg-camo-300 disabled:text-gray-800 typography-brand-body-l-caps sm:max-md:min-h-[36px] sm:max-md:py-1.5 min-h-[40px] px-6 py-2 transition-colors will-change-transform [transform:translateZ(0)] rounded-bl-md rounded-tr-md [clip-path:polygon(20px_0,100%_0,100%_50%,calc(100%-20px)_100%,0_100%,0_50%)] bg-yellow-300 focus-visible:bg-white active:bg-white media-hover:hover:bg-white text-black"
                        >
                          Enter Invite Code
                        </button>
                      </div>
                    </form>
                    <div className="absolute right-0 top-0"></div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Airdrop;
