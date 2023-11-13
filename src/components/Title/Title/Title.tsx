import React from "react"
import styles from './Title.module.scss'

interface Title {
    title: any
}

function Title({ title }: Title) {
    return (
        <>
            <section className="">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <h2 className="mt-20 mb-5 md:mt-36 lg:my-32 text-7xl sm:text-8xl font-bold leading-none text-center  section-heading font-Montserrat text-black dark:text-gray-300" data-outline={`${title}`}>{title}</h2>
                </div>
            </section>
        </>
    )
}

export default Title