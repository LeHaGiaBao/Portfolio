import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import image from '@/assets/LeHaGiaBao/image.png'

export default function Banner() {
    return (
        <>
            <section className="py-12 lg:py-32 text-gray-800">
                <div className="container grid gap-6 mx-auto text-left lg:grid-cols-2 xl:grid-cols-5">
                    <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-3">
                        <h1 className="lg:text-5xl text-4xl font-bold leading-none sm:text-6xl flex">
                            👋 Hi
                        </h1>
                        <p className="lg:text-5xl text-4xl font-bold leading-none sm:text-6xl mt-3">I&apos;m {" "}
                            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 -z-50">Le Ha Gia Bao</span>
                        </p>
                        <br />
                        <p className="lg:text-2xl text-xl my-5">Welcome to my personal website!
                        </p>
                        <p className="lg:text-2xl text-xl my-5">The sky was cloudless and of a deep dark blue. The spectacle before us was indeed sublime.
                        </p>
                        <div className="mt-10 flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <Link href="/about">
                                <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 drop-shadow-xl font-medium rounded-lg text-lg px-8 py-3 text-center mr-2 mb-2">
                                    Read more
                                </button>
                            </Link>
                        </div>
                    </div>
                    <Image src={image} alt="image" className="my-12 object-cover lg:w-96 w-80 mx-auto rounded-full xl:col-span-2" />
                </div>
            </section>
        </>
    );
}