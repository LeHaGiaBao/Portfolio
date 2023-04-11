import Image from "next/image"

export default function TimelineBlock({ image, title, organization, time }: any) {
    return (
        <>
            <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
                <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm"></div>
                <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                    <div className="flex-shrink-0 w-32 h-32 bg-white text-indigo-500 rounded-xl inline-flex items-center justify-center">
                        <Image src={image} alt='image' className='w-20 h-20' />
                    </div>
                    <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                        <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                            {title}
                        </h2>
                        <p className="leading-relaxed">{organization}</p>
                        <p className="leading-relaxed">{time}</p>
                    </div>
                </div>
            </div>
        </>
    )
}