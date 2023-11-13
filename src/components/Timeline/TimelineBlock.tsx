import React from "react"
import styles from './TimelineBlock.module.scss'
import Image from "next/image"

const Fade = require('react-reveal/Fade')

interface TimelineBlock {
    ExID: any,
    image: any,
    title: any,
    organization: any,
    time: any
}

function TimelineBlock({ ExID, image, title, organization, time }: TimelineBlock) {
    return (
        <>
            {
                ExID % 2 !== 0
                    ?
                    <div className="flex flex-row-reverse md:contents">
                        <Fade right>
                            <div className="text-black border border-gray-200 dark:border-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md w-full">
                                <div className="flex-grow flex sm:items-center flex-col sm:flex-row">
                                    <div className="flex-shrink-0 w-32 h-32 px-5 py-5 bg-white text-indigo-500 rounded-xl inline-flex items-center justify-center">
                                        <Image src={image} alt='image' />
                                    </div>
                                    <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                        <h2 className="font-medium dark:text-white title-font mb-1 text-xl">
                                            {title}
                                        </h2>
                                        <p className="leading-relaxed">{organization}</p>
                                        <p className="leading-relaxed text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-500">{time}</p>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                        <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                            <div className="h-full w-6 flex items-center justify-center">
                                <div className="h-full w-1 bg-cyan-500 pointer-events-none"></div>
                            </div>
                            <div
                                className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-cyan-400 shadow"
                            ></div>
                        </div>
                    </div>
                    :
                    <div className="flex md:contents">
                        <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                            <div className="h-full w-6 flex items-center justify-center">
                                <div className="h-full w-1 bg-cyan-500 pointer-events-none"></div>
                            </div>
                            <div
                                className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-cyan-400 shadow"
                            ></div>
                        </div>
                        <Fade left>
                            <div className="text-black border border-gray-200 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                                <div className="flex-grow flex sm:items-center flex-col sm:flex-row">
                                    <div className="flex-shrink-0 w-32 h-32 px-5 py-5 bg-white text-indigo-500 rounded-xl inline-flex items-center justify-center">
                                        <Image src={image} alt='image' />
                                    </div>
                                    <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                        <h2 className="font-medium dark:text-white title-font mb-1 text-xl">
                                            {title}
                                        </h2>
                                        <p className="leading-relaxed">{organization}</p>
                                        <p className="leading-relaxed text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-500">{time}</p>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </div>
            }
        </>
    )
}

export default TimelineBlock