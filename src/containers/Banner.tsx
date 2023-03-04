import React from 'react';
import Image from 'next/image';
import Develop from '../assets/image/Develop.gif'

export default function Banner() {
    return (
        <>
            <section className="bg-gray-100 text-gray-800">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl">
                            Hi, I&apos;m
                            <br />
                            <span className="text-sky-600">Le Ha Gia Bao</span>
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">I&apos;m a Web Developer, welcome to my portfolio.
                            <br className="hidden md:inline lg:hidden" /> The sky was cloudless and of a deep dark blue. The spectacle before us was indeed sublime.
                        </p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-sky-600 text-gray-50 hover:">About me</a>
                        </div>
                    </div>
                    <Image src={Develop} alt="image" className="object-cover w-full xl:col-span-3" />
                </div>
            </section>
        </>
    );
}