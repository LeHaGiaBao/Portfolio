import Image from "next/image"
import { AiOutlineArrowRight } from 'react-icons/ai'

export default function CertificationBlock({ image, certification, organization, time, link }: any) {
    return (
        <>
            <div className="overflow-hidden bg-white rounded shadow-xl">
                <div className="p-8">
                    <div className="flex items-center">
                        <Image src={image} className="flex-shrink-0 w-14 h-auto" alt="" />
                        <div className="ml-5 mr-auto h-20">
                            <p className="text-xl font-semibold text-black my-2">{certification}</p>
                        </div>
                    </div>
                    <p className="text-base text-black my-2">Issued by {organization}</p>
                    <p className="text-base leading-relaxed text-black my-2">{time}</p>
                    <div className="text-center mt-5">
                        <a href={link} target=" _blank " className="inline-flex items-center justify-center pb-0.5 text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600">
                            Show certification
                            <AiOutlineArrowRight className="ml-2 font-extrabold" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}