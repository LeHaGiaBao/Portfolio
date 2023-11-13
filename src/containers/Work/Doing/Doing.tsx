import React from "react"
import styles from './Doing.module.scss'
import { services } from "@/data/services"
import DoingBlock from "@/components/Doing"

function Doing() {
    return (
        <>
            <section className="py-10">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid max-w-xl grid-cols-1 mx-auto text-center lg:max-w-full lg:grid-cols-3 gap-x-6 xl:gap-x-12 gap-y-6">
                        {
                            services.map(({ id, image, title, content }) => {
                                return (
                                    <DoingBlock key={id} image={image} title={title} content={content} />
                                )
                            })
                        }
                    </div>
                </div>
            </section>

        </>
    )
}

export default Doing