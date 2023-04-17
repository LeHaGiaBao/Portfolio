import Image from "next/image"
import github from '@/assets/Logo/github.png'
import { AiOutlineArrowRight } from 'react-icons/ai'

export default function PortfolioBlock({ githublink, demo, image, time, name, des, view }: any) {
    return (
        <>
            <div className="overflow-hidden bg-white rounded-lg shadow">
                <div className="p-5">
                    <div className="relative">
                        <a href={demo} target=" _blank " title="" className="block aspect-w-4 aspect-h-3">
                            <Image src={image} alt="" className="object-cover w-full h-full" />
                        </a>
                    </div>
                    <span className="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase">{time}</span>
                    <p className="mt-5 text-2xl font-semibold text-black">
                        {name}
                    </p>
                    <p className="mt-4 text-base text-gray-600">{des}</p>
                </div>
                {
                    githublink === ""
                        ?
                        <div className="border-t border-gray-200">
                            <div className="flex">
                                <div className="flex items-center px-16 py-5">
                                    <a href={demo} target=" _blank " className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-20 h-9">
                                        <span className="block min-w-0 text-base font-semibold text-green-500 truncate text-center"> Demo </span>
                                    </a>
                                </div>

                                <a href={view} title="" className="flex-1 inline-flex items-center flex-shrink-0 px-4 py-5 text-base font-semibold transition-all duration-200 bg-white border-l border-gray-200 hover:bg-blue-600 hover:text-white">
                                    View Detail
                                    <AiOutlineArrowRight className="w-5 h-5 ml-2" />
                                </a>
                            </div>
                        </div>
                        :
                        <div className="border-t border-gray-200">
                            <div className="flex">
                                <div className="flex items-center px-10 py-5">
                                    <a href={githublink} target=" _blank " className="mr-5 flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9">
                                        <Image src={github} alt="" className="object-cover w-8 h-8 rounded-full" />
                                    </a>

                                    <a href={demo} target=" _blank " className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-20 h-9">
                                        <span className="block min-w-0 text-base font-semibold text-green-500 truncate text-center"> Demo </span>
                                    </a>
                                </div>

                                <a href={view} title="" className="flex-1 inline-flex items-center flex-shrink-0 px-4 py-5 text-base font-semibold transition-all duration-200 bg-white border-l border-gray-200 hover:bg-blue-600 hover:text-white">
                                    View Detail
                                    <AiOutlineArrowRight className="w-5 h-5 ml-2" />
                                </a>
                            </div>
                        </div>
                }
            </div >
        </>
    )
}