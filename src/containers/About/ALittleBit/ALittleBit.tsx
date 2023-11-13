import React from 'react'
import styles from './ALittleBit.module.scss'
import { stats } from '@/data/stats'
import ALittleBitBlock from '@/components/ALittleBit/ALittleBitBlock'

function ALittleBit() {
    return (
        <>
            <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 my-32 text-center lg:mt-24 sm:gap-x-8 md:grid-cols-3">
                    {
                        stats.map(({ id, number, title }) => {
                            return (
                                <ALittleBitBlock key={id} number={number} title={title} />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default ALittleBit