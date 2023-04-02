import Link from "next/link";
import Image from 'next/image';
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import icon from '@/assets/Image/icon.png';

export default function Navbar() {
    const item = [
        {
            id: 1,
            link: "/",
            content: 'home',
        },
        {
            id: 2,
            link: "/about",
            content: 'about',
        },
        {
            id: 3,
            link: "/services",
            content: 'services',
        },
        {
            id: 4,
            link: "/portfolio",
            content: 'portfolio',
        },
        {
            id: 5,
            link: "/contact",
            content: 'contact',
        },
    ]

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
            <nav className={`bg-primary border-primary px-2 sm:px-4 py-3 rounded fixed w-full ${isShadow ? 'on-scroll' : ''}`}>
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <Link href="/">
                        <div className="flex items-center">
                            <Image src={icon} className="h-14 w-14 mr-3 rounded-full" alt="Logo" />
                            <h1 className="font-sacramento self-center lg:text-4xl text-2xl font-bold whitespace-nowrap text-blue-500">Le Ha Gia Bao</h1>
                        </div>
                    </Link>
                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="flex flex-col p-4 mt-4 border border-primary rounded-lg bg-primary md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-primary">
                            {
                                item.map(({ id, link, content }) => {
                                    return (
                                        <NavBarItem key={id} link={link} content={content} />
                                    )
                                })
                            }
                        </ul >
                    </div >
                </div >
            </nav >
        </>
    );
}

const NavBarItem = ({ link, content }: any) => {
    const router = useRouter()

    return (
        <li className="text-base capitalize px-4 font-semibold">
            <Link href={`${link}`}>
                <div className={`${router.asPath === link ? 'block py-2 pl-3 pr-4 text-white bg-blue-500 rounded md:bg-transparent md:text-blue-500 md:p-0' : 'block py-2 pl-3 pr-4 text-gray-600 rounded hover:bg-primary md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0'}`}>
                    {content}
                </div>
            </Link>
        </li>
    )
}