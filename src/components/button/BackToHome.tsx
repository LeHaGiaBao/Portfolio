import Link from "next/link"
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { PATH_NAME } from "@/routes/pathName"

export default function BackToHome() {
    return (
        <>
            <Link href={PATH_NAME.ROOT}>
                <button className="inline-flex items-center font-medium text-sm px-8 py-3 mr-2 mb-2 text-center rounded-lg text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800">
                    <div className="mr-2">
                        <AiOutlineArrowLeft />
                    </div>
                    Back to homepage
                </button>
            </Link>
        </>
    )
}