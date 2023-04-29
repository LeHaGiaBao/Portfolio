import Link from "next/link"
import { AiOutlineArrowLeft } from 'react-icons/ai'

export default function ComingSoon() {
    return (
        <>
            <div className="min-h-screen text-gray-900 dark:text-gray-300 flex flex-col items-center justify-center">
                <h1 className="text-5xl font-bold mb-8 animate-pulse text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                    Coming Soon
                </h1>
                <p className="text-lg mb-8 text-center">
                    I am working hard to bring you something amazing. Stay tuned!
                </p>
                <Link href="/">
                    <button className="inline-flex items-center font-medium text-sm px-8 py-3 mr-2 mb-2 text-center rounded-lg text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800">
                        <div className="mr-2">
                            <AiOutlineArrowLeft />
                        </div>
                        Back to homepage
                    </button>
                </Link>
            </div>
        </>
    )
}