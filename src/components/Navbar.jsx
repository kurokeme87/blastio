import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'
import Logo_Mobile from '../assets/logo-mobile.png'
const Navbar = () => {
    const links = [
        {
            link: 'Vision',
            to: '/vision'
        },
        {
            link: 'Airdrop',
            to: '/airdrop'
        },
        {
            link: 'Leaderboard',
            to: '/leaderboard'
        },
        {
            link: 'Devs',
            to: '/devs'
        },
        {
            link: 'Bridge',
            to: '/bridge'
        },
        {
            link: 'Big Bang',
            to: '/big-bang'
        },

    ]
    return (
        <div className="relative w-full  bg-black z-[11] flex h-max justify-between px-6 pb-3 pt-9 md:ml-16 md:mr-14 md:pl-14 md:pr-0 md:pt-10 lg:pt-14 sm:mr-0 ">
            <div className='flex w-full items-center justify-start gap-2.5 md:gap-5'>
                <Link to='/' className='flex items-center justify-center' >
                    <img className='w-64 hidden lg:block' src={Logo} alt='' />
                    <img className='w-32 lg:hidden' src={Logo_Mobile} alt='' />
                </Link>
                {
                    links.map((link, i) => {
                        return (
                            <Link className=' px-2 py-2 md:px-4 text-[#9ba885] text-sm sm:text-xl' to={link.to} key={i}>
                                {link.link}
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Navbar
