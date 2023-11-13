import React from "react"
import styles from './WorksBlock.module.scss'
import Image from "next/image"

interface WorksBlock {
    image: any,
    title: any,
    content: any
}

function WorksBlock({ image, title, content }: any) {
    return (
        <>
            <div className={`${styles.item}`}>
                <div className={`${styles.icon}`}>
                    <Image src={image} alt="illustration" className="mx-auto" />
                </div>
                <h3 className={`${styles.itemHeading}`}>{title}</h3>
                <p className={`${styles.itemDesc}`}>
                    {content}
                </p>
            </div>
        </>
    )
}

export default WorksBlock