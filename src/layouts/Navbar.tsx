import Link from "next/link";
import Image from 'next/image';
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import logo from '@/assets/Logo/logo.png';
import { MenuItem } from "@/data/menu";
import { HiBars3BottomRight } from 'react-icons/hi2'
import { useTheme } from "next-themes";
import { FiSun } from 'react-icons/fi'
import { BsMoonStarsFill } from 'react-icons/bs'

export default function Navbar() {
    const [isShadow, setShadow] = useState(false)
    const [isOpened, setOpen] = useState(false)
    const [mounted, setMounted] = useState(false);

    const openMenu = () => setOpen(true)
    const closeMenu = () => setOpen(false)

    const { systemTheme, theme, setTheme } = useTheme()

    const onScroll = () => {
        const y = window.scrollY;
        if (y === 0) setShadow(false)
        else setShadow(true)
    }

    useEffect(function onFirstMount() {
        window.addEventListener('scroll', onScroll);
        setMounted(true)
    }, []);

    const renderThemeChanger = () => {
        if (!mounted) return null;

        const currentTheme = theme === "system" ? systemTheme : theme;

        if (currentTheme === "dark") {
            return (
                <FiSun className="w-7 h-7 text-yellow-500 hidden md:block" role="button" onClick={() => setTheme('light')} />
            )
        } else {
            return (
                <BsMoonStarsFill className="w-7 h-7 text-gray-900 hidden md:block" role="button" onClick={() => setTheme('dark')} />
            )
        }
    };

    return (
        <>
            <nav className={`z-50 bg-primary border-primary px-2 sm:px-4 py-3 fixed w-full dark:bg-dark ${isShadow ? 'on-scroll' : ''}`}>
                <div className="container flex flex-wrap items-center justify-between mx-auto dark:bg-dark">
                    <Link href="/">
                        <div className="flex items-center">
                            <Image src={logo} className="h-14 w-14 mr-3 rounded-full" alt="logo" />
                            <h1 className="mt-2 self-center lg:text-3xl text-2xl font-semibold whitespace-nowra relative text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Le Ha Gia Bao</h1>
                        </div>
                    </Link>
                    <button onClick={() => isOpened === false ? openMenu() : closeMenu()} type="button" className="inline-flex items-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <HiBars3BottomRight className="w-10 h-10" />
                    </button>
                    {
                        isOpened === true
                            ?
                            <div className="w-full md:block md:w-auto">
                                <ul className="h-screen flex flex-col py-5 border rounded-lg bg-primary dark:bg-dark md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0" onClick={() => closeMenu()}>
                                    {
                                        MenuItem.map(({ id, link, content }) => {
                                            return (
                                                <NavBarItem key={id} link={link} content={content} />
                                            )
                                        })
                                    }
                                    <li className="text-lg capitalize px-4 font-semibold mt-10 block md:hidden">
                                        {
                                            theme === "dark"
                                                ?
                                                <button className='flex block py-2 w-full text-black bg-white rounded md:bg-transparent md:text-blue-500 md:p-0'
                                                    onClick={() => {
                                                        setTheme('light')
                                                        closeMenu()
                                                    }}>
                                                    <FiSun className="w-7 h-7 text-yellow-500 mr-3 ml-5" role="button" />
                                                    Switch to light mode
                                                </button>
                                                :
                                                <button className='flex block py-2 w-full text-white bg-blue-500 rounded md:bg-transparent md:text-blue-500 md:p-0'
                                                    onClick={() => {
                                                        setTheme('dark')
                                                        closeMenu()
                                                    }}>
                                                    <BsMoonStarsFill className="w-7 h-7 text-white mr-3 ml-5" role="button" />
                                                    Switch to dark mode
                                                </button>
                                        }
                                    </li>
                                </ul >
                            </div >
                            :
                            <div className="hidden w-full md:block md:w-auto">
                                <ul className="flex flex-col p-4 mt-4 border border-primary rounded-lg bg-primary dark:bg-dark md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-primary">
                                    {
                                        MenuItem.map(({ id, link, content }) => {
                                            return (
                                                <NavBarItem key={id} link={link} content={content} />
                                            )
                                        })
                                    }
                                </ul >
                            </div >
                    }
                    {renderThemeChanger()}
                </div >
            </nav >
        </>
    );
}

const NavBarItem = ({ link, content }: any) => {
    const router = useRouter()

    return (
        <>
            <li className="text-lg capitalize px-4 font-semibold">
                <Link href={`${link}`}>
                    <div className={`${router.asPath === link ? 'block py-2 pl-3 pr-4 text-white bg-blue-500 rounded md:bg-transparent md:text-blue-500 md:p-0' : 'block py-2 pl-3 pr-4 text-gray-900 dark:text-gray-300 rounded hover:bg-primary md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0'}`}>
                        {content}
                    </div>
                </Link>
            </li>
        </>
    )
}