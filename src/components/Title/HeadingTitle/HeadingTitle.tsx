import React from "react"
import styles from './HeadingTitle.module.scss'

interface HeadingTitle {
    title: any
}

function HeadingTitle({ title }: HeadingTitle) {
    return (
        <>
            <div className="text-center my-10">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-slate-800 dark:text-gray-300">
                    <span className="border-b-4 border-[#289EFF]"> {title} </span>
                </h2>
            </div>
        </>
    )
}

export default HeadingTitle