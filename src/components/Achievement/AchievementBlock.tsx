import Image from "next/image"

const Fade = require('react-reveal/Fade')

export default function AchievementBlock({ image, title, time, organization }: any) {
    return (
        <>
            <Fade bottom>
                <div className="overflow-hidden my-5 text-black border border-gray-200 dark:border-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg shadow">
                    <div className="p-8">
                        <div className="flex items-center">
                            <Image src={image} alt='' className="flex-shrink-0 w-20 h-auto" />
                            <div className="ml-5 mr-auto">
                                <p className="text-xl font-semibold">{title}</p>
                                <p className="mt-3 text-lg">{time}</p>
                            </div>
                        </div>
                        <p className="text-xl leading-relaxed mt-7">Issued by {organization}</p>
                    </div>
                </div>
            </Fade>
        </>
    )
}