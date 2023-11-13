import React from "react"
import styles from './Title.module.scss'

interface Title {
    title: any
}

function Title({ title }: Title) {
    return (
        <>
            {
                <div className="flex items-end justify-between mt-20">
                    <div className="flex-1 text-center lg:text-left">
                        <h2 className="text-2xl font-bold leading-tight text-gray-900 dark:text-gray-300 sm:text-4xl lg:text-3xl">
                            <span className="border-b-4 border-cyan-500">{title}</span>
                        </h2>
                    </div>
                </div>
            }
        </>
    )
}

export default Title