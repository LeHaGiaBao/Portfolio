import Image from "next/image"
import { AiOutlineArrowRight } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
import { MdOutlineLaunch } from 'react-icons/md'
import { PATH_NAME } from "@/routes/pathName"

const Fade = require('react-reveal/Fade')

export default function PortfolioBlock({ githublink, demo, image, time, name, des, tech, view }: any) {
    return (
        <>
            <div className="overflow-hidden text-black border border-gray-200 dark:border-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg shadow">
                <div className="p-5 h-full">
                    <div className="relative">
                        {
                            demo === "" ?
                                <div title="" className="block aspect-w-4 aspect-h-3">
                                    <Image src={image} alt="" className="object-cover w-full h-52" />
                                </div>
                                :
                                <a href={demo} target=" _blank " title="" className="block aspect-w-4 aspect-h-3">
                                    <Image src={image} alt="" className="object-cover w-full h-52" />
                                </a>
                        }
                    </div>
                    <span className="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase">{time}</span>
                    <div className="flex items-center my-5 h-16">
                        <div className="mr-auto">
                            <p className="text-3xl font-semibold">
                                {name}
                            </p>
                        </div>
                        {/* <a href={`${PATH_NAME.PORTFOLIO}/${view}`}>
                            <AiOutlineArrowRight className="block w-6 h-6 text-blue-600" />
                        </a> */}
                    </div>
                    <p className="my-4 text-base font-bold">Description: <span className="text-gray-600 dark:text-gray-500 font-light">{des}</span> </p>
                    <p className="my-4 text-base font-bold">Technology: <span className="text-gray-600 dark:text-gray-500 font-light">{tech}</span></p>
                </div>
                {
                    githublink === "" && demo !== ""
                        ?
                        <div className="border-t border-gray-200">
                            <div className="flex">
                                <div className="flex items-center py-6 mx-auto">
                                    <a href={demo} target=" _blank " className="flex items-center justify-center transition-all duration-200 bg-transparent border text-green-500 hover:bg-green-500 hover:text-white border-gray-300 rounded w-36 h-10">
                                        <span className="block min-w-0 text-base font-semibold truncate text-center mr-1"> Demo </span>
                                        <MdOutlineLaunch className="object-cover w-6 h-6 rounded-full" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        : demo === ""
                            ?
                            <div className="border-t border-gray-200">
                                <div className="flex">
                                    <div className="flex items-center py-6 mx-auto">
                                        <a href={githublink} target=" _blank " className="flex items-center justify-center transition-all duration-200 bg-transparent border border-gray-300 text-black dark:text-white hover:bg-black hover:text-white rounded w-36 h-10">
                                            <span className="block min-w-0 text-base font-semibold truncate text-center mr-1"> GitHub </span>
                                            <AiFillGithub className="object-cover w-6 h-6 rounded-full" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            :
                            <div className="border-t border-gray-200">
                                <div className="flex">
                                    <div className="flex items-center py-6 mx-auto">
                                        <a href={githublink} target=" _blank " className="mr-2 flex items-center justify-center transition-all duration-200 bg-transparent border border-gray-300 text-black dark:text-white hover:bg-black hover:text-white rounded w-40 h-10">
                                            <span className="block min-w-0 text-base font-semibold truncate text-center mr-1"> GitHub </span>
                                            <AiFillGithub className="object-cover w-6 h-6 rounded-full" />
                                        </a>
                                        <a href={demo} target=" _blank " className="ml-2 flex items-center justify-center transition-all duration-200 bg-transparent border text-green-500 hover:bg-green-500 hover:text-white border-gray-300 rounded w-40 h-10">
                                            <span className="block min-w-0 text-base font-semibold truncate text-center mr-1"> Demo </span>
                                            <MdOutlineLaunch className="object-cover w-6 h-6 rounded-full" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                }
            </div >
        </>
    )
}