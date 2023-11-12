import React from 'react'
import styles from './Stats.module.scss'
import StatsBlock from '@/components/Stats/StatsBlock'
import { stats } from '@/data/stats'

function Stats() {
    return (
        <>
            <div className="container mx-auto px-6">
                <section className={`${styles.stats}`}>
                    <div className="container text-black dark:text-white">
                        <div className={`${styles.allItems}`}>
                            {
                                stats.map(({ id, number, title, content }) => {
                                    return (
                                        <StatsBlock key={id} number={number} title={title} content={content} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Stats