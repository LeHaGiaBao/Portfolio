import { experience } from "@/data/experience"
import TimelineBlock from "@/components/Timeline/TimelineBlock"

export default function Timeline() {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-5 mx-auto flex flex-wrap">
                    {
                        experience.map(({ id, image, title, organization, time }) => {
                            return (
                                <TimelineBlock key={id} image={image} title={title} organization={organization} time={time} />
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}