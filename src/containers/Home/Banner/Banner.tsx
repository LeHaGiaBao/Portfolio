import React from 'react';
import styles from './Banner.module.scss'
import Image from 'next/image';
import Link from 'next/link';
import image from '@/assets/LeHaGiaBao/image.png'
import { welcome, homeintro } from '@/data/aboutme';
import { motion } from "framer-motion";
import { PATH_NAME } from '@/routes/pathName';

function Banner() {
    return (
        <>
            <section className="pt-14 md:pt-32 lg:pt-32 text-gray-900 dark:text-gray-300">
                <div className="container grid gap-6 mx-auto text-left lg:grid-cols-2 xl:grid-cols-5">
                    <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-3">
                        <motion.div
                            className="box"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.5,
                                ease: [0, 0.71, 0.2, 1.01]
                            }}>
                            <h1 className="lg:text-7xl text-4xl font-bold leading-none sm:text-6xl flex">
                                👋 Hi
                            </h1>
                            <p className="text-4xl font-bold leading-none sm:text-6xl lg:text-7xl mt-3">I&apos;m {" "}
                                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 -z-50">Le Ha Gia Bao</span>
                            </p>
                            <p className="lg:text-2xl text-xl my-5">
                                {welcome}
                            </p>
                            <p className="lg:text-2xl text-xl my-5">
                                {homeintro}
                            </p>
                            <div className="mt-10 flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                                <Link href={PATH_NAME.ABOUT}>
                                    <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 drop-shadow-xl font-medium rounded-lg text-lg px-8 py-3 text-center mr-2 mb-2">
                                        Read more
                                    </button>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                    <Image src={image} alt="image" className="object-cover lg:w-auto w-80 mx-auto rounded-full xl:col-span-2" />
                </div>
            </section>
        </>
    );
}

export default Banner;