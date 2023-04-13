import { certification } from "@/data/certification"
import CertificationBlock from "@/components/Certification/CertificationBlock"

export default function Certification() {
    return (
        <>
            <section className="py-14">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid max-w-xl grid-cols-1 mx-auto text-center lg:max-w-full lg:grid-cols-3 gap-x-6 xl:gap-x-12 gap-y-6">
                        {
                            certification.map(({ id, image, certification, organization, time, link }) => {
                                return <CertificationBlock key={id} image={image} certification={certification} organization={organization} time={time} link={link} />
                            })
                        }
                    </div>
                </div>
            </section>

        </>
    )
}