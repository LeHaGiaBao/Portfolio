import Image from "next/image"
import { AiOutlineArrowRight } from 'react-icons/ai'

export default function CertificationBlock({ image, certification, organization, time, link }: any) {
    return (
        <>
            <div className="overflow-hidden bg-white rounded-md shadow">
                <div className="px-8 py-12">
                    <div className="relative w-24 h-24 mx-auto">
                        <Image src={image} alt="" className="relative object-cover w-30 h-30 mx-auto rounded" />
                    </div>
                    <blockquote className="h-10 my-8">
                        <p className="text-xl text-black font-medium">{certification}</p>
                    </blockquote>
                    <p className="my-5 text-lg text-gray-700">{organization}</p>
                    <p className="my-5 text-base text-gray-600">Issued {time}</p>
                    <a href={link} target=" _blank " className="inline-flex items-center justify-center pb-0.5 text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600">
                        Show certification
                        <AiOutlineArrowRight className="ml-2 font-extrabold" />
                    </a>
                </div>
            </div>
        </>
    )
}