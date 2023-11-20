import React from 'react';
import styles from './Footer.module.scss'
import Image from 'next/image';
import Link from 'next/link';
import Social from '@/components/Footer/Social';
import SubFooter from '@/components/Footer/SubFooter';
import logo from '@/assets/Logo/logo.png';
import {
    Sms,
    Call,
    Location,
} from 'iconsax-react';
import { IoMailOutline } from 'react-icons/io5';
import { BsTelephone } from 'react-icons/bs';
import { MdOutlinePlace } from 'react-icons/md';
import { MenuItem } from '@/config/menu';
import { email, phone, address } from '@/data/contact';

function Footer() {
    return (
        <>
            <footer className="py-12 text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="text-center xl:flex xl:items-center xl:justify-between xl:text-left">
                        <div className="">
                            <a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 lg:justify-start">
                                <div className="flex items-center justify-center w-36 h-36">
                                    <Image src={logo} alt='image' className='rounded-full' />
                                </div>
                                <h1 className="mt-2 self-center lg:text-3xl text-2xl font-semibold whitespace-nowra relative text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Le Ha Gia Bao</h1>
                            </a>
                        </div>
                        <div className="items-center mt-8 xl:mt-0 xl:flex xl:justify-end xl:space-x-8">
                            {
                                MenuItem.map(({ id, link, content }) => {
                                    return (
                                        <RenderMenu key={id} link={link} content={content} />
                                    )
                                })
                            }
                            <div className="w-full h-px mt-8 mb-5 xl:w-px xl:m-0 xl:h-20 bg-black dark:bg-gray-50/20"></div>
                            <div>
                                <a href={`mailto:${email}`} className="mb-4 flex items-center justify-center lg:justify-start hover:underline">
                                    <Sms className="mr-3 h-5 w-5" />
                                    {email}
                                </a>
                                <a href={`tel:${phone}`} className="mb-4 flex items-center justify-center lg:justify-start hover:underline">
                                    <Call className='mr-3 h-5 w-5' />
                                    {phone}
                                </a>
                                <a href="https://www.google.com/maps/place/H%E1%BB%93+Ch%C3%AD+Minh,+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh/@10.754792,106.6952276,10z/data=!3m1!4b1!4m6!3m5!1s0x317529292e8d3dd1:0xf15f5aad773c112b!8m2!3d10.8230989!4d106.6296638!16zL20vMGhuNGg" className="flex items-center justify-center lg:justify-start hover:underline">
                                    <Location className='mr-3 h-5 w-5' />
                                    {address}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="my-6sm:mx-autoborder-gray-700 lg:my-8 my-5" />
                <Social />
            </footer>
            <SubFooter />
        </>
    );
}

const RenderMenu = ({ link, content }: any) => {
    return (
        <Link href={`${link}`}>
            <p className="mb-4 flex items-center justify-center lg:justify-start hover:underline capitalize">
                {content}
            </p>
        </Link>
    )
}

export default Footer