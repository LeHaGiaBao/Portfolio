import Image from "next/image"
import { AiOutlineArrowRight } from 'react-icons/ai'

export default function PortfolioBlock({ image, title, content }: any) {
    return (
        <>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                <a href="#">
                    <Image src={image} alt="illustration" className="rounded-t-lg" />
                </a>
                <div className="p-5">
                    <div className="text-center my-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{title}</h5>
                    </div>
                    <p className="mb-3 font-normal text-gray-700">{content}</p>
                    <div className="text-center mt-5">
                        <button className="inline-flex items-center px-7 py-2 text-sm font-medium text-center rounded-lg text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800">
                            Read more
                            <div className="ml-2">
                                <AiOutlineArrowRight />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}