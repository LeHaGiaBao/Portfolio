import React from 'react';
import styles from './BannerProject.module.scss'
import Image from 'next/image';
import adventure from '@/assets/Projects/adventure.png'

const Fade = require('react-reveal/Fade')

function BannerProject() {
    return (
        <>
            <section className="pb-10 sm:pb-16 lg:pb-24">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-12">
                        <Fade left>
                            <div className="relative lg:mb-12">
                                <div className="pl-12 pr-12 lg:pr-6">
                                    <Image className="relative rounded-lg shadow-lg w-full h-full" src={adventure} alt="" />
                                </div>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="2xl:pl-16">
                                <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-300 mb-5">WebDev Adventure</h2>
                                <p className="text-lg md:text-xl leading-relaxed text-gray-900 dark:text-gray-300">An academic competition for students who love programming</p>
                            </div>
                        </Fade>
                    </div>
                </div>
            </section>
        </>
    );
}

export default BannerProject;