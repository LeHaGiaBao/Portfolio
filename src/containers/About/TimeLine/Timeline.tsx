import React from "react"
import styles from './TimeLine.module.scss'
import { experience } from "@/data/experience"
import TimelineBlock from "@/components/Timeline"

function Timeline() {
    return (
        <>
            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                <div className="container">
                    <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">
                        {
                            experience.map(({ id, ExID, image, title, organization, time }) => {
                                return (
                                    <TimelineBlock key={id} ExID={ExID} image={image} title={title} organization={organization} time={time} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Timeline