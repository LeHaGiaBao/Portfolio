import Image from 'next/image'
import Background from '@/assets/image/Background.gif'
import Social from '@/components/Contact/Social'
import SeeMyResume from '@/components/Button/SeeMyResume'

export default function ContactMe() {
    return (
        <>
            <section className="pb-10 sm:pb-16 lg:pb-24">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-12">
                        <div className="relative lg:mb-12">
                            <div className="pl-12 pr-12 lg:pr-6">
                                <Image className="relative rounded-lg shadow-lg" src={Background} alt="" />
                            </div>
                        </div>
                        <div className="2xl:pl-16">
                            <p className="text-xl leading-relaxed text-gray-900 dark:text-white mb-10">I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.</p>
                            <Social />
                            <div className='mt-10 text-center'>
                                <SeeMyResume />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}