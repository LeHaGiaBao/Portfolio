import Image from "next/image"

export default function TimelineBlock({ ExID, image, title, organization, time }: any) {
    return (
        <>
            {
                ExID % 2 !== 0
                    ?
                    <div className="flex flex-row-reverse md:contents">
                        <div className="bg-blue-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md w-full">
                            <div className="flex-grow flex sm:items-center flex-col sm:flex-row">
                                <div className="flex-shrink-0 w-32 h-32 bg-white text-indigo-500 rounded-xl inline-flex items-center justify-center">
                                    <Image src={image} alt='image' className='w-20 h-20' />
                                </div>
                                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                    <h2 className="font-medium title-font text-white mb-1 text-xl">
                                        {title}
                                    </h2>
                                    <p className="leading-relaxed">{organization}</p>
                                    <p className="leading-relaxed">{time}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                            <div className="h-full w-6 flex items-center justify-center">
                                <div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
                            </div>
                            <div
                                className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"
                            ></div>
                        </div>
                    </div>
                    :
                    <div className="flex md:contents">
                        <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                            <div className="h-full w-6 flex items-center justify-center">
                                <div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
                            </div>
                            <div
                                className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"
                            ></div>
                        </div>
                        <div className="bg-blue-500 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md w-full"
                        >
                            <div className="flex-grow flex sm:items-center flex-col sm:flex-row">
                                <div className="flex-shrink-0 w-32 h-32 bg-white text-indigo-500 rounded-xl inline-flex items-center justify-center">
                                    <Image src={image} alt='image' className='w-20 h-20' />
                                </div>
                                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                    <h2 className="font-medium title-font text-white mb-1 text-xl">
                                        {title}
                                    </h2>
                                    <p className="leading-relaxed">{organization}</p>
                                    <p className="leading-relaxed">{time}</p>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}