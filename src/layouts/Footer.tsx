import Image from 'next/image';
import Link from 'next/link';
import Social from '@/components/Footer/Social';
import SubFooter from '@/components/Footer/SubFooter';
import logo from '@/assets/Logo/logo.png';
import { IoMailOutline } from 'react-icons/io5';
import { BsTelephone } from 'react-icons/bs';
import { MdOutlinePlace } from 'react-icons/md';
import { MenuItem } from '@/data/menu';
import { email, phone, address } from '@/data/contact';

export default function Footer() {
    return (
        <>
            <footer className="bg-gray-900 text-white">
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div className="grid-1 grid gap-8 md:grid-cols-3 lg:grid-cols-3 justify-items-center">
                        <div className="">
                            <a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 lg:justify-start">
                                <div className="flex items-center justify-center w-36 h-36">
                                    <Image src={logo} alt='image' className='rounded-full' />
                                </div>
                                <h1 className="mt-2 self-center lg:text-3xl text-2xl font-semibold whitespace-nowra relative text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Le Ha Gia Bao</h1>
                            </a>
                        </div>
                        <div>
                            <h6
                                className="mb-4 flex justify-center font-semibold text-xl uppercase md:justify-start">
                                Menu
                            </h6>
                            {
                                MenuItem.map(({ id, link, content }) => {
                                    return (
                                        <RenderMenu key={id} link={link} content={content} />
                                    )
                                })
                            }
                        </div>
                        <div>
                            <h6
                                className="mb-4 flex justify-center font-semibold text-xl uppercase md:justify-start">
                                Contact
                            </h6>
                            <a href={`mailto:${email}`} className="mb-4 flex items-center justify-center md:justify-start hover:underline">
                                <IoMailOutline className="mr-3 h-5 w-5" />
                                {email}
                            </a>
                            <a href={`tel:${phone}`} className="mb-4 flex items-center justify-center md:justify-start hover:underline">
                                <BsTelephone className='mr-3 h-5 w-5' />
                                {phone}
                            </a>
                            <a href="https://www.google.com/maps/place/H%E1%BB%93+Ch%C3%AD+Minh,+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh/@10.754792,106.6952276,10z/data=!3m1!4b1!4m6!3m5!1s0x317529292e8d3dd1:0xf15f5aad773c112b!8m2!3d10.8230989!4d106.6296638!16zL20vMGhuNGg" className="flex items-center justify-center md:justify-start hover:underline">
                                <MdOutlinePlace className='mr-3 h-5 w-5' />
                                {address}
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

const RenderMenu = ({ link, content }: any) => {
    return (
        <Link href={`${link}`}>
            <p className="mb-4 flex items-center justify-center md:justify-start hover:underline capitalize">
                {content}
            </p>
        </Link>
    )
}