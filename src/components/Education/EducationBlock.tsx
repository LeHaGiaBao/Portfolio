import Image from "next/image"

export default function EducationBlock({ image, school, degree, time }: any) {
    return (
        <>
            <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
                <div className="flex items-center justify-center lg:col-span-1 col-span-full">
                    <Image src={image} alt="" className="object-cover object-center w-full h-full rounded w-32 h-32" />
                </div>
                <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
                    <span className="text-xl font-bold md:text-2xl">{school}</span>
                    <span className="mt-4 text-lg text-gray-700">{degree}</span>
                    <span className="mt-4 text-xs tracking-wider uppercase text-sky-600">{time}</span>
                </div>
            </div>
        </>
    )
}