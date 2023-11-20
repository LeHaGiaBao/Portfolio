import React from 'react';
import styles from './AboutMe.module.scss'
import Image from "next/image"
import Frame2 from '@/assets/LeHaGiaBao/Frame2.png'
import { summary } from "@/data/aboutme"
import { ArrowRight } from 'iconsax-react';

const Fade = require('react-reveal/Fade')

function AboutMe() {
    return (
        <>
            <section className="pt-10 pb-20 overflow-hidden text-gray-900 dark:text-gray-300">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="grid items-center grid-cols-1 lg:grid-cols-2">
                        <Fade right>
                            <div>
                                <p className="max-w-xl mt-3 text-xl leading-relaxed md:mt-8">
                                    My name&apos;s Bao,
                                    {' '}
                                    <span className="relative inline-block">
                                        <span className="absolute inline-block w-full bottom-0.5 h-1 bg-gradient-to-r from-cyan-500 to-blue-500"></span>
                                        <span className="relative">Le Ha Gia Bao</span>
                                    </span>
                                </p>
                                <p className="max-w-2xl mt-3 text-xl leading-relaxed">
                                    {summary}
                                </p>
                                <a href="about">
                                    <p className="flex row items-center mt-4 text-xl md:mt-8 hover:underline">
                                        Learn more
                                        <ArrowRight className='ml-2 mt-1' />
                                    </p>
                                </a>
                            </div>
                        </Fade>
                        <Fade left>
                            <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                                <Image src={Frame2} alt="" className="mx-auto rounded-lg shadow-lg bg-gray-500 md:5/12 lg:w-9/12" />
                            </div>
                        </Fade>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutMe;