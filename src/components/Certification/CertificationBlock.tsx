import Image from "next/image"
import { AiOutlineArrowRight } from 'react-icons/ai'
import { motion } from "framer-motion";

export default function CertificationBlock({ image, certification, organization, time, link }: any) {
    return (
        <>
            <motion.div whileHover={{ scale: 1.1 }}>
                <div className="overflow-hidden text-black border border-gray-200 dark:border-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded shadow-xl">
                    <div className="p-8">
                        <div className="h-40">
                            <div className="flex items-center">
                                <Image src={image} className="flex-shrink-0 w-14 h-auto" alt="" />
                                <div className="ml-5 mr-auto h-20">
                                    <p className="text-xl font-semibold my-2">{certification}</p>
                                </div>
                            </div>
                            <p className="text-base font-bold mt-5 mb-2">Issued by: <span className="text-gray-600 dark:text-gray-500 font-light">{organization}</span> </p>
                            <p className="text-base leading-relaxed font-bold my-2">Time: <span className="text-gray-600 dark:text-gray-500 font-light">{time}</span></p>
                        </div>
                        <div className="text-center mt-5">
                            <a href={link} target=" _blank " className="inline-flex items-center justify-center pb-0.5 text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600">
                                Show certification
                                <AiOutlineArrowRight className="ml-2 font-extrabold" />
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}