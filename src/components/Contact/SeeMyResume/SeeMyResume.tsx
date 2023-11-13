import React from "react"
import styles from './SeeMyResume.module.scss'
import Link from "next/link"
import { FcDocument } from 'react-icons/fc'
import { PATH_NAME } from "@/routes/pathName"

function SeeMyResume() {
    return (
        <>
            <Link href={PATH_NAME.ROOT}>
                <button className="inline-flex items-center font-medium text-xl px-8 py-4 mb-2 text-center rounded-lg text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800">
                    See My Resume
                    <FcDocument className="w-7 h-7 ml-2" />
                </button>
            </Link>
        </>
    )
}

export default SeeMyResume