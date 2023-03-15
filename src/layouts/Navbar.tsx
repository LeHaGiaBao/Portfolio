import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Navbar() {
    const router = useRouter()

    const [isShadow, setShadow] = useState(false)

    const onScroll = () => {
        const y = window.scrollY;
        if (y === 0) setShadow(false)
        else setShadow(true)
    }

    useEffect(function onFirstMount() {
        window.addEventListener('scroll', onScroll);
    }, []);

    return (
        <>

            <nav className={`bg-white border-gray-200 px-2 sm:px-4 py-3 rounded fixed w-full ${isShadow ? 'on-scroll' : ''}`}>
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <Link href="/">
                        <div className="flex items-center">
                            <h1 className="font-sacramento self-center lg:text-4xl text-2xl font-bold whitespace-nowrap text-blue-500">Le Ha Gia Bao</h1>
                        </div>
                    </Link>
                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
                            <li>
                                <Link href="/">
                                    <div className={`${router.asPath === "/" ? 'block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0' : 'block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0'}`}>
                                        Home
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link href="/about">
                                    <div className={`${router.asPath === "/about" ? 'block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0' : 'block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0'}`}>
                                        About
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link href="/skills">
                                    <div className={`${router.asPath === "/skills" ? 'block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0' : 'block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0'}`}>
                                        Skills
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link href="/portfolio">
                                    <div className={`${router.asPath === "/portfolio" ? 'block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0' : 'block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0'}`}>
                                        Portfolio
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact">
                                    <div className={`${router.asPath === "/contact" ? 'block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0' : 'block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0'}`}>
                                        Contact
                                    </div>
                                </Link>
                            </li>
                        </ul >
                    </div >
                </div >
            </nav >

        </>
    );
}