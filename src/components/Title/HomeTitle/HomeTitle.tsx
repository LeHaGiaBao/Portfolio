import React from 'react';
import styles from './HomeTitle.module.scss'

interface HomeTitle {
    title: string
}

function HomeTitle({ title }: HomeTitle) {
    return (
        <>
            <div className="text-center pt-20 pb-10 md:py-20">
                <div className="relative inline-flex">
                    <span className="absolute inset-x-0 bottom-0 border-b-[25px] border-[#289EFF] dark:border-gray-600"></span>
                    <h1 className="relative text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-800 dark:text-[#289EFF]">{title}</h1>
                </div>
            </div>
        </>
    );
}

export default HomeTitle;