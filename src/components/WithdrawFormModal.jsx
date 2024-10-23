import React from 'react'

const WithdrawFormModal = () => {
    return (
        <div className="pointer-events-none fixed inset-0 z-50">
            <div role="presentation" className="pointer-events-auto absolute inset-0 bg-black/90"></div>
            <div data-focus-guard="true" tabIndex="0" style={{ width: '1px', height: '0px', padding: '0px', overflow: 'hidden', position: 'fixed', top: '1px', left: '1px' }}></div>
            <div data-focus-lock-disabled="false" className="pointer-events-auto">
                <div className="pointer-events-none absolute inset-0 z-50 flex items-center justify-center">
                    <div className="rounded-[6px] p-[1px] bg-camo-400 pointer-events-auto" aria-modal="true" aria-label="Select token" role="dialog" style={{ clipPath: 'polygon(101.5px 24px, 125.5px 0px, 100% 0px, 100% calc(100% - 56px), calc(100% - 56px) 100%, 0px 100%, 0px 60px, 36px 24px)' }}>
                        <div className="relative h-max rounded-[5px] bg-camo-700 w-max px-6 xs:px-8 pb-14 pt-16" style={{ clipPath: 'polygon(101.5px 24px, 125.5px 0px, 100% 0px, 100% calc(100% - 56px), calc(100% - 56px) 100%, 0px 100%, 0px 60px, 36px 24px)' }}>
                            <div className="absolute right-0 top-0 px-6 xs:px-8 py-3">
                                <h2 className="typography-brand-body-l-caps text-yellow-100">Select Token</h2>
                            </div>
                            <div className="absolute left-0 w-full bottom-5 pl-6 pr-[56px]">
                                <div className="w-full overflow-hidden">
                                    <div className="text-camo-500">
                                        <svg fill="none" height="9" viewBox="0 0 250 9" width="250" xmlns="http://www.w3.org/2000/svg">
                                            <g id="Group 17">
                                                <rect fill="currentColor" height="7" id="Rectangle 7" width="74" y="0.75"></rect>
                                                <circle cx="97.6632" cy="4.41323" fill="currentColor" id="Ellipse 44" r="1.46011"></circle>
                                                <circle cx="107.398" cy="4.41323" fill="currentColor" id="Ellipse 45" r="1.46011"></circle>
                                                <rect fill="currentColor" height="7" id="Rectangle 15" width="26" x="224" y="1.24805"></rect>
                                                <rect fill="currentColor" height="6.48937" id="Rectangle 8" width="3.08245" x="89" y="1.00586"></rect>
                                                <rect fill="currentColor" height="6.48937" id="Rectangle 16" width="3.08245" x="76.9883" y="1.00586"></rect>
                                                <rect fill="currentColor" height="6.48937" id="Rectangle 9" width="3.08245" x="121.008" y="1.00586"></rect>
                                                <rect fill="currentColor" height="6.48937" id="Rectangle 10" width="3.08245" x="126.039" y="1.00586"></rect>
                                                <rect fill="currentColor" height="6.48937" id="Rectangle 12" width="3.08245" x="196.18" y="1.00586"></rect>
                                                <rect fill="currentColor" height="6.48937" id="Rectangle 13" width="3.08245" x="186.18" y="1.00586"></rect>
                                                <rect fill="currentColor" height="6.48937" id="Rectangle 14" width="3.08245" x="218.18" y="1.00586"></rect>
                                                <rect fill="currentColor" height="6.48937" id="Rectangle 11" width="3.08245" x="190.93" y="1.00586"></rect>
                                                <circle cx="134.64" cy="4.41323" fill="currentColor" id="Ellipse 41" r="1.46011"></circle>
                                                <circle cx="139.507" cy="4.41323" fill="currentColor" id="Ellipse 42" r="1.46011"></circle>
                                                <circle cx="144.374" cy="4.41323" fill="currentColor" id="Ellipse 43" r="1.46011"></circle>
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="divide-y divide-camo-400">
                                <button disabled value="ETH" className="group flex w-72 items-center gap-2 p-2 transition-colors enabled:hover:bg-camo-600 enabled:hover:text-white disabled:text-camo-300 text-yellow-100">
                                    <img alt="$ETH Token" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" src="/icons/eth-color.svg" style={{ color: 'transparent' }} />
                                    <div className="typography-brand-heading-3 text-camo-300 text-current">ETH</div>
                                    <div className="typography-brand-body-l flex-1 text-right text-camo-200 text-current">0.00</div>
                                    <svg viewBox="0 0 24 24" style={{ height: '24px', width: '24px' }}>
                                        <use xlinkHref="/icons/library.svg#checkmark-circle"></use>
                                    </svg>
                                </button>
                                <button disabled value="USDB" className="group flex w-72 items-center gap-2 p-2 transition-colors enabled:hover:bg-camo-600 enabled:hover:text-white disabled:text-camo-300 text-camo-200">
                                    <img alt="$USDB Token" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" src="/icons/usdb-color.svg" style={{ color: 'transparent' }} />
                                    <div className="typography-brand-heading-3 text-camo-300 text-current">USDB</div>
                                    <div className="typography-brand-body-l flex-1 text-right text-camo-200 text-current">0.00</div>
                                </button>
                                <button disabled value="WBTC" className="group flex w-72 items-center gap-2 p-2 transition-colors enabled:hover:bg-camo-600 enabled:hover:text-white disabled:text-camo-300 text-camo-200">
                                    <img alt="$WBTC (Wrapped Bitcoin) Token" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" src="/icons/wbtc-color.svg" style={{ color: 'transparent' }} />
                                    <div className="typography-brand-heading-3 text-camo-300 text-current">WBTC</div>
                                    <div className="typography-brand-body-l flex-1 text-right text-camo-200 text-current">0.00</div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div data-focus-guard="true" tabIndex="0" style={{ width: '1px', height: '0px', padding: '0px', overflow: 'hidden', position: 'fixed', top: '1px', left: '1px' }}></div>
                </div>
            </div>
        </div>
    )
}

export default WithdrawFormModal
