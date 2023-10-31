import Image from "next/image"

const Slide = require('react-reveal/Slide')

export default function EducationBlock({ image, school, degree, time }: any) {
    return (
        <>
            <Slide left>
                <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
                    <div className="flex items-center justify-center lg:col-span-1 col-span-full">
                        <Image src={image} alt="" className="object-cover object-center rounded bg-white w-32 h-32" />
                    </div>
                    <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
                        <span className="text-xl font-bold md:text-2xl text-gray-900 dark:text-gray-300">{school}</span>
                        <span className="mt-4 text-lg text-gray-700 dark:text-gray-500">{degree}</span>
                        <span className="mt-4 text-base tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">{time}</span>
                    </div>
                </div>
            </Slide>
        </>
    )
}