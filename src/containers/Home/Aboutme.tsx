import Image from "next/image"
import Avatar from '@/assets/LeHaGiaBao/Avatar.jpg'
import { summary } from "@/data/aboutme"
import Bounce from 'react-reveal/Bounce';

export default function AboutMe() {
    return (
        <>
            <section className="pt-10 pb-20 overflow-hidden text-gray-900 dark:text-white">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="grid items-center grid-cols-1 md:grid-cols-2">
                        <Bounce right>
                            <div>
                                <p className="max-w-lg mt-3 text-xl leading-relaxed md:mt-8">
                                    My name&apos;s Bao,
                                    {' '}
                                    <span className="relative inline-block">
                                        <span className="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300"></span>
                                        <span className="relative">Le Ha Gia Bao.</span>
                                    </span>
                                </p>
                                <p className="max-w-lg mt-3 text-xl leading-relaxed">
                                    {summary}
                                </p>
                                <p className="mt-4 text-xl md:mt-8">
                                    Read more
                                    <a href="about" title="" className="transition-all duration-200 text-sky-500 hover:text-sky-600 hover:underline"> about me</a>
                                </p>
                            </div>
                        </Bounce>
                        <Bounce left>
                            <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                                <Image src={Avatar} alt="" className="mx-auto rounded-lg shadow-lg bg-gray-500 md:5/12 lg:w-9/12" />
                            </div>
                        </Bounce>
                    </div>
                </div>
            </section>
        </>
    )
}