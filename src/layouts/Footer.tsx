import Image from 'next/image';
import Social from '@/components/Footer/Social';
import SubFooter from '@/components/Footer/SubFooter';

import icon from '@/assets/Image/icon.png';

import { IoMailOutline } from 'react-icons/io5'
import { BsTelephone } from 'react-icons/bs'
import { MdOutlinePlace } from 'react-icons/md'
import Link from 'next/link';

function Footer() {
    return (
        <>
            <footer className="bg-gray-900">
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div className="grid-1 grid gap-8 md:grid-cols-3 lg:grid-cols-3 justify-items-center">
                        <div className="">
                            <a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 lg:justify-start">
                                <div className="flex items-center justify-center w-36 h-36">
                                    <Image src={icon} alt='image' className='rounded-full' />
                                </div>
                                <span className="self-center text-3xl font-semibold">Le Ha Gia Bao</span>
                            </a>
                        </div>
                        <div>
                            <h6
                                className="mb-4 flex justify-center font-semibold text-xl uppercase md:justify-start">
                                Menu
                            </h6>
                            <Link href='/'>
                                <p className="mb-4 flex items-center justify-center md:justify-start hover:underline">
                                    Home
                                </p>
                            </Link>
                            <Link href='/about'>
                                <p className="mb-4 flex items-center justify-center md:justify-start hover:underline">
                                    About
                                </p>
                            </Link>
                            <Link href='/services'>
                                <p className="mb-4 flex items-center justify-center md:justify-start hover:underline">
                                    Services
                                </p>
                            </Link>
                            <Link href='/portfolio'>
                                <p className="mb-4 flex items-center justify-center md:justify-start hover:underline">
                                    Portfolio
                                </p>
                            </Link>
                            <Link href='/contact'>
                                <p className="mb-4 flex items-center justify-center md:justify-start hover:underline">
                                    Contact
                                </p>
                            </Link>
                        </div>
                        <div>
                            <h6
                                className="mb-4 flex justify-center font-semibold text-xl uppercase md:justify-start">
                                Contact
                            </h6>
                            <a href="mailto:lehagiabao0205@gmail.com" className="mb-4 flex items-center justify-center md:justify-start hover:underline">
                                <IoMailOutline className="mr-3 h-5 w-5" />
                                lehagiabao0205@gmail.com
                            </a>
                            <a href="tel:0907311574" className="mb-4 flex items-center justify-center md:justify-start hover:underline">
                                <BsTelephone className='mr-3 h-5 w-5' />
                                0907311574
                            </a>
                            <a href="https://www.google.com/maps/place/H%E1%BB%93+Ch%C3%AD+Minh,+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh/@10.754792,106.6952276,10z/data=!3m1!4b1!4m6!3m5!1s0x317529292e8d3dd1:0xf15f5aad773c112b!8m2!3d10.8230989!4d106.6296638!16zL20vMGhuNGg" className="flex items-center justify-center md:justify-start hover:underline">
                                <MdOutlinePlace className='mr-3 h-5 w-5' />
                                Ho Chi Minh City
                            </a>
                        </div>
                    </div>
                    <hr className="my-6sm:mx-autoborder-gray-700 lg:my-8 my-5" />
                    <Social />
                </div>
            </footer>
            <SubFooter />
        </>
    );
}

export default Footer