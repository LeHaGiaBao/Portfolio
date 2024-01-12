import React from 'react';
import styles from './ALittleBitBlock.module.scss'
import CountUp from 'react-countup';

interface ALittleBitBlock {
    number: any,
    title: any
}

function ALittleBitBlock({ number, title }: ALittleBitBlock) {
    return (
        <>
            <div>
                <h3 className="font-bold text-5xl md:text-6xl lg:text-7xl">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
                        <CountUp end={number} enableScrollSpy scrollSpyOnce className="number" />
                        +
                    </span>
                </h3>
                <p className="mt-4 text-xl font-medium text-slate-800 dark:text-gray-300">{title}</p>
            </div>
        </>
    )
}

export default ALittleBitBlock