import React from "react"
import styles from './Error404.module.scss'
import Image from "next/image"
import Image404 from "@/assets/Error/Image404.png"
import Link from "next/link"
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { PATH_NAME } from "@/routes/pathName"

function ErrorAdmin() {
    return (
        <>
            <section className="flex items-center h-full p-16 text-gray-900 dark:text-gray-300">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <div className="max-w-md text-center">
                        <Image src={Image404} alt="" className="object-contain sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                        <p className="text-2xl font-semibold md:text-3xl mt-4 mb-8">Sorry, the page you are looking for could not be found.</p>
                        <Link href={PATH_NAME.LOGIN}>
                            <button className="inline-flex items-center font-medium text-sm px-8 py-3 mr-2 mb-2 text-center rounded-lg text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800">
                                <div className="mr-2">
                                    <AiOutlineArrowLeft />
                                </div>
                                Back to login
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ErrorAdmin