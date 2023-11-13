import React from "react"
import styles from './Volunteering.module.scss'
import { volunteering } from "@/data/volunteering"
import VolunteeringBlock from "@/components/Volunteering"

function Volunteering() {
    return (
        <>
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl my-20">
                {
                    volunteering.map(({ id, image, title, time, organization }) => {
                        return <VolunteeringBlock key={id} image={image} title={title} time={time} organization={organization} />
                    })
                }
            </div>
        </>
    )
}

export default Volunteering