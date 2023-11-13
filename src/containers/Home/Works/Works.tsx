import React from "react";
import styles from './Works.module.scss'
import WorksBlock from "@/components/Works/WorksBlock";
import { services } from '@/data/services'

function Works() {
    return (
        <>
            <div className="container mx-auto px-6">
                <section className={`${styles.services}`}>
                    <div className="container text-black dark:text-white">
                        <div className={`${styles.allItems}`}>
                            {
                                services.map(({ id, image, title, content }) => {
                                    return (
                                        <WorksBlock key={id} image={image} title={title} content={content} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Works