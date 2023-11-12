import React from 'react'
import styles from './StatsBlock.module.scss'
import CountUp from 'react-countup';

interface StatsBlock {
    number: any,
    title: any,
    content: any,
}

function StatsBlock({ number, title, content }: StatsBlock) {
    return (
        <>
            <div className={`${styles.item} dark:text-gray-300`}>
                <h2 className={`${styles.number}`}>
                    <CountUp end={number} enableScrollSpy scrollSpyOnce className={`${styles.number}`} />
                    +
                </h2>
                <h3 className={`${styles.statsSubHeading}`}>{title}</h3>
                <p>
                    {content}
                </p>
            </div>
        </>
    )
}

export default StatsBlock