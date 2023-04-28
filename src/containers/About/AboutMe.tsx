import Image from 'next/image'
import Frame1 from '@/assets/LeHaGiaBao/Frame1.png'
import Avatar from '@/assets/LeHaGiaBao/Avatar.jpg'
import { introduce, goal, roadmap } from '@/data/aboutme'

const Fade = require('react-reveal/Fade')

export default function AboutMe() {
    return (
        <>
            <section className="pb-10 sm:pb-16 lg:pb-24">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-12">
                        <Fade left>
                            <div className="relative lg:mb-12">
                                <img className="absolute -right-0 -bottom-8 xl:-bottom-12 xl:-right-4" src="https://cdn.rareblocks.xyz/collection/celebration/images/content/3/dots-pattern.svg" alt="" />
                                <div className="pl-12 pr-12 lg:pr-6">
                                    <Image className="relative rounded-lg shadow-lg" src={Frame1} alt="" />
                                </div>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="2xl:pl-16 text-gray-900 dark:text-gray-300">
                                <h2 className="text-3xl font-bold leading-tight text-center md:text-5xl lg:text-5xl">Hey 👋 I am <br className="block sm:hidden" />Le Ha Gia Bao</h2>
                                <p className="text-lg md:text-xl leading-relaxed mt-9">
                                    {introduce}
                                </p>
                            </div>
                        </Fade>
                    </div>
                    <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-12 mt-10">
                        <Fade left>
                            <div className="2xl:pl-16 text-gray-900 dark:text-gray-300">
                                <p className="mt-5 text-lg md:text-xl leading-relaxed">
                                    {goal}
                                </p>
                                <p className="mt-5 text-lg md:text-xl leading-relaxed">
                                    {roadmap}
                                </p>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="relative lg:mb-12">
                                <div className="pl-12 pr-12 lg:pr-6">
                                    <Image className="relative rounded-lg shadow-lg" src={Avatar} alt="" />
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </section>
        </>
    )
}