import Image from 'next/image'
import Background from '@/assets/image/Background.gif'
import { introwork } from '@/data/aboutme'

const Fade = require('react-reveal/Fade')

export default function About() {
    return (
        <>
            <section className="pb-10 sm:pb-16 lg:pb-24">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-12">
                        <Fade left>
                            <div className="relative lg:mb-12">
                                <div className="pl-12 pr-12 lg:pr-6">
                                    <Image className="relative rounded-lg shadow-lg" src={Background} alt="" />
                                </div>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="2xl:pl-16">
                                <p className="text-lg md:text-xl leading-relaxed text-gray-900 dark:text-gray-300">{introwork}</p>
                            </div>
                        </Fade>
                    </div>
                </div>
            </section>
        </>
    )
}