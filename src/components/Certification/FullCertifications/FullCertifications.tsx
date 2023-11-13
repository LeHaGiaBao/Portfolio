import React from "react"
import styles from './FullCertifications.module.scss'
import { certification } from "@/data/certification"
import CertificationBlock from "../CertificationBlock"

function FullCertifications() {
    return (
        <>
            <section className="mb-20">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="grid grid-cols-1 gap-6 xl:gap-10 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            certification.map(({ id, image, certification, organization, time, link }) => {
                                return (
                                    <CertificationBlock key={id} image={image} certification={certification} organization={organization} time={time} link={link} />
                                )
                            }).reverse()
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default FullCertifications