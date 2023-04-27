import Image from 'next/image'
import Avatar from '@/assets/LeHaGiaBao/Avatar.jpg'
import { introduce, goal, roadmap } from '@/data/aboutme'

export default function AboutMe() {
    return (
        <>
            <section className="pb-10 sm:pb-16 lg:pb-24">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-12">
                        <div className="relative lg:mb-12">
                            <img className="absolute -right-0 -bottom-8 xl:-bottom-12 xl:-right-4" src="https://cdn.rareblocks.xyz/collection/celebration/images/content/3/dots-pattern.svg" alt="" />
                            <div className="pl-12 pr-12 lg:pr-6">
                                <Image className="relative rounded-lg shadow-lg" src={Avatar} alt="" />
                            </div>
                            {/* <div className="absolute left-0 pr-12 bottom-8 xl:bottom-20">
                                <div className="max-w-xs bg-blue-600 rounded-lg sm:max-w-md xl:max-w-md">
                                    <div className="px-3 py-4 sm:px-5 sm:py-8">
                                        <div className="flex items-start">
                                            <p className="text-3xl sm:text-4xl">👋</p>
                                            <blockquote className="ml-5">
                                                <p className="text-sm font-medium text-white sm:text-lg">“You made it so simple. My new site is so much faster and easier to work with than my old site.”</p>
                                            </blockquote>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                        <div className="2xl:pl-16">
                            <p className="text-xl leading-relaxed text-gray-900">
                                {introduce}
                            </p>
                            <p className="mt-5 text-xl leading-relaxed text-gray-900">
                                {goal}
                            </p>
                            <p className="mt-5 text-xl leading-relaxed text-gray-900">
                                {roadmap}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}