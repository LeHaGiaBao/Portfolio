import Link from "next/link"
import { FcDocument } from 'react-icons/fc'

export default function SeeMyResume() {
    return (
        <>
            <Link href="/">
                <button className="inline-flex items-center font-medium text-xl px-8 py-4 mr-2 mb-2 text-center rounded-lg text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800">
                    See My Resume
                    <div className="ml-2 ">
                        <FcDocument className="w-7 h-7" />
                    </div>
                </button>
            </Link>
        </>
    )
}