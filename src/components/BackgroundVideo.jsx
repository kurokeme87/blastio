import Video from '../assets/home-splash.webm'
import VideoCircle1 from '../assets/Blast.webm'
import VideoCircle2 from '../assets/Blast_2.webm'

const BackgroundVideo = () => {
    return (
        <div className="relative flex items-center justify-center h-full w-full">
            {/* Video Background */}
            <video
                className="absolute top-0 bottom-0 right-0 left-0  mx-auto h-full object-cover"
                src={Video} // Path to your video file
                autoPlay
                loop
                muted
            />

            {/* Overlay content */}
            <div className="flex flex-1 h-[900px] gap-4 z-50 flex-col justify-center items-center sm:mr-6 md:mr-16 relative animate-enter-fade">
                <div className='flex  items-center justify-center gap-8 text-center flex-col'>
                    <h1 className="text-6xl glow-text drop-shadow-glow font-semibold ">The Fullstack Chain</h1>
                    <h3 className="text-[40px] text-[#c3d4a5] ">The only EVM chain with native <br /> yield for ETH and stablecoins.</h3>
                    <div className='flex items-center gap-6 w-full justify-center'>
                        <div className='flex items-center rounded-full gap-2 h-[39px] w-[165px] bg-[#404833]'>
                            USDC
                        </div>
                        <div className='flex items-center rounded-full gap-2 h-[39px] w-[165px] bg-[#404833]'>
                            ETH
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center text-2xl flex-col gap-6">
                    <button className="select-none drop-shadow-glow w-[16rem] disabled:cursor-not-allowed disabled:bg-camo-300 disabled:text-gray-800 typography-brand-body-l-caps sm:max-md:min-h-[36px] sm:max-md:py-1.5 min-h-[40px] px-6 py-2 transition-colors will-change-transform [transform:translateZ(0)] rounded-bl-md rounded-tr-md [clip-path:polygon(20px_0,100%_0,100%_50%,calc(100%-20px)_100%,0_100%,0_50%)]  bg-yellow-300 group-focus-visible:bg-white group-active:bg-white media-hover:hover:bg-white text-black">Bridge & Earn</button>
                    <p className="interactive-text typography-brand-body-l-caps tracking-widest text-yellow-300">Learn More</p>
                </div>
            </div>


            {/* Dark overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-0">
                <video
                    className="absolute left-0 top-0 -z-10 hidden h-full sm:block"
                    src={VideoCircle1} // Path to your video file
                    autoPlay
                    loop
                    muted
                />
                <video
                    className="absolute right-0 top-0 -z-10 hidden h-full sm:block"
                    src={VideoCircle2} // Path to your video file
                    autoPlay
                    loop
                    muted
                />
            </div>
        </div>
    );
};

export default BackgroundVideo;
