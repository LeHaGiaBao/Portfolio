import { school } from "@/data/school"
import EducationBlock from "@/components/Education/EducationBlock"

export default function Education() {
    return (
        <>
            <section className="text-gray-800">
                <div className="container mx-auto flex flex-col p-6">
                    <div className="divide-y divide-gray-300">
                        {
                            school.map(({ id, image, school, degree, time }) => {
                                return (
                                    <EducationBlock key={id} image={image} school={school} degree={degree} time={time} />
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}