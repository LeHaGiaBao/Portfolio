import Image from 'next/image'
import Contact from '@/assets/image/Contact.png'
import Social from '@/components/Contact/Social'
import SeeMyResume from '@/components/Contact/SeeMyResume'

const Fade = require('react-reveal/Fade')

export default function ContactMe() {
    return (
        <>
            <Fade bottom>
                <section className="py-10 md:py-5">
                    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-12">
                            <div className="relative lg:mb-12">
                                <div className="pl-12 pr-12 lg:pr-6">
                                    <Image className="relative" src={Contact} alt="" />
                                </div>
                            </div>
                            <div>
                                <p className="text-lg md:text-xl 2xl:pl-16 leading-relaxed text-gray-900 dark:text-gray-300 mb-10">
                                    I am available on almost every social media. You can message me, and I will reply within 24 hours. I&apos;d love to hear from you!
                                </p>
                                <Social />
                                {/* <div className='mt-10 text-center'>
                                    <SeeMyResume />
                                </div> */}
                            </div>
                        </div>
                    </div>
                </section>
            </Fade>
        </>
    )
}