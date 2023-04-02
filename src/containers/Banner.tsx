import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import image from '@/assets/LeHaGiaBao/image.png'

export default function Banner() {
    return (
        <>
            <section className="text-gray-800 banner">
                <div className="lg:mx-36 pt-20 pb-20">
                    <div className="container m-auto lg:my-28 my-20 px-6 text-gray-600 md:px-12 xl:px-6">
                        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                            <div className="md:7/12 lg:w-8/12">
                                <h1 className="text-5xl font-bold leading-none sm:text-6xl flex">
                                    👋 Hi
                                </h1>
                                <p className="text-sky-600 text-5xl font-bold leading-none sm:text-6xl mt-3">I&apos;m Le Ha Gia Bao</p>
                                <br />
                                <p className="mt-5 mb-8 text-2xl sm:mb-12">I&apos;m a Web Developer, welcome to my portfolio.
                                    <br className="hidden md:inline lg:hidden" /> The sky was cloudless and of a deep dark blue. The spectacle before us was indeed sublime.
                                </p>
                                <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                                    <Link href="/about">
                                        <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-lg px-8 py-3 text-center mr-2 mb-2">
                                            Read more
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            <Image src={image} alt="image" className="rounded-full md:5/12 lg:w-4/12" />
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
}